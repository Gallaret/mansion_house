import * as React from 'react';
import * as Scroll from 'react-scroll';
import ScrollEffect from '../../lib/scroll-effect';
import Fullscreen from '../../lib/fullscreen';
import CameraList from './devices/camera/Displayer';
import Floor from './floor/Floor';
import Wall from './wall/Wall';

export default class Home extends React.Component<{}, {}> {
    public render() {
        return <div className="container-fluid">
            <Fullscreen>           
                <div className="row" id="hero">

                    <CameraList />

                    <Wall />

                    <Floor />
                                      
                    <div className="bottom">
                        <div style={{ marginTop: "55px", marginLeft: "550px", height: "50px", float: "left" }}>
                            <div className="glyphicon glyphicon-facetime-video" style={{ fontSize: "25px" }}> </div>
                            <div className="glyphicon glyphicon-picture" style={{ fontSize: "25px", marginLeft: "25px" }}> </div>
                            <div className="glyphicon glyphicon-film" style={{ fontSize: "25px", marginLeft: "25px" }}> </div>
                            <div className="glyphicon glyphicon-music" style={{ fontSize: "25px", marginLeft: "25px" }}> </div>
                        </div>
                        <div className="player" style={{ marginTop: "25px", height: "90px", width: "370px", marginLeft: "50px", float: "left", position: "relative" }}>
                            <div className="player-left"  style={{ position: "absolute", left:"-10px", width: "15px", height: "90px" }}></div>
                            <div style={{ position: "absolute", left: "20px", width: "320px"}}>
                                <output className="player-display" style={{ width: "200px", padding: "0 10px", display: "inline-block", fontSize: "15px", lineHeight: "40px" }}>Ready to play</output>
                                <div style={{ lineHeight: "40px", display: "inline-block" }}>
                                    <div className="glyphicon glyphicon-backward" style={{ fontSize: "15px", marginLeft: "10px" }}> </div>
                                    <div className="glyphicon glyphicon-play" style={{ fontSize: "20px", marginLeft: "10px" }}> </div>
                                    <div className="glyphicon glyphicon-stop" style={{ fontSize: "15px", marginLeft: "10px" }}> </div>
                                    <div className="glyphicon glyphicon-forward" style={{ fontSize: "15px", marginLeft: "10px" }}> </div>
                                </div>
                            </div>

                            <div style={{ position: "absolute", width: "320px", bottom:"10px", left: "20px", display: "inline-block" }}>
                                <div className="glyphicon glyphicon-eject" style={{ fontSize: "15px", display: "inline-block" }}> </div>
                                <output className="player-drive" style={{ padding: "5px", lineHeight:"15px", marginLeft: "25px", width: "225px", display: "inline-block" }}>Detroit</output>
                                <div className="glyphicon glyphicon-folder-open" style={{ fontSize: "15px", marginLeft: "25px" }}> </div>
                            </div>

                            <div className="player-right" style={{ position: "absolute", width: "15px", right: "20px", height: "90px" }}></div>
                        </div>
                    </div>
                </div>
            </Fullscreen>      
        </div>;
    }
}
