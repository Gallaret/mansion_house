import { injectable } from "inversify";
import { AppThunkAction } from '../store';
import { Reducer, ActionCreator } from 'redux';
import { CameraService } from '../components/devices/camera/services/camera';
import { CameraViewModel } from '../components/devices/camera/model/viewmodel';
import { fetch } from 'domain-task';

@injectable()
export class CameraActionService implements CameraService {

    async getCameraState(id: number): Promise<CameraViewModel> {
        let response = <Response>await fetch('/camera/getCameras?id=' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            var camera = await response.json();
            return <CameraViewModel>{
                id: id,
                isMotionDetected: camera.isMotionDetected,
                isRecording: camera.isRecording
            };
        }
        return null;
    }

    async startRecording(id: number) {
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
    };

    async stopRecording(id: number) {
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
    };

   
}