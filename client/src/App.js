import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Search from "./pages/search";
import Saved from "./pages/saved";

const NoMatchRoute = () => <div>404 Page</div>;

function App() {
  return (
		<Router>
    <div className="App">
			<Nav />
			<Switch>
				<Route exact path={["/", "/search"]}>
					<Search />
				</Route>
				<Route exact path={"/saved"}>
					<Saved />
				</Route>
				<Route component={NoMatchRoute} />
			</Switch>
    </div>
		</Router>
  );
}


export default App;
