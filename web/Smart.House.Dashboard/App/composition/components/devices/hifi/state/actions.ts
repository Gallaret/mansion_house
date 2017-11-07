import { Hifi, Speaker } from '../models/model';
import { SpeakerViewModel } from '../models/view';

export const ADD_SPEAKER = 'AddSpeakerAction';

export interface AddSpeakerAction {
    type: 'AddSpeakerAction';
    payload: {
        hifi: number,
        speaker: Speaker
    };
}

export const ADD_HIFI = 'AddHifiAction';

export interface AddHifiAction {
    type: 'AddHifiAction';
    payload: Hifi;
}

