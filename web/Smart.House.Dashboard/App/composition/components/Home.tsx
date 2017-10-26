import * as React from 'react';
import * as Scroll from 'react-scroll';
import ScrollEffect from '../../lib/scroll-effect';
import Fullscreen from '../../lib/fullscreen';
import CameraList from './devices/camera/Displayer';
import Television from './devices/television/Television';

export default class Home extends React.Component<{}, {}> {
    public render() {
        return <div className="container-fluid">
            <Fullscreen>           
                <div className="row" id="hero">
                    <CameraList />

                    <div className="center" style={{ display: "block", height: "300px" }}>
                        <div style={{ width: "40%", float: "left", height: "300px" }}>
                            <div style={{ float: "right", marginTop: "300px", position: "relative" }}>
                                <img src="/images/speaker-back.png" height="120px" width="20px" style={{ position: "absolute", top: "100px", right: "30px" }} />
                            </div>
                            <div style={{ float: "right", marginRight: "50px", marginTop: "200px", position: "relative" }}>
                                <div className="hue2"> </div>
                                <img src="/images/hue.png" height="150px" width="40px" />
                            </div>
                            <div className="image-frame" style={{ float: "right", marginRight: "75px" }}>
                                <img src="/images/marilyn.jpg" className="image" width="125px" height="170px" />
                            </div>
                        </div>

                        <div style={{ width: "20%", float: "left" }}>
                            <div style={{ width: "100%", height: "300px" }}>

                                <Television id={1} isActive={false} isBurning={false} />

                                <div style={{ float: "left", width: "100%", textAlign: "center" }}>
                                    <img src="/images/speaker-front.png" width="75px" height="20px" />
                                </div>
                                <div style={{ height: "50px", clear: "both" }}>
                                    <div className="shelf" style={{ width: "90%", height: "50px", borderTop: "5px solid rgba(193, 155, 108, 1)", borderBottom: "5px solid rgba(193, 155, 108, 1)", margin: "0 auto" }}>
                                        <div style={{ borderBottom: "2px solid #444343", borderTop: "2px solid #444343", width: "25%", height: "40px", float: "left", background: "white" }}>

                                        </div>
                                        <div className="box box-shadow" style={{ width: "25%", height: "40px", float: "left" }}>
                                            <img src="/images/ps4.png" width="75px" height="25px" style={{ marginTop: "11px", marginLeft: "7px" }} />
                                        </div>
                                        <div className="box box-shadow" style={{ width: "25%", height: "40px", float: "left" }}>
                                            <img src="/images/htpc.jpg" width="75px" height="30px" style={{ marginTop: "7px", marginLeft: "7px" }} />
                                        </div>
                                        <div className="box" style={{ width: "25%", height: "40px", float: "left", background: "white" }}>

                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: "50px", clear: "both", position: "relative" }}>
                                    <div style={{ position: "absolute", top:"15px", left:"50px" }}>
                                        <img src="/images/speaker.png" width="40px" height="60px" className="frame-shadow" />
                                    </div>
                                    <div style={{ position: "absolute", top: "15px", right: "50px" }}>
                                        <img src="/images/speaker.png" width="40px" height="60px" className="frame-shadow" />
                                    </div>
                                </div>
                            </div>

                            <div style={{ position:"relative" }}>
                                <div style={{ float: "left", position: "absolute", top: "60px" }}>
                                    <div style={{ height: "150px" }}>
                                        <img src="/images/sofa.png" width="380px" height="150px" />
                                    </div>
                                    <div style={{ height: "50px" }}>
                                        <div style={{ float: "left", marginLeft: "50px" }}>
                                            <img src="/images/speaker-back-small.png" width="25px" height="40px" />
                                        </div>
                                        <div style={{ float: "right", marginRight: "50px" }}>
                                            <img src="/images/speaker-back-small.png" width="25px" height="40px" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div style={{ width: "40%", float: "right", height: "300px" }}>
                            <div style={{ float: "left", marginTop: "300px", position: "relative" }}>
                                <img src="/images/speaker-back.png" height="120px" width="20px" style={{ position: "absolute", top: "100px", left: "30px" }} />
                            </div>
                            <div style={{ float: "left", marginLeft: "50px", marginTop: "200px", position: "relative" }}>
                                <div className="hue"> </div>
                                <img src="/images/hue.png" height="150px" width="40px" />
                            </div>
                            <div style={{ float: "left", marginLeft: "100px" }}>
                                <div className="frame-shadow" style={{ width: "190px", height: "80px", background: "rgba(193, 155, 108, 1)", display: "inline-block" }}>
                                    <div className="shadow" style={{ marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "10px" }}> </div>
                                    <div className="shadow" style={{ marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "50px" }}> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="footer">
                        <div className="floor-container">
                            <div className="floor">
                               
                            </div>
                        </div>
                    </div>
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
