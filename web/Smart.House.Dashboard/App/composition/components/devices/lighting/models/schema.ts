import { ORM } from 'redux-orm';
import { Lamp, Harmonogram } from './model';
import { LampViewModel } from './view';

export const orm = new ORM();
orm.register(Lamp, Harmonogram);

let counter = 0;

export const lampSelector = orm.createSelector(session => {
    return session.Lamp.all().toRefArray().map(lamp => {
        return <LampViewModel>{
            id: lamp.id,
            isActive: lamp.isActive,
            color: lamp.color,
            name: lamp.name,
            position: lamp.position
        };
    });
});