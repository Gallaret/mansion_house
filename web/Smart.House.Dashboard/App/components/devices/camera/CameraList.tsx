import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as CameraStore from '../../../store/camera';
import { CameraModel } from '../../../models/cameraModel';
import CameraItem from './Camera';

interface CamerasProps {
    list: CameraModel [];
}

type Props = CamerasProps & typeof CameraStore.actionCreators;

class CameraList extends React.Component<Props, CameraStore.CameraState> {

    render() {
        return <div className="form-inline" style={{ height: '200px', textAlign: 'center' }}>
                <div style={{ display: 'inline-block' }}> {
                    this.props.list.map((child) =>
                        <CameraItem key={child.id} camera={child}
                            getCameraImage={(model: CameraModel) => this.props.getCameraImage(model)}
                            checkCameraMotion={(model: CameraModel) => this.props.checkCameraMotion(model)} /> )}
                </div>
              </div>
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        list: state.camera.list
    };

}

// Wire up the React component to the Redux store
export default connect(
    mapStateToProps, // Selects which state properties are merged into the component's props
    CameraStore.actionCreators                    // Selects which action creators are merged into the component's props
)(CameraList);

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}