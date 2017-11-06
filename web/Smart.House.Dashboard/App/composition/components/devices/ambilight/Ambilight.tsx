import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'App/composition/store';
import { activeAmbilightSelector } from './models/schema';
import * as Model from './models/model';
import { AmbilightViewModel } from './models/view';

interface AmbilightProps {
    ambilight: AmbilightViewModel;
}

interface State {
    id: number,
    isActive: boolean,
    background: string
}

type Props = AmbilightProps;

class Ambilight extends React.Component<Props, State> {

    defaultPattern: string;

    constructor(props: Props) {
        super(props);

        this.defaultPattern = props.ambilight.background;
        this.state = {
            id: props.ambilight.id,
            isActive: props.ambilight.isActive,
            background: this.defaultPattern
        };
        
        this.setState = this.setState.bind(this);
    }

    componentWillReceiveProps(nextProps: Props) {
        var pattern = nextProps.ambilight.background;
        if (nextProps.ambilight.isActive)
            pattern = pattern !== '' ? pattern : this.defaultPattern;

        this.setState({
            background: pattern
        });
    }

    setActive(value: boolean) {
        this.setState({
            isActive: value
        });
    }

    render() {
        const { ambilight } = this.props
        return <div className="ambilight" style={{ width: "260px", height: "125px", backgroundImage: this.state.background }}> </div>
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        ambilight: activeAmbilightSelector(state.ambilight),
    };
}

// Wire up the React component to the Redux store
export default connect(
    mapStateToProps,
    null
)(Ambilight);

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}