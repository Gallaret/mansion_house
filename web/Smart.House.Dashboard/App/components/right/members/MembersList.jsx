var React = require('react');

var MembersList = React.createClass({

    render: function () {

        var list = [{ id: 'Roman Erotoman', key: '1', url: '../images/default-avatar.png', desc: '"Mama nakarm kurwia"' },
                    { id: 'Zdzichu Testowy', key: '2', url: '../images/default-avatar.png', desc: '"Wychodzę i nie wiem czy wrócę trzeźwy!"' }];

        return (
            <div className="form-inline"> {
                list.map(function (listValue) {
                    return <div key={listValue.key} style={{ margin: '15px' }}>
                        <img src={listValue.url} height="30px" width="30px" className="img-circle" />
                        <label style={{ marginLeft: '10px' }}>{listValue.id}:</label>
                        <label style={{ marginLeft: '10px' }} className="small">{listValue.desc}</label>
                    </div>;
                })}
            </div>
        );
    }
});

module.exports = MembersList;