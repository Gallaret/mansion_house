import * as React from "react";
import * as ReactDOM from "react-dom";
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
ReactDOM.render(<Hello compiler="TypeScript" framework="React"/>, document.getElementById("react-app"));
//# sourceMappingURL=boot-client.jsx.map