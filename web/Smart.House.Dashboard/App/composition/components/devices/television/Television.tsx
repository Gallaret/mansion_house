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

interface TelevisionProps {
    television: TelevisionViewModel;
}

interface State {
    id: number,
    isActive: boolean,
    isBurning: boolean
}

type Props = TelevisionProps & typeof Effects.actionCreators;

class Television extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            id: props.television.id,
            isActive: props.television.isActive,
            isBurning: props.television.isFireplaceRunning
        };

        this.setState = this.setState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("receive Props");
        console.log(nextProps);
    }

    setActive(value: boolean) {
        this.setState({
            isActive: value
        });
    }

    async setFireplace(id: number) {
        var fire = new Fire.Fire();
        var context = this.refs.television;
        fire.initialize(context);
        
        setInterval(function () {
            return fire.burnBurnBurn();
        }, 100, fire);

        this.props.setFireplace(this.state.id, !this.state.isBurning);

        //this._service.setFireplace(id);
    }

    async setVideo(id: number) {
        this._service.setVideo(id);
    }

    @lazyInject(Services.TelevisionService)
    private _service: TelevisionService;

    render() {
        const { television } = this.props
        return <div style={{ height: '180px', margin: "auto" }}>
            <div style={{ margin: "0 auto", width: "250px", position: "relative" }} onMouseEnter={() => this.setActive(true)} onMouseLeave={() => this.setActive(false)}>
                <div className="ambilight" style={{ width: "260px", height: "125px", left: "-5px", top: "35px", backgroundImage: "url('images/ambient.jpg')" }}> </div>
                <p style={{ textAlign: "center", margin: "0px" }}>
                    <canvas className={this.props.television.isFireplaceRunning ? "burning" : "not-burning"} style={{ background: "black", height: "125px", width: "250px", marginTop: "40px" }} ref="television">
                            <img src="/images/tv.png" height="125px" width="250px"/>
                        </canvas>
                    </p>
                    <div className={this.state.isActive ? 'television-bottom camera-visible' : 'television-bottom camera-hidden'}>
                        <label className="camera-name">Sony Bravia</label>
                        <div style={{ float: 'right' }}>
                            <span className="glyphicon glyphicon-fire television-fireplace"
                                onClick={this.state.isBurning ? () => this.setFireplace(television.id) : () => this.setFireplace(television.id)} /> 
                            <span className="glyphicon glyphicon-leaf television-leaf"></span>
                            <span className="glyphicon glyphicon-tint television-water"
                                onClick={this.state.isBurning ? () => this.setVideo(television.id) : () => this.setVideo(television.id)}></span>
                        </div>
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