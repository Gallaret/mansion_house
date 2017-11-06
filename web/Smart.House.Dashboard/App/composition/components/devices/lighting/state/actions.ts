import { Lamp } from '../models/model';

export const SET_COLOR = 'SetColorAction';

export interface SetColorAction {
    type: 'SetColorAction';
    payload: {
        id: number,
        color: string
    };
}

export const ADD_LAMP = 'AddLampAction';

export interface AddLampAction {
    type: 'AddLampAction';
    payload: Lamp;
}
