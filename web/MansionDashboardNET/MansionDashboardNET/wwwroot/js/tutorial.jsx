var UserList = React.createClass({
    render: function () {
        console.log(this.props.data);
        return (    
            <div>
                <label>{this.props.data.id}</label> <br />
                <label>{this.props.data.password}</label> <br />
                <label>{this.props.data.userName}</label>
            </div>
        );
    }
});

var UserBox = React.createClass({
    getInitialState: function () {
        return { data: this.props.initialData };
    },
    render: function () {
        return (
          <div className="userBox">
                <UserList data={this.state.data} />
          </div>
        );
    }
});
