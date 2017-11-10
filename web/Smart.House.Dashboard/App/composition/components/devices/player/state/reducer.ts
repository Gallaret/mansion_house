import { fetch } from 'domain-task';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../../../../store';
import { Player } from '../models/model';
import { orm } from '../models/schema';
import { createReducer } from 'redux-orm';
import * as Actions from './actions';

const reducer = (session, action: Actions.KnownAction) => {
    const { Player } = session;

    switch (action.type) {
        case Actions.PLAY_VIDEO:
            Player.withId(action.payload.id).update({ video: action.payload.video, isRunning: true, isPaused: false});
            break;
        case Actions.PAUSE:
            Player.withId(action.payload.id).update({ isRunning: false, isPaused: true });
            break;
        case Actions.STOP:
            Player.withId(action.payload.id).update({ isRunning: false, isPaused: false });
            break;
        case Actions.ADD_PLAYER:
            Player.create(action.payload);
            break;
        case Actions.UPDATE_PLAYER:
            Player.withId(action.payload.id).update(action.payload);
    }

    return session.state;
};

export default createReducer(orm, reducer);