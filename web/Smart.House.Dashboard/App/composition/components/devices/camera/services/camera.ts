import { CameraViewModel } from '../model/viewmodel';

export interface CameraService {
    startRecording: (id: number) => void;
    stopRecording: (id: number) => void;
    getCameraState: (id: number) => Promise<CameraViewModel>;
}