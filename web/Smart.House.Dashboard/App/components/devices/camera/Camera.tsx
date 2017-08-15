import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as CameraStore from '../../../store/camera';
import { CameraModel } from '../../../models/cameraModel';

interface Props {
    camera: CameraModel
}

interface PrivateProps {
    intervals: any[],
    getCameraImage: any,
    checkCameraMotion: any
}

type CameraProps = Props & typeof CameraStore.actionCreators;

export default class CameraItem extends React.Component<CameraProps, CameraStore.CameraState> {

    defaultProps: Partial<PrivateProps> = {
        intervals: [],
    };

    componentDidMount() {

        var model = this.props.camera;
        var getCameraImage = this.props.getCameraImage;
        var checkCameraMotion = this.props.checkCameraMotion;

        this.defaultProps.intervals.push(
            setInterval(function () {
                getCameraImage(model);
            }, 1000));

        this.defaultProps.intervals.push(
            setInterval(function () {
                checkCameraMotion(model);
            }, 10000));
    }

    componentWillUnmount() {

        for (var item in this.defaultProps.intervals) {
            clearInterval(this.defaultProps.intervals[item]);
        }
    }

    render() {
        const { camera } = this.props
        return <div className="form-group text-center" style={{ margin: 'auto' }}>
                   <p className="text-center">
                       <img src={camera.url} style={{ height: '150px', width: '250px' }} className={camera.isMotionDetected ? 'camera-alert' : 'camera-no-alert'} />
                   </p>
                   <label>{camera.name}</label>
               </div>;
    }
}