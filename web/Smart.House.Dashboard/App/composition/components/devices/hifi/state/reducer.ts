import { fetch } from 'domain-task';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../../../../store';
import { Speaker } from '../models/model';
import { orm } from '../models/schema';
import { createReducer } from 'redux-orm';
import * as Actions from './actions';
import { SpeakerViewModel } from '../models/view';

type KnownAction = Actions.AddHifiAction | Actions.AddSpeakerAction;

const reducer = (session, action: KnownAction) => {
    const { Hifi, Speaker } = session;

    switch (action.type) {
        case Actions.ADD_HIFI:
            Hifi.create(action.payload);
            break;
        case Actions.ADD_SPEAKER:
            Speaker.create(action.payload.speaker);
            var speaker = <SpeakerViewModel> action.payload.speaker;
            Hifi.withId(action.payload.hifi)
                .speakers.add(Speaker.withId(speaker.id));
            break;
    }

    return session.state;
};

export default createReducer(orm, reducer);