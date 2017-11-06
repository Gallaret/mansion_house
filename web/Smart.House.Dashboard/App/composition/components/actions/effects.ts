import { fetch } from 'domain-task';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../composition/../../store';
import * as Ambilight from '../devices/ambilight/state/actions'
import * as Lamp from '../devices/lighting/state/actions'


export const TELEVISION_FIREPLACE = 'TelevisionFireplaceAction';

export interface TelevisionFireplaceAction {
    type: 'TelevisionFireplaceAction';
    payload: {
        id: number,
        value: boolean
    };
}

export const TELEVISION_AQUARIUM = 'TelevisionAquariumAction';

export interface TelevisionAquariumAction {
    type: 'TelevisionAquariumAction';
    payload: {
        id: number,
        value: boolean
    };
}


type KnownAction = TelevisionFireplaceAction | TelevisionAquariumAction | Ambilight.SetEffectAction | Lamp.SetColorAction;

export const AquariumBackground = 'url(images/background-flip2.jpg)';

export const actionCreators = {
    setFireplace: (id: number, value: boolean): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        await dispatch({ type: TELEVISION_FIREPLACE, payload: { id: id, value: value} });
        await dispatch({ type: Lamp.SET_COLOR, payload: { id: 1, color: value ? 'orange' : '' } });
        await dispatch({ type: Lamp.SET_COLOR, payload: { id: 2, color: value ? 'orange' : '' } });
    },

    setAquarium: (id: number, value: boolean): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        await dispatch({ type: TELEVISION_AQUARIUM, payload: { id: id, value: value } });
        await dispatch({ type: Ambilight.SET_EFFECT, payload: { id: id, pattern: value ? AquariumBackground : '' } });
        await dispatch({ type: Lamp.SET_COLOR, payload: { id: 1, color: value ? 'dodgerblue' : '' } });
        await dispatch({ type: Lamp.SET_COLOR, payload: { id: 2, color: value ? 'dodgerblue' : '' } });
    }
};