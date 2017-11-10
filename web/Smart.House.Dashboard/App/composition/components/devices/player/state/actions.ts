import { Player } from '../models/model';
import { PlayerViewModel } from '../models/view';
import { orm } from '../models/schema';
import { Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from '../../../../store';

export const PLAY_VIDEO = 'PlayVideoAction';

export interface PlayVideoAction {
    type: 'PlayVideoAction';
    payload: {
        id: number,
        video: string
    };
}

export const PAUSE = 'PauseAction';

export interface PauseAction {
    type: 'PauseAction';
    payload: {
        id: number
    };
}

export const STOP = 'StopAction';

export interface StopAction {
    type: 'StopAction';
    payload: {
        id: number
    };
}

export const ADD_PLAYER = 'AddPlayerAction';

export interface AddPlayerAction {
    type: 'AddPlayerAction';
    payload: Player;
}

export const UPDATE_PLAYER = 'UpdatePlayerAction';

export interface UpdatePlayerAction {
    type: 'UpdatePlayerAction';
    payload: PlayerViewModel;
}

export type KnownAction = PlayVideoAction | PauseAction | AddPlayerAction | UpdatePlayerAction | StopAction;

export const actionCreators = {
    update: (id: number): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        const session = orm.session(getState().player);

        var state = session.Player.withId(id);

        var newState = <PlayerViewModel> {
            name: state.name,
            id: state.id,
            video: state.video,
            isRunning: state.isRunning,
            isPaused: state.isPaused,
            isActive: state.isActive
        };

        await dispatch({ type: UPDATE_PLAYER, payload: newState });
    },

    playVideo: (id: number, video: string): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        await dispatch({ type: PLAY_VIDEO, payload: { id: id, video: video } });
    },

    pause: (id: number): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        await dispatch({ type: PAUSE, payload: { id: id } });
    },

    stop: (id: number): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        await dispatch({ type: STOP, payload: { id: id } });
    }
};