import * as React from 'react';
import { connect } from 'react-redux';
import { lazyInject } from '../../../../composition/ioc/decorators';
import { Services } from '../../../../composition/services/types';
import { ApplicationState } from '../../../store';
import { playerSelector } from './models/schema';
import { PlayerViewModel } from './models/view';
import { PlayerService } from './services/player'
import * as Actions from './state/actions';

interface PlayerProps {
    player: PlayerViewModel;
}

interface State {
    video: string;
    isRunning: boolean;
    isPaused: boolean;
}

type Props = PlayerProps & typeof Actions.actionCreators;

class Player extends React.Component<Props, State> {

    @lazyInject(Services.PlayerService)
    private _service: PlayerService;

    constructor() {
        super();

        this.state = {
            isRunning: false,
            isPaused: false,
            video: ''
        }
    }

    componentWillReceiveProps(nextProps: PlayerProps) {
        this.setState({
            video: nextProps.player.video,
            isPaused: nextProps.player.isPaused,
            isRunning: nextProps.player.isRunning
        });
    }

    async play(playVideo, pause) {
        if (this.state.isPaused) {
            await this._service.pause(this.props.player.id);
            await pause(this.props.player.id);
        }
        else {
            await this._service.playVideo(this.props.player.id, this.state.video);
            await playVideo(this.props.player.id, this.state.video);
        }
    }

    async pause(updateState) {
        await this._service.pause(this.props.player.id);
        await updateState(this.props.player.id);
    }

    async stop(updateState) {
        await this._service.stop(this.props.player.id);
        await updateState(this.props.player.id);
    }

    render() {
        const { playVideo, pause, stop } = this.props
        return <div className="player" style={{ marginTop: "10px", marginLeft: '10px', height: "90px", width: "550px", float: "left", position: "relative" }}>
                <div style={{ float: 'left', width:'60px', height:'60px', marginTop: '15px'}}>
                    <img src="images/knob.png" height="60px" width="60px" />
                </div>

                <div className="player-left" style={{ width: "15px", height: "90px", float: 'left', marginLeft: '15px' }}></div>

                <div style={{ float: 'left', position: 'relative', width: "320px", height: '90px' }}>
                    <div style={{ position: "absolute", width: "320px", left: "20px", display: "inline-block"}}>
                        <output className="player-display" style={{ width: "200px", padding: "0 10px", display: "inline-block", fontSize: "15px", lineHeight: "40px" }}>Ready to play</output>
                        <div className="glyphicon glyphicon-backward" style={{ fontSize: "15px", marginLeft: "10px" }}> </div>
                        <div className={this.state.isRunning ? "glyphicon glyphicon-pause player-button" : "glyphicon glyphicon-play player-button"}
                            onClick={() => this.state.isRunning ? this.pause(pause) : this.play(playVideo, pause)} style={{ fontSize: "20px", marginLeft: "10px" }}> </div>
                        <div className="glyphicon glyphicon-stop player-button" onClick={() => this.stop(stop)} style={{ fontSize: "15px", marginLeft: "10px" }}> </div>
                        <div className="glyphicon glyphicon-forward" style={{ fontSize: "15px", marginLeft: "10px" }}> </div>
                    </div>
                    <div style={{ position: "absolute", width: "320px", bottom: "10px", left: "20px", display: "inline-block" }}>
                        <div className="glyphicon glyphicon-eject" style={{ fontSize: "15px", display: "inline-block" }}> </div>
                        <output className="player-drive" style={{ padding: "5px", lineHeight: "15px", marginLeft: "25px", width: "225px", display: "inline-block" }}>Detroit</output>
                        <div className="glyphicon glyphicon-folder-open" style={{ fontSize: "15px", marginLeft: "25px" }}> </div>
                    </div>

                </div>

                <div className="player-right" style={{ float: 'left', width: "15px", height: "90px", marginLeft: '15px', marginRight: '15px' }}></div>
                <div style={{ float: 'left', width: '60px', height: '60px', marginTop: '15px' }}>
                    <img src="images/knob.png" height="60px" width="60px" />
                </div>
              </div>
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        player: playerSelector(state.player)
    };
}

// Wire up the React component to the Redux store
export default connect(
    mapStateToProps,
    Actions.actionCreators
)(Player);

if (module.hot) {
    module.hot.accept();
}