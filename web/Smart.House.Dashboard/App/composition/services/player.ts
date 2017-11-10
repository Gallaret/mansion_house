import { injectable } from "inversify";
import { PlayerService } from '../components/devices/player/services/player';
import { fetch } from 'domain-task';

@injectable()
export class PlayerActionService implements PlayerService {
    async playVideo(id: number, video: string) {
        let response = <Response>await fetch('/television/setVideo', {
            method: 'POST',
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('play video');
        }
    };

    async pause(id: number) {
        let response = <Response>await fetch('/television/pausePlayer', {
            method: 'POST',
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('pause player');
        }
    };

    async stop(id: number) {
        let response = <Response>await fetch('/television/stopPlayer', {
            method: 'POST',
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('stop player');
        }
    };
}