import { injectable } from "inversify";
import { TelevisionService } from '../components/devices/television/services/television';
import { fetch } from 'domain-task';

@injectable()
export class TelevisionActionService implements TelevisionService {

    async setFireplace(id: number) {
        let response = <Response>await fetch('/television/setFireplace', {
            method: 'POST',
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('set fireplace');
        }
    };
}