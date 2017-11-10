import { PlayerViewModel } from '../models/view';

export interface PlayerService {
    playVideo: (id: number, video: string) => void;
    pause: (id: number) => void;
    stop: (id: number) => void;
}