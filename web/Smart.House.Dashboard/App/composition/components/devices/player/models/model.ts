import { Model, oneToOne, many, attr } from "redux-orm";

export class Player extends Model {
    static modelName: string;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            video: attr(),
            isRunning: attr(),
            isPaused: attr(),
            isActive: attr(),
            settings: oneToOne("Settings"),
            harmonograms: many("Harmonogram")
        };
    }
}

Player.modelName = "Player";


export class Settings extends Model {
    static modelName: string;

    static get fields() {
        return {
            id: attr(),
            backgroundPlay: attr()
        };
    }
}

Settings.modelName = "Settings";

export class Harmonogram extends Model {
    static modelName: string;

    static get fields() {
        return {};
    }
}

Harmonogram.modelName = "Harmonogram";
