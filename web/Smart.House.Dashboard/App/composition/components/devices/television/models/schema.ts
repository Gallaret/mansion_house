import { ORM } from 'redux-orm';
import { Television, Harmonogram } from './model';
import { TelevisionViewModel } from './viewmodel';

export const orm = new ORM();
orm.register(Television, Harmonogram);

export const activeTelevisionSelector = orm.createSelector(session => {

    var television = session.Television.first();

    return <TelevisionViewModel>{
        id: television.id,
        isActive: television.isActive,
        isFireplaceRunning: television.isFireplaceRunning,
        isAquariumRunning: television.isAquariumRunning,
        name: television.name
    };
});