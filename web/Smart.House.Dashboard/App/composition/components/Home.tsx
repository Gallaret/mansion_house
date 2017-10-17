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

                    <div className="center" style={{ display: "block", height: "500px" }}>
                        <div style={{ width: "40%", float: "left", height:"500px" }}>
                            <div style={{ float: "right", marginRight: "50px", marginTop: "150px" }}>
                                <img src="/images/lamp.png" height="250px" width="40px" />
                            </div>
                            <div className="image-frame" style={{ float: "right", marginRight: "75px" }}>
                                <img src="/images/marilyn.jpg" className="image" width="125px" height="170px" />
                            </div>
                        </div>

                        <div style={{ width: "20%", float: "left" }}>
                            <div style={{ width: "100%", height: "300px" }}>

                                <Television id={1} isActive={false} isBurning={false} />
  
                                <div style={{ height: "75px", clear: "both" }}>
                                    <div className="shelf" style={{ width: "90%", height: "50px", border: "3px solid rgba(193, 155, 108, 1)", margin: "0 auto" }}>
                                        <div style={{ width: "25%", height: "44px", float: "left", background: "white", borderRight: "3px solid rgba(193, 155, 108, 1)" }}>

                                        </div>
                                        <div style={{ width: "25%", height: "44px", float: "left", borderRight: "3px solid rgba(193, 155, 108, 1)" }}>

                                        </div>
                                        <div style={{ width: "25%", height: "44px", float: "left", borderRight: "3px solid rgba(193, 155, 108, 1)" }}>

                                        </div>
                                        <div style={{ width: "25%", height: "44px", float: "left", background: "white" }}>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: "100%", height: "200px", marginTop:"150px" }}>
                                <div style={{ width: "10%", height: "200px", float: "left" }}>
                                    <div style={{ width: "30px", height: "120px", background: "black", float: "left", marginTop: "50px" }} />
                                </div>
                                <div style={{ width: "80%", float: "left" }}>
                                    <div style={{ height: "125px", background: "blue" }} />
                                    <div style={{ height: "50px" }}>
                                        <div style={{ height: "40px", marginTop: "10px", background: "black", width: "25px", float: "left", marginLeft: "20px" }} />
                                        <div style={{ height: "40px", marginTop: "10px", background: "black", width: "25px", float: "right", marginRight: "20px" }} />
                                    </div>
                                </div>
                                <div style={{ width: "10%", height: "200px", float: "left" }}>
                                    <div style={{ float: "right", width: "30px", height: "120px", background: "black", marginTop: "50px" }} />
                                </div>
                            </div>


                        </div>

                        <div style={{ width: "40%", float: "right", height:"400px" }}>
                            <div style={{ float: "left", marginLeft: "50px", marginTop: "150px" }}>
                                <img src="/images/lamp.png" height="250px" width="40px" />
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div id="tagline">
                            <ScrollEffect animate="bounceIn">
                                <h1 className="home-intro-text">Demo!</h1>
                                <h1 className="home-intro-text">...React, Redux, Orleans and Dotnet</h1>
                                <h3 className="home-intro-text">Introducing the <Scroll.Link to="demo" href="#" smooth={true} duration={700} offset={-50}>RROD</Scroll.Link> stack</h3>
                            </ScrollEffect>
                        </div>

                        <div className="down-link">
                            <Scroll.Link to="demo" href="#" className="icon-link" smooth={true} duration={700} offset={-50} ><i className="fa fa-arrow-circle-down custom" ></i></Scroll.Link>
                        </div>
                    </div>
                </div>
            </Fullscreen>
            <Scroll.Element name="demo" />
            <div className="row" id="footer">
                
            </div>
        </div>;
    }
}
