import { fetch } from 'domain-task';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../../../../store';
import { CameraViewModel } from '../model/viewmodel';
import { Display } from '../model/model';
import { orm } from '../model/orm';
import { createReducer } from 'redux-orm';

export const CREATE_DISPLAY = 'CreateDisplayAction';
export const ADD_CAMERA = 'AddCameraAction';
export const UPDATE_CAMERA = 'UpdateCameraAction';

export interface CreateDisplayAction {
    type: 'CreateDisplayAction';
    payload: number;
}

export interface AddCameraAction {
    type: 'AddCameraAction';
    payload: {
        display: number,
        camera: CameraViewModel
    }
}

export interface UpdateCameraAction {
    type: 'UpdateCameraAction';
    payload: CameraViewModel;
}

type KnownAction = CreateDisplayAction | AddCameraAction | UpdateCameraAction

export const actionCreators = {
    updateCamera: (camera: CameraViewModel): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        const session = orm.session(getState().display);
        console.log(session);

        var state = session.Camera.withId(camera.id);

        var newState = <CameraViewModel>{
            name: state.name,
            address: state.address,
            id: state.id,
            isRecording: camera.isRecording,
            isMotionDetected: camera.isMotionDetected
        };

        await dispatch({ type: UPDATE_CAMERA, payload: newState });
    }
};

const reducer = (session, action: KnownAction) => {
    const { Display, Camera } = session;

    switch (action.type) {
        case CREATE_DISPLAY:
            Display.create(action.payload);
            break;
        case ADD_CAMERA:
            Camera.create(action.payload.camera);
            Display.withId(action.payload.display)
                .cameras.add(Camera.withId(action.payload.camera.id));
            break;
        case UPDATE_CAMERA:
            Camera.withId(action.payload.id).update(action.payload);
            break;
    }
    return <Display>session.state;
};

export default createReducer(orm, reducer);