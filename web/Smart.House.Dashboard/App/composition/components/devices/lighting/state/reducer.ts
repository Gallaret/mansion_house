import { fetch } from 'domain-task';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../../../../store';
import { Lamp } from '../models/model';
import { orm } from '../models/schema';
import { createReducer } from 'redux-orm';
import * as Actions from './actions';

type KnownAction = Actions.SetColorAction | Actions.AddLampAction;

const reducer = (session, action: KnownAction) => {
    const { Lamp } = session;

    switch (action.type) {
        case Actions.SET_COLOR:
            Lamp.withId(action.payload.id).update({ color: action.payload.color });
            break;
        case Actions.ADD_LAMP:
            console.log('lamp added');
            Lamp.create(action.payload);
            break;
    }

    return session.state;
};

export default createReducer(orm, reducer);