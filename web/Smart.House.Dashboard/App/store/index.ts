import { Display } from "../components/devices/camera/model/model";
import { orm } from "../components/devices/camera/model/orm";
import * as Displayer from "../components/devices/camera/state/displayer"

export interface ApplicationState {
    navmenu: {},
    display: Display
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    display: Displayer.default
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}