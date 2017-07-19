var React = require('react');
var NotificationBar = require('./top/NotificationBar');
var LeftPanel = require('./left/LeftPanel');
var RightPanel = require('./right/RightPanel');
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
                <div className={styles.content}>
                    <header>
                        <hgroup className="panel panel-info center-block">
                            <h1 className="panel-heading" style={{ marginTop: '0px', fontSize: '25px' }}>Smart-Home Dashboard</h1>
                            <h2 className="panel-body" style={{ fontSize: '15px' }}>System do zarządzania inteligentnym mieszkaniem</h2>
                        </hgroup>
                    </header>
                    <LeftPanel styles={styles} />
                    <RightPanel styles={styles} />
                    <footer>
                        <section className={styles.footerSection}>Powered By: <br />
                            <img src="/images/react.png" height="80px" style={{ marginRight: '15px' }} />
                            <img src="/images/bootstrap.png" height="80px" style={{ marginRight: '15px' }} />
                            <img src="/images/aspnetcore.png" height="60px" style={{ marginRight: '15px' }} />
                        </section>
                      
                    </footer>
                </div>
            </div>
        );
    }
});

module.exports = UsersBox;