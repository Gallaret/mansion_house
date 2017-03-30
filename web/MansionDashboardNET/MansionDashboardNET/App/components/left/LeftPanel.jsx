var React = require('react');
var CamerasList = require('./monitoring/CamerasList');
var DevicesList = require('./devices/DevicesList');

var LeftPanel = React.createClass({
    getInitialState: function () {
        return {
            showCameras: true,
            showDevices: true,
            showStorage: true,
            visibleCount: 3,
            sectionCount: 3,
            toogleAllText: 'Zwiń'
        };
    },
    toogleSection: function (visibility, action) {

        if (visibility) {
            this.state.visibleCount--;
        }
        else {
            this.state.visibleCount++;
        }

        console.log(this.state.visibleCount);

        switch (action)
        {
            case 'showCameras': 
                return this.setState({ showCameras: !visibility });
            case 'showDevices':
                return this.setState({ showDevices: !visibility });
            case 'showStorage':
                return this.setState({ showStorage: !visibility });
            default:
                throw 'Wrong action';
        }
    },
    toogleAll: function () {
        if (this.state.visibleCount > 0) {
            console.log('hide!');
            this.setState({ showCameras: false });
            this.setState({ showDevices: false });
            this.setState({ showStorage: false });
            this.setState({ toogleAllText: 'Rozwiń' });
            this.state.visibleCount = 0;
        }
        else
        {
            console.log(this.state.visibleCount);
            this.setState({ showCameras: true });
            this.setState({ showDevices: true });
            this.setState({ showStorage: true });
            this.setState({ toogleAllText: 'Zwiń' });
            this.state.visibleCount = this.state.sectionCount;
        }
        return;
    },
    render: function () {

        var leftPanel = 'panel panel-primary '.concat(this.props.styles.panel, ' ', this.props.styles.left);

        return (
            <div className={leftPanel}>
                <div className="panel-heading">Panel Smart-Home</div>
                <div className="panel-body">
                    <a onClick={this.toogleAll}>{this.state.toogleAllText}</a>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <label className="text-primary" style={{ fontSize: '22px' }}>
                                <span style={{ marginRight: '10px' }} className="glyphicon glyphicon-facetime-video" />
                                Monitoring
                            </label>
                            <span onClick={() => this.toogleSection(this.state.showCameras, 'showCameras')}
                                className={this.state.showCameras ? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus'} style={{ float: 'right' }}>
                            </span>
                            <span style={{ marginRight: '10px' }} className="badge">12</span><br />
                            <div id="camerasList" className={this.state.showCameras ? 'show' : 'hide'}>
                                <CamerasList />
                            </div>
                        </li>

                        <li className="list-group-item">
                            <label className="text-primary" style={{ fontSize: '22px' }}>
                                <span style={{ marginRight: '10px' }} className="glyphicon glyphicon-phone" />
                                Urządzenia
                            </label>
                            <span onClick={() => this.toogleSection(this.state.showDevices, 'showDevices')}
                                className={this.state.showDevices ? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus'} style={{ float: 'right' }}>
                            </span>
                            <span style={{ marginRight: '10px' }} className="badge">5</span><br />
                            <div id="camerasList" className={this.state.showDevices ? 'show' : 'hide'}>
                                <DevicesList />
                            </div>
                        </li>
                        <li className="list-group-item">
                            <label className="text-primary" style={{ fontSize: '22px' }}>
                                <span className="glyphicon glyphicon-hdd" style={{ marginRight: '10px' }} />                  
                                Magazyn danych
                            </label>
                            <span onClick={() => this.toogleSection(this.state.showStorage, 'showStorage')}
                                className={this.state.showStorage ? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus'} style={{ float: 'right' }}>
                            </span>
                            <span style={{ marginRight: '10px' }} className="badge">5</span><br />
                            <div id="camerasList" className={this.state.showStorage ? 'show' : 'hide'}>
                                <DevicesList />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = LeftPanel;