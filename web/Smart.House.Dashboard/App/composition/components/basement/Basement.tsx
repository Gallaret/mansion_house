import * as React from 'react';
import Player from '../devices/player/Player'

interface Props {
}

interface State {
}

export default class Basement extends React.Component<Props, State> {

    render() {
        return <div className="bottom">
            <div style={{ width: '400px', height: '105px', float: "left" }}>
                <div className="player-media-type">
                    <div className="glyphicon glyphicon-facetime-video" style={{ fontSize: "25px" }}> </div>
                    <div className="glyphicon glyphicon-picture" style={{ fontSize: "25px", marginLeft: "25px" }}> </div>
                    <div className="glyphicon glyphicon-film" style={{ fontSize: "25px", marginLeft: "25px" }}> </div>
                    <div className="glyphicon glyphicon-music" style={{ fontSize: "25px", marginLeft: "25px" }}> </div>
                </div>
            </div>

            <Player />

        </div>
    }
}

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}