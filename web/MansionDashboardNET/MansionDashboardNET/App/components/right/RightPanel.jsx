var React = require('react');
var MembersList = require('./members/MembersList');
var ReservationsList = require('./reservations/ReservationsList');

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
                        <li className="list-group-item">
                            <label className="text-primary">
                                <span onClick={() => this.toogleSection(this.state.showReservations, 'showReservations')}
                                    className={this.state.showReservations ? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus'}>
                                </span>
                                Najbliższe rezerwacje:
                            </label>
                            <span className="badge">2</span><br />
                            <div id="reservationsList" className={this.state.showReservations ? 'show' : 'hide'}>
                                <ReservationsList />
                            </div>
                        </li>
                        <li className="list-group-item">
                            <label className="text-primary">
                                <span onClick={() => this.toogleSection(this.state.showMembers, 'showMembers')}
                                    className={this.state.showMembers ? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus'}>
                                </span>
                                Użytkownicy
                            </label>
                            <span className="badge">2</span><br />
                            <div id="membersList" className={this.state.showMembers ? 'show' : 'hide'}>
                                <MembersList />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = RightPanel;