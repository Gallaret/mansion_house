import { ORM } from 'redux-orm';
import { Display, Camera, Harmonogram } from './model';
import { CameraViewModel } from './viewmodel';

export const orm = new ORM();
orm.register(Display, Camera, Harmonogram);

export const activeCamerasSelector = orm.createSelector(session => {
    return session.DisplayCameras.all().toRefArray().map(camera => {
        const obj = session.Camera.withId(camera.toCameraId);

        return <CameraViewModel> {
            id: obj.id,
            name: obj.name,
            isRecording: obj.isRecording,
            address: 'http://192.168.0.234/image/jpeg.cgi',
            isMotionDetected: obj.isMotionDetected
        };
    });
});