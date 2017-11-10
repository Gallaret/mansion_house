import * as React from 'react';

interface Props {
}

interface State {
}

export default class Bookcase extends React.Component<Props, State> {

    render() {
        return <div className="frame-shadow" style={{ width: "190px", height: "80px", background: "rgba(193, 155, 108, 1)", display: "inline-block" }}>
                   <div className="shadow" style={{ marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "10px" }}> </div>
                   <div className="shadow" style={{ marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "50px" }}> </div>
               </div>
    }
}

if (module.hot) {
    module.hot.accept();
}