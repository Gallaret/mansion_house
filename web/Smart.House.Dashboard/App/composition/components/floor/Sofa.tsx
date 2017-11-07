import * as React from 'react';

interface Props {
}

interface State {
}

export class Sofa extends React.Component<Props, State> {

    render() {
        return <div style={{ height: "50px", position: 'relative', width: '380px', margin: '0 auto' }}>
                 <img src="/images/sofa.png" width="380px" height="150px" style={{ position: 'absolute', top: '-100px', left: '0'  }} />
               </div>
    }
}

if (module.hot) {
    module.hot.accept();
}