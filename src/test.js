import React from 'react';
import ReactDOM from 'react-dom';

var path = require('path');
var newPath = path.join(__dirname, "build");
console.log(process.env.NODE_ENV);

var userListData = [
    {
        id: 1, 
        name: "张三",
        gender: "男"
    }, {
        id: 2, 
        name: "李四",
        gender: "男"
    }, {
        id: 3, 
        name: "王五",
        gender: "女"
    },
];

var UserListItem = React.createClass({
    getInitialState() {
        return {
            isActive: false
        };
    },

    toggle: function(e) {
        this.setState({
            isActive: e.target.checked
        });
        console.log(e.target.checked);
    },

    render: function() {
        return <tr className={this.state.isActive ? "active": ""}>
                    <td>{this.props.user.name}</td>
                    <td>{this.props.user.gender}</td>
                    <td><input type="checkbox" onClick={this.toggle} /></td>
                </tr>;
    }
});

var UserList = React.createClass({
    render: function() {
        return <div>
            <table>
                <thead>
                    <tr>
                        <td>姓名：</td>
                        <td>年龄：</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userListData.map(function(user) {
                            return <UserListItem user={user} key={user.id} />
                        })
                    }
                </tbody>
            </table>
        </div>;
    }
});

ReactDOM.render(<UserList/>, document.getElementById("root"));