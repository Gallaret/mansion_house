import * as React from 'react';
import Television from '../devices/television/Television';
import Ambilight from '../devices/ambilight/Ambilight';


interface Props {
}

interface State {
}

export default class Wall extends React.Component<Props, State> {

    render() {
        return  <div className="center" style={{ display: "block", height: "300px" }}>
                        <div style={{ width: "40%", float: "left", height: "300px" }}>
                            <div className="image-frame" style={{ float: "right", marginRight: "75px" }}>
                                <img src="/images/marilyn.jpg" className="image" width="125px" height="170px" />
                            </div>
                        </div>

                        <div style={{ width: "20%", float: "left" }}>
                            <div style={{ width: "100%", height: "270px" }}>

                                <div style={{ margin: "0 auto", width: "250px", position: "relative" }}>
                                    <Ambilight />
                                    <Television />
                                </div>

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
                            </div>                      

                        </div>
                                           
                        <div style={{ width: "40%", float: "right", height: "300px" }}>
                            <div style={{ float: "left", marginLeft: "100px" }}>
                                <div className="frame-shadow" style={{ width: "190px", height: "80px", background: "rgba(193, 155, 108, 1)", display: "inline-block" }}>
                                    <div className="shadow" style={{ marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "10px" }}> </div>
                                    <div className="shadow" style={{ marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "50px" }}> </div>
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