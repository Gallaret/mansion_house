import * as React from 'react';

interface Props {
}

interface State {
}

export default class Shelf extends React.Component<Props, State> {

    render() {
        return <div style={{ position: 'relative' }}>
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
    }
}

if (module.hot) {
    module.hot.accept();
}