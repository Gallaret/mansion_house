var React = require('react');

var MembersList = React.createClass({

    render: function () {

        var list = [{ id: 'Test1', key: '1', url: '../images/banner1.svg' }, { id: 'Test2', key: '2', url: '../images/banner2.svg' }];

        return (
            <div className="form-inline"> {
                list.map(function (listValue) {
                    return <div key={listValue.key} style={{ marginRight: '25px' }}>
                        <img src={listValue.url} height="50px" width="50px" />
                        <label>{listValue.id}</label>
                    </div>;
                })}
            </div>
        );
    }
});

module.exports = MembersList;