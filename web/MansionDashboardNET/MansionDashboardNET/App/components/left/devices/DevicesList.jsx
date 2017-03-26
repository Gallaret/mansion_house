var React = require('react');

var DevicesList = React.createClass({

    render: function () {
        return (
            <label className="custom-file">
                <input type="file" id="file" className="custom-file-input" />
                <span className="custom-file-control"></span>
            </label>
        );
    }
});

module.exports = DevicesList;