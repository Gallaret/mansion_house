import { Display } from "../components/devices/camera/model/model";
import { Television } from "../components/devices/television/models/model";
import { Ambilight } from "../components/devices/ambilight/models/model";
import { Lamp } from "../components/devices/lighting/models/model";
import { Hifi } from "../components/devices/hifi/models/model";
import { Player } from "../components/devices/player/models/model";
import * as Displayer from "../components/devices/camera/state/displayer";
import * as TelevisionReducer from "../components/devices/television/states/television";
import * as AmbilightReducer from "../components/devices/ambilight/state/reducer";
import * as LampReducer from "../components/devices/lighting/state/reducer";
import * as HifiReducer from "../components/devices/hifi/state/reducer";
import * as PlayerReducer from "../components/devices/player/state/reducer";

export interface ApplicationState {
    navmenu: {},
    display: Display,
    television: Television,
    ambilight: Ambilight,
    lamp: Lamp,
    hifi: Hifi,
    player: Player
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    display: Displayer.default,
    television: TelevisionReducer.default,
    ambilight: AmbilightReducer.default,
    lamp: LampReducer.default,
    hifi: HifiReducer.default,
    player: PlayerReducer.default
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}