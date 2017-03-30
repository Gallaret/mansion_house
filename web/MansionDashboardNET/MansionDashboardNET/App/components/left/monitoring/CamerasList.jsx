var React = require('react');

var CamerasList = React.createClass({

    render: function () {

        var list = [{ id: 'Salon: Front', key: '1', url: '../images/banner1.svg' }, { id: 'Salon: Tył', key: '2', url: '../images/banner2.svg' }];

        return (
            <div className="form-inline"> {
                list.map(function (listValue) {
                    return <div key={listValue.key} className="form-group text-center" style={{ margin: '25px' }}>
                        <p className="text-center">
                            <img className="img-thumbnail" style={{ height: '120px', width: '160px' }} />
                        </p>
                        <label>{listValue.id}</label>
                    </div>;
                })}
            </div>
        );
    }
});

module.exports = CamerasList;