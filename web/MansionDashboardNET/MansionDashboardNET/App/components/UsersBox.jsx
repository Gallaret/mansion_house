var React = require('react');

var UserList = React.createClass({
    render: function () {
        return (
            <div>
                <label>{this.props.data.id}</label> <br />
                <label>{this.props.data.password}</label> <br />
                <label>{this.props.data.userName}</label>
            </div>
        );
    }
});

var UsersBox = React.createClass({
    getInitialState: function () {
        return { data: this.props.initialData };
    },
    render: function () {
        return (
            <div className="userBox">
                <header>
                    <hgroup>
                        <h1>Dashboard</h1>
                    </hgroup>
                </header>
                <UserList data={this.state.data} />
            </div>
        );
    }
});

module.exports = UsersBox;