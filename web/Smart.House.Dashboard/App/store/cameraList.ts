import { fetch } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { CameraModel } from '../models/cameraModel';

export const INIT_CAMERAS = 'InitCamerasAction';
export const GET_CAMERAS_REQUEST = 'GetCamerasRequestAction';
export const GET_CAMERAS_RECEIVED = 'GetCamerasReceivedAction';


let Cameras = ([] as CameraModel[]);
Cameras.push({
    name: 'camera1',
    url: 'http://192.168.0.234/image/jpeg.cgi',
    id: 1,
    isActive: false
});
Cameras.push({
    name: 'camera2',
    url: 'http://192.168.0.234/image/jpeg.cgi',
    id: 2,
    isActive: false
});

export interface CameraListState {
    cameraList: CameraModel[];
    fetched: boolean;
}

const DefaultCameraListState: CameraListState = {
    cameraList: Cameras,
    fetched: false
}

interface CameraListResultModel {
    cameraList: CameraModel[];
}

interface InitCamerasAction {
    type: 'InitCamerasAction';
}

interface GetCamerasRequestAction {
    type: 'GetCamerasRequestAction';
}

interface GetCamerasReceivedAction {
    type: 'GetCamerasReceivedAction';
    payload: CameraListResultModel
}

// TODO import Success and Invalid actions from server and handle them
type KnownAction = InitCamerasAction | GetCamerasRequestAction | GetCamerasReceivedAction;

export const actionCreators = {

    getCameras: (): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        dispatch({ type: GET_CAMERAS_REQUEST });

        let response = <Response>await fetch('/camera/getCameras?id=camera2', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: ""
        });

        if (response.ok) {
            var result: CameraListResultModel = await response.json();
            dispatch({ type: GET_CAMERAS_RECEIVED, payload: result });
        }
    }
};

export const reducer: Reducer<CameraListState> = (state: CameraListState, action: KnownAction) => {
    switch (action.type) {
        case INIT_CAMERAS:
            return { ...state, fetched: true };
        case GET_CAMERAS_REQUEST:
            return { ...state, cameraList: state.cameraList, fetched: false };
        case GET_CAMERAS_RECEIVED:
            return { cameraList: action.payload.cameraList, fetched: false };
        default:
            const exhaustiveCheck: never = action;
    }

    return state || DefaultCameraListState;
};
