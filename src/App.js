import React from 'react';

import NavBar from "./components/nav-bar";
import Home from "./pages/home/home"
import UsersMain from "./pages/users/users-main"


import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	return(
		<React.Fragment>
			<Router>
				<NavBar/>
				<Switch>
					<Route path="/home">
						<Home/>
					</Route>
					<Route path="/users">
						<UsersMain/>
					</Route>
				</Switch>
			</Router>
		</React.Fragment>
	)
}

export default App;
