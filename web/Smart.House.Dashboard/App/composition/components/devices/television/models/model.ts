import { Model, many, attr } from "redux-orm";

export class Television extends Model {
    static modelName: string;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            isFireplaceRunning: attr(),
            isAquariumRunning: attr(),
            harmonograms: many("Harmonogram")
        };
    }
}

Television.modelName = "Television";

export class Harmonogram extends Model {
    static modelName: string;

    static get fields() {
        return {};
    }
}

Harmonogram.modelName = "Harmonogram";

