var React = require('react');

var RightPanel = React.createClass({
    getInitialState: function () {
        return {
            showReservations: true,
            showMembers: true
        };
    },
    toogleSection: function (visibility, action) {
       
        switch (action) {
            case 'showMembers':
                return this.setState({ showMembers: !visibility });
            case 'showReservations':
                return this.setState({ showReservations: !visibility });
            default:
                throw 'Wrong action';
        }
    },
    render: function () {

        var rightPanel = 'panel panel-primary '.concat(this.props.styles.panel, ' ', this.props.styles.right);

        return (
            <div className={rightPanel}>
                <div className="panel-heading">Panel Smart-Home</div>
                <div className="panel-body">
                    <ul className="list-group">
                       
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = RightPanel;