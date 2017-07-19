var React = require('react');

var CamerasList = React.createClass({
    getInitialState: function () {
        return {
            cameraUrl: '',
            timer: 0
        };
    },
    componentDidMount: function () {
        this.stream = setInterval(this.streaming, 50);
    },
    componentWillUnmount: function () {
        clearInterval(this.stream);
    },  
    streaming: function () {
        var image = this.getImage();
        this.setState({ cameraUrl: image });
    },
    getImage: function () {
        return 'http://192.168.0.234/image/jpeg.cgi?date=' + new Date().toUTCString();
    },
    render: function () {

        return (
            <div className="form-inline">
                <div className="form-group text-center" style={{ margin: '25px' }}>
                    <p className="text-center">
                        <img src={this.state.cameraUrl} height="120px" width="160px" />
                    </p>
                    <label>Salon Front: </label>
                </div>
            </div>
        );          
    }
});

module.exports = CamerasList;