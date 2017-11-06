import { fetch } from 'domain-task';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../../../../store';
import { Ambilight } from '../models/model';
import { orm } from '../models/schema';
import { createReducer } from 'redux-orm';
import * as Actions from './actions';

type KnownAction = Actions.SetEffectAction | Actions.AddAction;

const reducer = (session, action: KnownAction) => {
    const { Ambilight } = session;

    switch (action.type) {
        case Actions.SET_EFFECT:
            console.log(action.payload);
            Ambilight.withId(action.payload.id).update({ background: action.payload.pattern });
            break;
        case Actions.ADD:
            Ambilight.create(action.payload);
            break;
    }

    return session.state;
};

export default createReducer(orm, reducer);