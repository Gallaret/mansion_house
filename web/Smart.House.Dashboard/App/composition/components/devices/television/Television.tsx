import * as React from 'react';
import { lazyInject } from '../../../../composition/ioc/decorators';
import { Services } from '../../../../composition/services/types';
import { TelevisionService } from "../../../../composition/components/devices/television/services/television";

interface Props {
    id: number;
    isActive: boolean;
    isBurning: boolean;
}

interface State {
    id: number;
    isActive: boolean;
    isBurning: boolean;
}

export default class Television extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            id: props.id,
            isActive: props.isActive,
            isBurning: props.isBurning
        };

        this.setState = this.setState.bind(this);
    }

    setActive(value: boolean) {
        this.setState({
            isActive: value
        });
    }

    async setFireplace(id: number) {
        this._service.setFireplace(id);
    }

    @lazyInject(Services.TelevisionService)
    private _service: TelevisionService;

    render() {
        const { id } = this.props
        return <div style={{ height: '200px', margin: "auto" }}>
            <div style={{ margin: "0 auto", width: "250px", position: "relative" }} onMouseEnter={() => this.setActive(true)} onMouseLeave={() => this.setActive(false)}>
                <div className="ambilight" style={{ width: "260px", height: "125px", left: "-5px", top: "35px", backgroundImage: "url('images/ambient.jpg')" }}> </div>
                    <p style={{ textAlign: "center", margin: "0px" }}>
                        <img src="/images/tv.png" height="125px" width="250px" style={{marginTop: "40px"}} />
                    </p>
                    <div className={this.state.isActive ? 'television-bottom camera-visible' : 'television-bottom camera-hidden'}>
                        <label className="camera-name">Sony Bravia</label>
                        <div style={{ float: 'right' }}>
                            <span className="glyphicon glyphicon-fire television-fireplace"
                                onClick={this.state.isBurning ? () => this.setFireplace(id) : () => this.setFireplace(id)} /> 
                            <span className="glyphicon glyphicon-leaf television-leaf"></span>
                            <span className="glyphicon glyphicon-tint television-water"></span>
                        </div>
                    </div>
                </div>
               </div>
    }
}