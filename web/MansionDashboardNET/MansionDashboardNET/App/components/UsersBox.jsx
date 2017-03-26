var React = require('react');
var NotificationBar = require('./top/NotificationBar');
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
            <div className="dashboard">
                <NotificationBar />
                <div className={styles.content}>
                    <header>
                        <hgroup>
                            <h1>Dashboard</h1>
                        </hgroup>
                    </header>
                    <div className="left" style={{ height: '500px', width: '65%', float: 'left', backgroundColor: 'silver' }}>
                        <UserList data={this.state.data} />
                        <button onClick={this.handleClick}>Click</button>
                    </div>
                    <div className="right" style={{ height: '500px', width: '35%', float: 'right', backgroundColor: 'skyblue' }}>
                        Right content
                    </div>
                    <footer>

                    </footer>
                </div>
            </div>
        );
    }
});

module.exports = UsersBox;