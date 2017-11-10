import { ORM } from 'redux-orm';
import { Player, Settings, Harmonogram } from './model';
import { PlayerViewModel, SettingsViewModel } from './view';

export const orm = new ORM();
orm.register(Player, Settings, Harmonogram);

export const playerSelector = orm.createSelector(session => {

    var player = session.Player.first();

    return <PlayerViewModel>{
        id: player.id,
        isActive: player.isActive,
        isRunning: player.isRunning,
        isPaused: player.isPaused,
        video: player.video,
        name: player.name
    };
});

export const settingsSelector = orm.createSelector(session => {

    var settings = session.Player.first().ref.settings;

    return <SettingsViewModel>{
        id: settings.id,
        backgroundPlay: settings.backgroundPlay
    };
});