import * as React from 'react';

interface Props {
}

interface State {
}

export class Back extends React.Component<Props, State> {

    render() {
        return <div style={{ position: 'relative' }}>
                   <img src="/images/speaker-back-small.png" width="30px" height="40px" style={{ position: 'absolute', left: '-15px', top: '-20px' }} />
               </div>
    }
}

if (module.hot) {
    module.hot.accept();
}