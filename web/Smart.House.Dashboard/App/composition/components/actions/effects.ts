import { fetch } from 'domain-task';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../composition/../../store';

export const TELEVISION_FIREPLACE = 'TelevisionFireplaceAction';

export interface TelevisionFireplaceAction {
    type: 'TelevisionFireplaceAction';
    payload: {
        id: number,
        value: boolean
    };
}

type KnownAction = TelevisionFireplaceAction;

export const actionCreators = {
    setFireplace: (id: number, value: boolean): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        await dispatch({ type: TELEVISION_FIREPLACE, payload: { id: id, value: value} });
    }
};