export interface PlayerViewModel {
    id: number;
    name: string;
    isActive: boolean;
    isRunning: boolean;
    isPaused: boolean;
    video: string;
};

export interface SettingsViewModel {
    id: number;
    backgroundPlay: boolean;
};