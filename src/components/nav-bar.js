import React from "react";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    
    render () {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;