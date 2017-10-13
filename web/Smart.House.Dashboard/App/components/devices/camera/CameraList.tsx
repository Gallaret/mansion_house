import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { CameraModel } from '../../../models/cameraModel';
import CameraItem from './Camera';
import { activeCamerasSelector } from './model/orm';
import { Display, Camera } from "../../../components/devices/camera/model/model";
import { CameraViewModel } from "../../../components/devices/camera/model/viewmodel";
import * as DisplayStore from "../../../components/devices/camera/state/displayer";

interface Props {
    list: CameraViewModel[];
    listVisible: boolean;
}

interface State {
    listVisible: boolean;
}

type CamerasProps = Props & typeof DisplayStore.actionCreators;

class CameraList extends React.Component<CamerasProps, State> {
    constructor(props: CamerasProps) {
        super(props);

        this.state = {
            listVisible: props.listVisible
        }
    }

    toogleCameras() {
        this.setState({
            listVisible: !this.state.listVisible
        });
    }

    render() {
        const { getCameraState, startRecording, stopRecording } = this.props
        return <div className="form-inline" style={{ height: '200px', textAlign: 'center' }}>
                <div className="camera-topbar">
                <div style={{ height: '30px', position: 'relative' }}>
                        <span className="glyphicon glyphicon-chevron-down camera-collapse-down" onClick={() => this.toogleCameras()} style={{ padding: '7px' }} />
                        <span className="glyphicon glyphicon-play camera-play" style={{ padding: '7px' }}></span>
                        <span className="glyphicon glyphicon-eye-open camera-motion" style={{ padding: '7px' }}></span>
                        <span className="glyphicon glyphicon-volume-up camera-sound" style={{ padding: '7px' }}></span>
                        <span className="glyphicon glyphicon-option-horizontal camera-topbar-settings"></span>
                    </div>
                    <div className={this.state.listVisible ? 'slide-down' : 'slide-up'}> {this.props.list.map((camera) =>
                        <CameraItem key={camera.id}
                                    id={camera.id}
                                    address={camera.address}
                                    name={camera.name} 
                                    isActive={false}
                                    isMotionDetected={camera.isMotionDetected}
                                    isRecording={camera.isRecording}
                                    getCameraState={() => getCameraState(camera.id)}
                                    startRecording={() => startRecording(camera.id)}
                                    stopRecording={() => stopRecording(camera.id)} />)}
                   </div>
                </div>
               </div>
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        list: activeCamerasSelector(state.display),
        listVisible: true
    };
}

// Wire up the React component to the Redux store
export default connect(
    mapStateToProps,
    DisplayStore.actionCreators
)(CameraList);

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}