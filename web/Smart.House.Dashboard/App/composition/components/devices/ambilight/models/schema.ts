import { ORM } from 'redux-orm';
import { Ambilight, Harmonogram } from './model';
import { AmbilightViewModel } from './view';

export const orm = new ORM();
orm.register(Ambilight, Harmonogram);

export const activeAmbilightSelector = orm.createSelector(session => {

    var ambilight = session.Ambilight.first();

    return <AmbilightViewModel>{
        id: ambilight.id,
        isActive: ambilight.isActive,
        background: ambilight.background,
        name: ambilight.name
    };
});