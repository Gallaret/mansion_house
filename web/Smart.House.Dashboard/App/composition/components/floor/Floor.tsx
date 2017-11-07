import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'App/composition/store';
import { Lamp } from '../devices/lighting/Lamp';
import { lampSelector } from '../devices/lighting/models/schema';
import { LampViewModel } from "../devices/lighting/models/view";
import { Front } from "../devices/hifi/speakers/Front";
import { Side } from "../devices/hifi/speakers/Side";
import { Back } from "../devices/hifi/speakers/Back";
import { SpeakerViewModel } from "../devices/hifi/models/view";
import { frontSpeakerSelector, sideSpeakerSelector, backSpeakerSelector } from "../devices/hifi/models/schema";
import { Sofa } from "./Sofa";

interface Props {
    lamps: LampViewModel[];
    frontSpeakers: SpeakerViewModel[];
    sideSpeakers: SpeakerViewModel[];
    backSpeakers: SpeakerViewModel[];
}

interface State {
    lamps: LampViewModel[];
    frontSpeakers: SpeakerViewModel[];
    sideSpeakers: SpeakerViewModel[];
    backSpeakers: SpeakerViewModel[];
}

class Floor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            lamps: props.lamps,
            frontSpeakers: props.frontSpeakers,
            sideSpeakers: props.sideSpeakers,
            backSpeakers: props.backSpeakers
        }
    }

    render() {
        return <div className="floors">
                 <div style={{ width: '60%', marginLeft: '20%', float: 'left', position: 'relative' }}>

                    <div className="floor-container" style={{ position: 'absolute', top: '0' }}>
                        <div className="floor" />
                    </div>

                    <div style={{ height: '50px' }}> {this.props.frontSpeakers.map((speaker) =>
                        <div className={'speaker-front-' + speaker.position}>
                            <Front key={speaker.id} />
                        </div>)}
                    </div>
                    
                    <div style={{ height: '50px' }}> {this.props.lamps.map((lamp) =>
                        <div className={ 'hue-' + lamp.position }>
                            <Lamp key={lamp.id} lamp={lamp} />
                        </div> )}
                    </div>

                    <div style={{ position: 'absolute', top: '150px', width: '100%' }}>
                        <Sofa />
                    </div>

                    <div style={{ position: 'absolute', top: '130px', width: '100%' }}> {this.props.sideSpeakers.map((speaker) =>
                        <div className={'speaker-side-' + speaker.position}>
                            <Side key={speaker.id} />
                        </div>)}
                    </div>

                    <div style={{ position: 'absolute', top: '220px', width: '100%' }}> {this.props.backSpeakers.map((speaker) =>
                        <div className={'speaker-back-' + speaker.position}>
                            <Back key={speaker.id} />
                        </div>)}
                    </div>

                </div>
               </div>
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        lamps: lampSelector(state.lamp),
        frontSpeakers: frontSpeakerSelector(state.hifi),
        sideSpeakers: sideSpeakerSelector(state.hifi),
        backSpeakers: backSpeakerSelector(state.hifi)
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