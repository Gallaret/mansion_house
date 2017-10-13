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
    getCameraState: (id: number): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        const session = orm.session(getState().display);
        console.log(session);

        var state = session.Camera.withId(id);

        let response = <Response>await fetch('/camera/getCameras?id=' + state.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            var cameraState = await response.json();
            var newState = <CameraViewModel>{
                name: state.name,
                address: state.address,
                id: state.id,
                isRecording: cameraState.isRecording,
                isMotionDetected: cameraState.isMotionDetected
            };

            dispatch({ type: UPDATE_CAMERA, payload: newState });
        }
    },

    startRecording: (id: number): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        let response = <Response>await fetch('/camera/startRecording', {
            method: 'POST',
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('start recording');
        }
    },

    stopRecording: (id: number): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        let response = <Response>await fetch('/camera/stopRecording', {
            method: 'POST',
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('stop recording');
        }
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