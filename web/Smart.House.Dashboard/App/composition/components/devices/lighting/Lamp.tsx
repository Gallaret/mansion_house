import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'App/composition/store';
import { LampViewModel } from './models/view';

interface Props {
    lamp: LampViewModel
}

interface State {
    color: string;
}

export class Lamp extends React.Component<Props, State> {
    defaultColor: string;

    constructor(props: Props) {
        super(props);
        
        this.defaultColor = props.lamp.color;
        
        this.state = {
            color: this.defaultColor
        }
    }
    
   componentWillReceiveProps(nextProps: Props) {
        var color = nextProps.lamp.color;
        if (nextProps.lamp.isActive)
            color = color !== '' ? color : this.defaultColor;

        this.setState({
            color: color
        });
    }

    render() {
        return <div style={{ position: 'relative' }}>
                   <img src="/images/hue.png" height="150px" width="40px" style={{ position: 'absolute', top: '-100px', left: '-20px', zIndex: 0 }} />
                   <div className="lamp" style={{ background: this.state.color, position: 'absolute', top: '-100px', left: '-20px' }}></div>
               </div>          
    }
}

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}