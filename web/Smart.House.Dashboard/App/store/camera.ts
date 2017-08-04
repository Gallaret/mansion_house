import { fetch } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { CameraModel } from '../models/cameraModel';

export const INIT_CAMERAS_REQUEST = 'InitCamerasRequestAction';
export const GET_CAMERA_IMAGE_REQUEST = 'GetCameraImageRequestAction';
export const GET_CAMERA_IMAGE_RECEIVED = 'GetCameraImageReceivedAction';

export interface CameraState {
    list: CameraModel[]
}

const DefaultCameraState: CameraState = {
    list: null
}

interface CameraResultModel {
    model: CameraModel;
}

interface GetCameraImageRequestAction {
    type: 'GetCameraImageRequestAction';
}

interface GetCameraImageReceivedAction {
    type: 'GetCameraImageReceivedAction';
    payload: CameraModel[]
}

interface InitCamerasAction {
    type: 'InitCamerasRequestAction',
    payload: CameraModel[]
}

// TODO import Success and Invalid actions from server and handle them
type KnownAction = GetCameraImageReceivedAction | GetCameraImageRequestAction | InitCamerasAction;

let counter = 0;

export const actionCreators = {

    getCameraImage: (model: CameraModel): AppThunkAction<KnownAction> => async (dispatch, getState) => {  

        var state = getState();
        var newState = [];
        for (var i in state.camera.list) {
            if (state.camera.list[i].id == model.id) {
                newState.push({
                    name: model.name,
                    url: model.url + '?data=' + counter++,
                    id: model.id,
                    isActive: false
                });
            }
            else
            {
                newState.push(state.camera.list[i]);
            }
        }

        dispatch({
            type: GET_CAMERA_IMAGE_RECEIVED, payload: newState
        });
    },

    checkCameraMotion: (model: CameraModel): AppThunkAction<KnownAction> => async (dispatch, getState) => {

        let response = <Response>await fetch('/camera/getCameras?id=' + model.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            var result = await response.json();

            if (result){
                console.log(result);
            }
            //dispatch({ type: GET_CAMERAS_RECEIVED, payload: result });
        }
    }
};

export const reducer: Reducer<CameraState> = (state: CameraState, action: KnownAction) => {
    switch (action.type) {
        case INIT_CAMERAS_REQUEST:
            return { ...state, list: action.payload };
        case GET_CAMERA_IMAGE_REQUEST:
            return { ...state };
        case GET_CAMERA_IMAGE_RECEIVED:
            return { ...state, list: action.payload };
        default:
            const exhaustiveCheck: never = action;
    }

    return state || DefaultCameraState;
};
