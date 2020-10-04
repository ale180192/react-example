import React from "react";

export default class UsersList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    handlerClick = (user) => {
        console.log("siii");
        this.props.handlerSelectUser(user);
    }

    render() {
        return (
            <table>
                {this.state.data.map( user => (
                    <tr key={user.id} >
                        <td>
                            <button onClick={() => this.handlerClick(user)}>{user.id}</button>
                        </td>
                        <td>{user.email}</td>
                    </tr>))}
            </table>
        )
    }
}