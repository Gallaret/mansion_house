import * as React from 'react';

interface Props {
}

interface State {
}

export class Front extends React.Component<Props, State> {

    render() {
        return <div style={{ position: 'relative' }}>
                   <img src="/images/speaker.png" width="40px" height="60px" className="frame-shadow" style={{ position: 'absolute', top: '-30px', left: '-20px' }} />
               </div>
    }
}

if (module.hot) {
    module.hot.accept();
}