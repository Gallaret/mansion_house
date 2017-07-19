var React = require('react');

var DevicesList = React.createClass({

    render: function () {

        var list = [{ id: 'Drukara: HP-3213', key: '1', url: '../images/printer.png' },
            { id: 'Konsola: Playstation 4 Pro', key: '2', url: '../images/ps4.png' },
            { id: 'TV: Philips Ambilight', key: '3', url: '../images/tv.png' },
            { id: 'Projector: Sony', key: '4', url: '../images/projector.png' },
            { id: 'Speakers: Creative', key: '5', url: '../images/speaker.png' }
        ];

        return (
            <div className="form-inline"> {
                list.map(function (listValue) {
                    return <div key={listValue.key} className="form-group text-center" style={{ margin: '25px' }}>
                        <p className="text-center">
                            <img className="img-thumbnail bg-success" src={listValue.url} style={{ height: '60px' }} />
                        </p>
                        <label>{listValue.id}</label>
                    </div>;
                })}
            </div>
        );
    }
});

module.exports = DevicesList;