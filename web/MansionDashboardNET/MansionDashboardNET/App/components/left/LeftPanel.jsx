var React = require('react');
var CamerasList = require('./monitoring/CamerasList');
var DevicesList = require('./devices/DevicesList');

var LeftPanel = React.createClass({
    getInitialState: function () {
        return {
            showCameras: true,
            showDevices: true
        };
    },
    toogleSection: function (visibility, action) {
        switch (action)
        {
            case 'showCameras': 
                return this.setState({ showCameras: !visibility });
            default:
                return this.setState({ showDevices: !visibility });
        }
    },
    render: function () {

        return (
            <div className="panel panel-primary" style={{ height: '500px', width: '65%', float: 'left' }}>
                <div className="panel-heading">Panel Smart-Home</div>
                <div className="panel-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <label className="text-primary">
                                <span onClick={() => this.toogleSection(this.state.showCameras, 'showCameras')} className={this.state.showCameras ? 'glyphicon glyphicon-plus' : 'glyphicon glyphicon-minus'}></span>
                                Monitoring
                            </label>
                            <span className="badge">12</span><br />
                            <div id="camerasList" className={this.state.showCameras ? 'show' : 'hide'}>
                                <CamerasList />
                            </div>
                        </li>

                        <li className="list-group-item">Urządzenia <span className="badge">5</span>
                            <DevicesList />
                        </li>
                        <li className="list-group-item">Magazyn danych <span className="badge">3</span></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = LeftPanel;