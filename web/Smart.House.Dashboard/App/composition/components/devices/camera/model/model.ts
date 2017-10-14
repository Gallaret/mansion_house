import { Model, many, attr } from "redux-orm";

export class Display extends Model {
    static modelName: string;

    static get fields() {
        return {
            id: attr(),
            cameras: many("Camera")
        };
    }
}

Display.modelName = "Display";

export class Camera extends Model {
    static modelName: string;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            isRecording: attr(),
            isMotionDetected: attr(),
            harmonograms: many("Harmonogram")
        };
    }
}

Camera.modelName = "Camera";

export class Harmonogram extends Model {
    static modelName: string;

    static get fields() {
        return {};
    }
}

Harmonogram.modelName = "Harmonogram";

