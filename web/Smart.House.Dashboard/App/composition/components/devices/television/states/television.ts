import { fetch } from 'domain-task';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../../../../store';
import { Television } from '../models/model';
import { orm } from '../models/schema';
import { createReducer } from 'redux-orm';
import { TELEVISION_FIREPLACE, TelevisionFireplaceAction } from '../../../actions/effects';

export const ADD_TELEVISION = 'AddTelevisionAction';

export interface AddTelevisionAction {
    type: 'AddTelevisionAction';
    payload: Television;
}

type KnownAction = TelevisionFireplaceAction & AddTelevisionAction;

export const actionCreators = {
    
};

const reducer = (session, action: KnownAction) => {
    const { Television } = session;

    switch (action.type) {
        case TELEVISION_FIREPLACE:
            Television.withId(action.payload.id).update({ isFireplaceRunning: action.payload.value });
            break;
        case ADD_TELEVISION:
            Television.create(action.payload);
            break;
    }

    return session.state;
};

export default createReducer(orm, reducer);