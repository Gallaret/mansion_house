var React = require('react');
var NotificationBar = require('./top/NotificationBar');
var LeftPanel = require('./left/LeftPanel');
var styles = require('../stylesheets/dashboard.scss');

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
    handleClick: function () {
        console.log(styles);
    },
    render: function () {

        return (
            <div className="container-fluid">
                <NotificationBar />
                <div className="content">
                    <header>
                        <hgroup className="panel panel-info center-block">
                            <h1 className="panel-heading" style={{ marginTop: '0px', fontSize: '25px' }}>Smart-Home Dashboard</h1>
                            <h2 className="panel-body" style={{ fontSize: '15px' }}>System do zarządzania inteligentnym mieszkaniem</h2>
                        </hgroup>
                    </header>
                    <LeftPanel />
                    <div className="panel panel-primary" style={{ height: '500px', width: '33%', float: 'right', marginLeft:'2%' }}>
                        <div className="panel-heading">Panel informacyjny</div>
                        <div className="panel-body">
                            <UserList data={this.state.data} />
                            <button onClick={this.handleClick}>Click</button>
                        </div>
                    </div>
                    <footer>
                        Powered by ReactJS
                    </footer>
                </div>
            </div>
        );
    }
});

module.exports = UsersBox;