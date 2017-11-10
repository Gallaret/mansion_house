import * as React from 'react';

interface Props {
}

interface State {
}

export default class Picture extends React.Component<Props, State> {

    render() {
        return <div className="image-frame" style={{ float: "right", marginRight: "75px" }}>
                   <img src="/images/marilyn.jpg" className="image" width="125px" height="170px" />
               </div>
    }
}

if (module.hot) {
    module.hot.accept();
}