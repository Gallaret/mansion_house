import { Ambilight } from '../models/model';

export const SET_EFFECT = 'SetEffectAction';

export interface SetEffectAction {
    type: 'SetEffectAction';
    payload: {
        id: number,
        pattern: string
    };
}

export const ADD = 'AddAction';

export interface AddAction {
    type: 'AddAction';
    payload: Ambilight;
}
