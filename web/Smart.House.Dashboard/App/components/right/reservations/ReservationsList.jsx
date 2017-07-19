var React = require('react');

var ReservationsList = React.createClass({

    render: function () {

        var list = [{ id: 'Dzisiaj: 17:00 - 19:00: Roman Erotoman', key: '1', url: '../images/tv.png' },
            { id: 'Jutro: 17:00 - 19:00: Zdzichu Testerski', key: '2', url: '../images/ps4.png' }];

        return (
            <div className="form-inline"> {
                list.map(function (listValue) {
                    return <div key={listValue.key} style={{ margin: '15px' }}>
                        <span className="block-center" style={{ width: '80px', display: 'inline-block' }}>
                            <img src={listValue.url} height="25px" />
                        </span>
                        <label>{listValue.id}</label>
                    </div>;
                })}
            </div>
        );
    }
});

module.exports = ReservationsList;