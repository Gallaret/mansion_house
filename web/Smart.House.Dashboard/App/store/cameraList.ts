import { fetch } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { CameraModel } from '../models/cameraModel';

export const INIT_CAMERAS = 'InitCamerasAction';
export const UPDATE_CAMERA = 'UpdateCameraAction';

export interface CameraListState {
    cameraList: CameraModel[];
}

const DefaultCameraListState: CameraListState = {
    cameraList: []
}

export interface UpdateCameraAction {
    type: 'UpdateCameraAction';
    payload: CameraModel;
}

interface CameraListResultModel {
    cameraList: CameraModel[];
}

interface InitCamerasAction {
    type: 'InitCamerasAction';
    payload: CameraModel[];
}

// TODO import Success and Invalid actions from server and handle them
type KnownAction = InitCamerasAction | UpdateCameraAction


let counter = 0;

export const actionCreators = {
    getCameraState: (model: CameraModel): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        console.log('getState');

        var state = getState().cameras.cameraList
            .find(camera => camera.id == model.id);

        var newState = {
            name: state.name,
            url: state.url + '?data=' + counter++,
            id: state.id,
            isRecording: state.isRecording,
            isMotionDetected: state.isMotionDetected
        };

        let response = <Response>await fetch('/camera/getCameras?id=' + model.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            var cameraState = await response.json();

            newState.isMotionDetected = cameraState.isMotionDetected;
            newState.isRecording = cameraState.isRecording;
        }

        dispatch({ type: UPDATE_CAMERA, payload: newState });
    },

    startRecording: (model: CameraModel): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        let response = <Response>await fetch('/camera/startRecording', {
            method: 'POST',
            body: JSON.stringify(model.id),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('start recording');
        }
    },

    stopRecording: (model: CameraModel): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        let response = <Response>await fetch('/camera/stopRecording', {
            method: 'POST',
            body: JSON.stringify(model.id),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('stop recording');
        }
    }
};

export const reducer: Reducer<CameraListState> = (state: CameraListState, action: KnownAction) => {
    switch (action.type) {
        case INIT_CAMERAS:
            return { ...state, cameraList: action.payload };
        case UPDATE_CAMERA:
            return {
                ...state, cameraList: state.cameraList.map(
                    camera => camera.id == action.payload.id ? action.payload : camera)
            };
        default:
            return state || DefaultCameraListState;
    }
};
