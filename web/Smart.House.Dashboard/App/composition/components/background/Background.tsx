import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { playerSelector, settingsSelector } from '../devices/player/models/schema';
import { PlayerViewModel, SettingsViewModel } from '../devices/player/models/view';

interface Props {
    player: PlayerViewModel,
    settings: SettingsViewModel
}

interface State {
    show: number;
    play: boolean;
    pause: boolean;
    stop: boolean;
    isFullscreen: boolean;
    source: string;
}

class Background extends React.Component<Props, State> {

    constructor() {
        super();

        this.state = {
            show: 0,
            play: false,
            pause: false,
            stop: false,
            isFullscreen: false,
            source: ''
        }
    }


    componentWillReceiveProps(nextProps: Props) {

        var play = nextProps.player.isRunning
            && !nextProps.player.isPaused
            && nextProps.settings.backgroundPlay;

        var pause = nextProps.player.isPaused;

        var stop = !nextProps.player.isRunning
            && !nextProps.player.isPaused;

        this.setState({
            play: play,
            show: play ? 1 : stop ? 0 : 1,
            pause: pause,
            isFullscreen: false,
            source: nextProps.player.video
        });

        var video = this.refs.myVideo;
        if (play) {
            this.play(video);
        }
        else if (pause) {
            this.pause(video);
        }
        else if (stop) {
            this.stop(video);
        }
    }

    play(video: any) {
        video.play();
    }

    stop(video: any) {
        video.pause();
        video.currentTime = 0;
    }

    pause(video: any) {
        video.pause();
    }

    render() {
        return <div className="video-container">
            <video ref="myVideo" style={{ opacity: this.state.show }} poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg">
                       <source src="video/Detroit.mp4" type="video/mp4" />
                   </video>
               </div>
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        player: playerSelector(state.player),
        settings: settingsSelector(state.player)
    };
}

// Wire up the React component to the Redux store
export default connect(
    mapStateToProps,
    null
)(Background);

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}