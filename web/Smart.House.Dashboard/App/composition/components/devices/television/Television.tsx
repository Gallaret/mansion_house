import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'App/composition/store';
import { lazyInject } from '../../../../composition/ioc/decorators';
import { Services } from '../../../../composition/services/types';
import * as Effects from '../../../../composition/components/actions/effects';
import { TelevisionService } from "../../../../composition/components/devices/television/services/television";
import { activeTelevisionSelector } from './models/schema';
import * as Model from './models/model';
import { TelevisionViewModel } from './models/viewmodel';
import * as Fire from '../../../../composition/components/devices/television/effects/fireplace/fire';
import { Aquarium } from './effects/aquarium/aquarium';

interface TelevisionProps {
    television: TelevisionViewModel;
}

interface State {
    id: number,
    isActive: boolean,
    isFireplace: boolean,
    isAquarium: boolean
}

type Props = TelevisionProps & typeof Effects.actionCreators;

let fireplace;
let fire;
let aquarium;
let aqua;

class Television extends React.Component<Props, State> {

    aquarium: Aquarium;

    constructor(props: Props) {
        super(props);

        this.state = {
            id: props.television.id,
            isActive: props.television.isActive,
            isFireplace: props.television.isFireplaceRunning,
            isAquarium: props.television.isAquariumRunning
        };

        fire = new Fire.Fire();
        aquarium = new Aquarium();
        this.setState = this.setState.bind(this);
    }

    componentWillReceiveProps(nextProps: Props) {
        console.log(nextProps);
        this.setState({
            isFireplace: nextProps.television.isFireplaceRunning,
            isAquarium: nextProps.television.isAquariumRunning
        });
    }

    setActive(value: boolean) {
        this.setState({
            isActive: value
        });
    }

    async setFireplace(id: number) {
        var background = this.refs.television;
        var foreground = this.refs.tvContent;

        if (this.state.isFireplace) {
            clearInterval(fireplace);
            fire.clear(background, foreground);
        }
        else {
            fire.initialize(background, foreground, 'imageBackground');
            fireplace = setInterval(function () {
                return fire.burnBurnBurn();
            }, 100, fire);

            this._service.setFireplace(id);
        }

        this.props.setFireplace(this.state.id, !this.state.isFireplace);    }

    async setVideo(id: number) {
        var background = this.refs.television;
        var foreground = this.refs.tvContent;

        console.log(this.state.isAquarium);

        if (this.state.isAquarium) {
            clearInterval(aqua);
            aquarium.clear(background);
            aquarium.clear(foreground);
        }
        else {
            aquarium.init(background);
            aqua = setInterval(function () {
                return aquarium.draw(foreground);
            }, 16.7, aquarium, foreground);

            this._service.setVideo(id);
        }        

        this.props.setAquarium(this.state.id, !this.state.isAquarium);
    }

    @lazyInject(Services.TelevisionService)
    private _service: TelevisionService;

    render() {
        const { television } = this.props
        return <div style={{ margin: "auto" }} onMouseEnter={() => this.setActive(true)} onMouseLeave={() => this.setActive(false)}>
                <p style={{ textAlign: "center", margin: "40px 0 0 0", position: 'relative' }}>
                    <canvas style={{ background: "black", height: "125px", width: "250px", border: "2px solid black" }} ref="television"></canvas>
                    <canvas style={{ height: "125px", width: "250px", position: "absolute", top: '0px', left: '0px' }} ref="tvContent"></canvas>
                    <img id="imageBackground" src="images/background-flip2.jpg" style={{ height: '125px', width: '250px', display: 'none' }} />
                    <img id="imageStrip" src="images/fishstrip.png" style={{ height: '125px', width: '250px', display: 'none' }} />
                </p>
                <div className={this.state.isActive ? 'television-bottom camera-visible' : 'television-bottom camera-hidden'}>
                    <label className="camera-name">Sony Bravia</label>
                    <div style={{ float: 'right' }}>
                        <span className="glyphicon glyphicon-fire television-fireplace"
                            onClick={this.state.isFireplace ? () => this.setFireplace(television.id) : () => this.setFireplace(television.id)} /> 
                        <span className="glyphicon glyphicon-leaf television-leaf"></span>
                        <span className="glyphicon glyphicon-tint television-water"
                            onClick={this.state.isFireplace ? () => this.setVideo(television.id) : () => this.setVideo(television.id)}></span>
                    </div>
                </div>
               </div>
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        television: activeTelevisionSelector(state.television),
    };
}

// Wire up the React component to the Redux store
export default connect(
    mapStateToProps,
    Effects.actionCreators
)(Television);

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}