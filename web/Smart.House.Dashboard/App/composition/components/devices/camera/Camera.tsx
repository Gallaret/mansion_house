import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as CameraStore from "../../../components/devices/camera/state/displayer";
import { lazyInject } from '../../../../composition/ioc/decorators';
import { Services } from '../../../../composition/services/types';
import { CameraService } from "../../../../composition/components/devices/camera/services/camera";
import { CameraViewModel } from "../../../../composition/components/devices/camera/model/viewmodel";

interface Props {
    id: number,
    isActive: boolean;
    isRecording: boolean;
    isMotionDetected: boolean;
    name: string,
    address: string,
    updateCamera: (camera: CameraViewModel) => void
}

interface State {
    id: number;
    name: string;
    address: string;
    isRecording: boolean;
    isMotionDetected: boolean;
    isActive: boolean;
}

let updateView;
let updateState;
let counter = 0;

export default class CameraItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            id: props.id,
            isActive: props.isActive,
            isRecording: props.isRecording,
            isMotionDetected: props.isMotionDetected,
            name: props.name,
            address: props.address
        };

        this.setState = this.setState.bind(this);
    }

    @lazyInject(Services.CameraService)
    private _printService: CameraService;

    componentWillReceiveProps(nextProps) {
        this.setState({
            isRecording: nextProps.isRecording,
            isMotionDetected: nextProps.isMotionDetected
        });
    }

    componentDidMount() {
        updateView = setInterval(this.updateCameraView,
            5000, this.state.address, this.setState);

        updateState = setInterval(this.updateCameraState,
            5000, this.state.id,
            this._printService.getCameraState,
            this.props.updateCamera);
    }

    componentWillUnmount() {
        clearInterval(updateView);
        clearInterval(updateState);
    }

    updateCameraView(address, setState) {
        setState({
            address: address + '?data=' + counter++
        });
    }

    setActive(value: boolean) {
        this.setState({
            isActive: value
        });
    }

    async updateCameraState(id: number, getState, updateState) {
        var camera = await getState(id);
        updateState(camera);
    }

    async startRecording(id: number) {
        this.setState({
            isRecording: true
        });

        await this._printService.startRecording(id);
    }

    async stopRecording(id: number) {
        this.setState({
            isRecording: false
        });

        await this._printService.stopRecording(id);
    }

    render() {
        const { id } = this.props
        return <div className="form-group text-center camera-container" onMouseEnter={() => this.setActive(true)} onMouseLeave={() => this.setActive(false)}>
                    <p className="text-center camera-frame" style={{ margin: '0px' }}>
                        <img src={this.state.address} style={{ height: '125px', width: '200px' }}
                            className={this.state.isRecording ? 'camera-recording' : this.state.isMotionDetected ? 'camera-alert' : 'camera-no-alert'} />
                    </p>
                    <div className={this.state.isActive ? 'camera-bottom camera-visible' : 'camera-bottom camera-hidden'}>
                        <label className="camera-name">{this.state.name}</label>
                        <div style={{ float: 'right' }}>
                            <span className="glyphicon glyphicon-record camera-play" style={{ padding: '3px' }}
                                onClick={this.state.isRecording ? () => this.stopRecording(id) : () => this.startRecording(id)}></span>
                            <span className="glyphicon glyphicon-stop" style={{ width: '25px', cursor: 'pointer', color: 'gray', padding: '3px' }}
                                onClick={() => this.stopRecording(id)}></span>
                        </div>         
                   </div>
                  
               </div>
    }
}