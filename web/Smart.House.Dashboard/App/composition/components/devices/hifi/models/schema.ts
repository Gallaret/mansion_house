import { ORM } from 'redux-orm';
import { Hifi, Speaker, Harmonogram } from './model';
import { SpeakerViewModel } from './view';

export const orm = new ORM();
orm.register(Hifi, Speaker, Harmonogram);

export const frontSpeakerSelector = orm.createSelector(session => {
    const sections = session.Speaker.filter(function (speaker) { return speaker.type === 'Front' });
    return sections.toRefArray().map(speaker => {
        return <SpeakerViewModel>{
            id: speaker.id,
            isActive: speaker.isActive,
            type: speaker.type,
            name: speaker.name,
            position: speaker.position
        };
    });
});

export const sideSpeakerSelector = orm.createSelector(session => {
    const sections = session.Speaker.filter(function (speaker) { return speaker.type === 'Side' });
    return sections.toRefArray().map(speaker => {
        return <SpeakerViewModel>{
            id: speaker.id,
            isActive: speaker.isActive,
            type: speaker.type,
            name: speaker.name,
            position: speaker.position
        };
    });
});

export const backSpeakerSelector = orm.createSelector(session => {
    const sections = session.Speaker.filter(function (speaker) { return speaker.type === 'Back' });
    return sections.toRefArray().map(speaker => {
        return <SpeakerViewModel>{
            id: speaker.id,
            isActive: speaker.isActive,
            type: speaker.type,
            name: speaker.name,
            position: speaker.position
        };
    });
});