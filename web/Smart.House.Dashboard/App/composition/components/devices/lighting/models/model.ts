import { Model, many, attr } from "redux-orm";

export class Lamp extends Model {
    static modelName: string;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            color: attr(),
            position: attr(),
            isActive: attr(),
            harmonograms: many("Harmonogram")
        };
    }
}

Lamp.modelName = "Lamp";

export class Harmonogram extends Model {
    static modelName: string;

    static get fields() {
        return {};
    }
}

Harmonogram.modelName = "Harmonogram";
