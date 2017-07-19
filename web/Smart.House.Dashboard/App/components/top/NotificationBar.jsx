var React = require('react');

var NotificationBar = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-fixed-top navbar-inverse">
                <a className="navbar-brand" href="#">Navbar</a>
                <ul className="navbar-nav" style={{ marginTop: '15px' }}>
                    <li> <a className="navbar-link" href="#" style={{ textDecoration: 'none' }}>Active</a> </li>
                    <li> <a className="navbar-link" href="#" style={{ marginLeft: '15px', textDecoration: 'none' }}>Link</a> </li>
                    <li> <a className="navbar-link" href="#" style={{ marginLeft: '15px', textDecoration: 'none' }}>Link</a> </li>
                    <li> <a className="navbar-link" href="#" style={{ marginLeft: '15px', textDecoration: 'none' }}>Disabled</a> </li>
                </ul>
                
            </nav>
        );
    }
});

module.exports = NotificationBar;