import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as CameraStore from "../../../components/devices/camera/state/displayer";
import { CameraModel } from '../../../models/cameraModel';

interface Props {
    id: number,
    isActive: boolean;
    isRecording: boolean;
    isMotionDetected: boolean;
    name: string,
    address: string
}

interface State {
    id: number;
    name: string;
    address: string;
    isRecording: boolean;
    isMotionDetected: boolean;
    isActive: boolean;
}

type CameraProps = Props & typeof CameraStore.actionCreators;

let updateView;
let updateState;
let counter = 0;

export default class CameraItem extends React.Component<CameraProps, State> {
    constructor(props: CameraProps) {
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

    componentWillReceiveProps(nextProps) {
        this.setState({
            isRecording: nextProps.isRecording,
            isMotionDetected: nextProps.isMotionDetected
        });
    }

    componentDidMount() {
        updateView = setInterval(this.updateCameraView,
            1000, this.state.address, this.setState);

        updateState = setInterval(function (props) {
            return props.getCameraState(props.id);
        }, 5000, this.props);
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

    startRecording(id: number) {
        this.setState({
            isRecording: true
        });

        return this.props.startRecording(id);
    }

    stopRecording(id: number) {
        this.setState({
            isRecording: false
        });

        return this.props.stopRecording(id);
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