import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'App/composition/store';
import { Lamp } from '../devices/lighting/Lamp';
import { lampSelector } from '../devices/lighting/models/schema';
import { LampViewModel } from "../devices/lighting/models/view";

interface Props {
    lamps: LampViewModel [];
}

interface State {
    lamps: LampViewModel [];
}

class Floor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        console.log(props);

        this.state = {
            lamps: props.lamps
        }
    }

    render() {
        return <div className="floors"> 
                <div style={{ width: '60%', marginLeft: '20%', height: '50px', float: 'left' }}> { this.props.lamps.map((lamp) =>
                    <div className={ 'hue-' + lamp.position }>
                        <Lamp key={lamp.id} lamp={lamp} />
                    </div> )}
                    
                    <div className="floor-container">
                        <div className="floor">
                               
                        </div>
                    </div>
                </div>
               </div>
    }
}

const mapStateToProps = (state: ApplicationState) => {
    console.log(state);
    return {
        lamps: lampSelector(state.lamp)
    };
}

// Wire up the React component to the Redux store
export default connect(
    mapStateToProps,
    null
)(Floor);

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}