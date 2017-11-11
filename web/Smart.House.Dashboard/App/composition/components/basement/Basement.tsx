import * as React from 'react';
import Player from '../devices/player/Player'

interface Props {
}

interface State {
    isMusic: boolean;
    isVideo: boolean;
    isTheme: boolean;
    isPicture: boolean;
}

export default class Basement extends React.Component<Props, State> {

    constructor() {
        super();

        this.state = {
            isMusic: false,
            isVideo: false,
            isTheme: false,
            isPicture: false
        }
    }

    selectMusic() {
        this.setState({
            isMusic: true,
            isVideo: false,
            isPicture: false,
            isTheme: false
        });
    }

    selectPicture() {
        this.setState({
            isMusic: false,
            isVideo: false,
            isPicture: true,
            isTheme: false
        });
    }

    selectVideo() {
        this.setState({
            isMusic: false,
            isVideo: true,
            isPicture: false,
            isTheme: false
        });
    }

    selectTheme() {
        this.setState({
            isMusic: false,
            isVideo: false,
            isPicture: false,
            isTheme: true
        });
    }

    render() {
        return <div className="bottom">
            <div style={{ width: '370px', height: '105px', float: "left" }}>
                <div className="player-media-type" style={{ width: '200px', marginTop: '25px', marginLeft: '125px' }}>
                    <div className="glyphicon glyphicon-facetime-video" onClick={() => this.selectVideo()} style={{ fontSize: "25px", position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '10px' }} className={this.state.isVideo ? 'player-media-selected' : ''}> </div>
                    </div>
                    <div className="glyphicon glyphicon-picture" onClick={() => this.selectPicture()} style={{ fontSize: "25px", marginLeft: "20px" }}>
                        <div style={{ position: 'absolute', left: '10px' }} className={this.state.isPicture ? 'player-media-selected' : ''}> </div>
                    </div>
                    <div className="glyphicon glyphicon-film" onClick={() => this.selectTheme()} style={{ fontSize: "25px", marginLeft: "20px" }}>
                        <div style={{ position: 'absolute', left: '10px' }} className={this.state.isTheme ? 'player-media-selected' : ''}> </div>
                    </div>
                    <div className="glyphicon glyphicon-music" onClick={() => this.selectMusic()} style={{ fontSize: "25px", marginLeft: "20px" }}>
                        <div style={{ position: 'absolute', left: '10px' }} className={this.state.isMusic ? 'player-media-selected' : ''}> </div>
                    </div>
                </div>
            </div>

            <Player />

            <div style={{ width: '360px', height: '105px', float: "left" }}>
                <div style={{ height: '100%', display: 'inline'}}>
                    <div className="player-media-type" style={{ float: 'left', display: 'inline-block', width: '200px', height: '60px', position: 'relative', marginLeft: '45px', marginTop: '25px' }}>
                        <input type="range" min="0" max="100" step="1" style={{ display: 'inline', width: '185px', position: 'absolute', top: '18px', left: '5px' }} />
                        <div style={{ display: 'inline', position: 'absolute', top:' 16px', width: '185px', left: '5' }}>
                            <span style={{ marginRight: '30px' }}>0</span>
                            <span style={{ marginRight: '30px' }}>25</span>
                            <span style={{ marginRight: '30px' }}>50</span>
                            <span>75</span>
                            <span style={{ float: 'right' }}>100</span>
                        </div>
                    </div>

                    <div className="player-quickSettings" style={{ height: '60px', width: '60px', float: 'right' }}>
                        <img src="images/settings.png" height="60px" width="60px" />
                    </div>
               </div>
            </div>

        </div>
    }
}

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}