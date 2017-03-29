var React = require('react');

var DevicesList = React.createClass({

    render: function () {

        var list = [{ id: 'jeden', key: '1', url: '../images/banner1.svg' }, { id: 'dwa', key: '2', url: '../images/banner2.svg' }];

        return (
            <div className="form-inline"> {
                list.map(function (listValue) {
                    return <div key={listValue.key} className="form-group text-center" style={{ marginRight: '25px' }}>
                        <p className="center-block"><img src={listValue.url} height="80px" width="80px" /></p>
                        <label>{listValue.id}</label>
                    </div>;
                })}
            </div>
        );
    }
});

module.exports = DevicesList;