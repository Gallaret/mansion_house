var React = require('react');

var CamerasList = React.createClass({
    getInitialState: function () {
        return {
            cameraUrl: '',
            timer: 0,
            name: ''
        };
    },
    componentDidMount: function () {
        this.stream = setInterval(this.streaming, 1000);   
    },
    componentWillUnmount: function () {
        clearInterval(this.stream);
    },  
    streaming: function () {
        var image = this.getImage();
        var name = this.getName();
     
        this.setState({ cameraUrl: image });
        this.setState({ name: name });
    },
    getName: function () {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:57203/api/camera/1", false);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
        return xhttp.responseText;
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
                    <label>{this.state.name}</label>
                </div>
            </div>
        );          
    }
});

module.exports = CamerasList;