import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as CameraStore from '../../../store/cameraList';
import { CameraModel } from '../../../models/cameraModel';
import CameraItem from './Camera';

interface Props {
    list: CameraModel[];
}

type CamerasProps = Props & typeof CameraStore.actionCreators;

class CameraList extends React.Component<CamerasProps, CameraStore.CameraListState> {

    render() {
        const { getCameraState, startRecording, stopRecording } = this.props
        return <div className="form-inline" style={{ height: '200px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-block' }}> {this.props.list.map((child) =>
                        <CameraItem key={child.id} camera={child}
                            getCameraState={() => getCameraState(child)}
                            startRecording={() => startRecording(child)}
                            stopRecording={() => stopRecording(child)} />)}
                    </div>
               </div>
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        list: state.cameras.cameraList
    };
}

// Wire up the React component to the Redux store
export default connect(
    mapStateToProps,
    CameraStore.actionCreators
)(CameraList);

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}