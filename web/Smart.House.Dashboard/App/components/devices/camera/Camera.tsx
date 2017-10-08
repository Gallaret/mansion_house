import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as CameraStore from '../../../store/cameraList';
import { CameraModel } from '../../../models/cameraModel';

interface Props {
    camera: CameraModel
}

interface CameraState {
    model: CameraModel;
}

type CameraProps = Props & typeof CameraStore.actionCreators;

export default class CameraItem extends React.Component<CameraProps, CameraState> {

    componentDidMount() {

        var model = this.props.camera;
        var getState = this.props.getCameraState;

        setInterval(function () { return getState(model) }, 1000);
    }

    componentWillUnmount() {
        clearInterval(0);
    }

    render() {
        const { camera } = this.props
        return <div className="form-group text-center" style={{ margin: 'auto' }}>
                   <p className="text-center">
                       <img src={camera.url} style={{ height: '150px', width: '250px' }} className={camera.isMotionDetected ? 'camera-alert' : 'camera-no-alert'} />
                   </p>
                   <label>{camera.name}</label>
                   <button onClick={camera.isRecording ? () => this.props.stopRecording(camera) : () => this.props.startRecording(camera)}>Start</button>
                   <button onClick={() => this.props.stopRecording(camera)}>Stop</button>
               </div>
    }
}