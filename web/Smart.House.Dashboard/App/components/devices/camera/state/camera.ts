import { fetch } from 'domain-task';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../../../../store';
import { CameraViewModel } from '../model/viewmodel';
import { Camera } from '../model/model';
import { orm } from '../model/orm';
import { createReducer } from 'redux-orm';

export const UPDATE_CAMERA = 'UpdateCameraAction';

export interface State {
    Camera: Camera
}

export interface UpdateCameraAction {
    type: 'UpdateCameraAction';
    payload: CameraViewModel;
}

type KnownAction = UpdateCameraAction

let counter = 0;

export const actionCreators = {
    getCameraState: (id: number): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        const session = orm.session(getState().display);
        console.log(session);

        //var camera = session.Display.withId(1).cameras.withId(id);
        var state = session.Camera.withId(1);

        console.log(state);

        let response = <Response>await fetch('/camera/getCameras?id=' + id, {
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
    const { Camera } = session;

    switch (action.type) {
        case UPDATE_CAMERA:
            Camera.withId(action.payload.id).update(action.payload);
            break;
    }

    return session.state;
};

export default createReducer(orm, reducer);