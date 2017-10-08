import { fetch } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { CameraModel } from '../models/cameraModel';
import * as Camera from './cameraList';

export interface CameraState {
    model: CameraModel;
}

type KnownAction = Camera.UpdateCameraAction

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

        dispatch({ type: Camera.UPDATE_CAMERA, payload: newState });
    },

    startRecording: (model: CameraModel): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        let response = <Response>await fetch('/camera/startRecording?id=' + model.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('start recording');
        }
    },

    stopRecording: (model: CameraModel): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        console.log('stoprecording');

        let response = <Response>await fetch('/camera/stopRecording?id=' + model.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('stop recording');
        }
    }
};
