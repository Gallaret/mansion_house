import { Model, many, attr } from "redux-orm";

export class Ambilight extends Model {
    static modelName: string;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            background: attr(),
            isActive: attr(),
            harmonograms: many("Harmonogram")
        };
    }
}

Ambilight.modelName = "Ambilight";

export class Harmonogram extends Model {
    static modelName: string;

    static get fields() {
        return {};
    }
}

Harmonogram.modelName = "Harmonogram";
