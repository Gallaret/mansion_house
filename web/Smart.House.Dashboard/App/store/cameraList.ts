import { fetch } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { CameraModel } from '../models/cameraModel';

export const INIT_CAMERAS = 'InitCamerasAction';
export const UPDATE_CAMERA = 'UpdateCameraAction';

export interface CameraListState {
    cameraList: CameraModel[];
    listVisible: boolean;
}

const DefaultCameraListState: CameraListState = {
    cameraList: [],
    listVisible: true
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
    getCameraState: (id: number): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        var state = getState().cameras.cameraList
            .find(camera => camera.id == id);

        let response = <Response>await fetch('/camera/getCameras?id=' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            var cameraState = await response.json();
            var newState = {
                name: state.name,
                url: state.url,
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

export const reducer: Reducer<CameraListState> = (state: CameraListState, action: KnownAction) => {
    switch (action.type) {
        case INIT_CAMERAS:
            return { ...state, cameraList: action.payload, listVisible: true };
        case UPDATE_CAMERA:
            return {
                ...state, cameraList: state.cameraList.map(
                    camera => camera.id == action.payload.id ? action.payload : camera)
            };
        default:
            return state || DefaultCameraListState;
    }
};
