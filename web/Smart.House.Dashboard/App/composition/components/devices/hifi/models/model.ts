import { Model, many, attr } from "redux-orm";

export class Hifi extends Model {
    static modelName: string;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            speakers: many("Speaker"),
            harmonograms: many("Harmonogram")
        };
    }
}

Hifi.modelName = "Hifi";

export class Speaker extends Model {
    static modelName: string;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            type: attr(),
            position: attr(),
            isActive: attr()
        };
    }
}

Speaker.modelName = "Speaker";

export class Harmonogram extends Model {
    static modelName: string;

    static get fields() {
        return {};
    }
}

Harmonogram.modelName = "Harmonogram";
