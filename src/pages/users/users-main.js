import 
    React,{ 
    useEffect,
    useState
} from "react";
import UsersDetail from "./users-detail";
import UsersList from "./users-list";

import "./users-main.css"

const UsersMain = (props) => {

    const users = [
        {
            id: 1,
            email: "test1@email.com" 
        },
        {
            id: 2,
            email: "test2@email.com" 
        },
        {
            id: 3,
            email: "test3@email.com" 
        }
    ];

    const [state, setState] = useState({
        users: users, 
        userSelected: {email: users[0].email, id: users[0].id},
    });

    useEffect(() => {
        console.log("state updated ..", state)
    });

    const handlerSelectUser = (user) => {
        console.log("handlerSelectUser", user);
        setState(
            {users: state.users, userSelected: {email: user.email, id: user.id}}
        );
    }

    const handleSaveUser = () => {
        console.log("save user main", state.userSelected);
        let usersTmp = state.users;
        usersTmp[state.userSelected.id-1] = state.userSelected;
        setState({users: usersTmp, userSelected: state.userSelected});
    }

    const handleChange = (user) => {
        console.log("userselected update", user);
        setState({
            userSelected: {email: user.email, id: user.id},
            users: state.users            
        });
    }

    return(
        <React.Fragment>
            <div className="main-container">
                <div className="list-container">
                    <p>this is the users' list</p>
                    <UsersList 
                        data={state.users}
                        handlerSelectUser={handlerSelectUser}>
                    </UsersList>
                </div>
                <div className="detail-container">
                    <p>this is the users' detail </p>
                    <UsersDetail 
                        id={state.userSelected.id}
                        email={state.userSelected.email}
                        onSave={handleSaveUser}
                        onChange={handleChange} 
                    >
                    </UsersDetail>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UsersMain;