import * as React from 'react';

interface Props {
}

interface State {
}

export class Side extends React.Component<Props, State> {

    render() {
        return <div style={{ position: "relative" }}>
                   <img src="/images/speaker-back.png" height="120px" width="20px" style={{ position: "absolute", top: "-60px", left: "-10px" }} />
               </div>
    }
}

if (module.hot) {
    module.hot.accept();
}