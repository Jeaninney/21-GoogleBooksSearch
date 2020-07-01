import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Search from "./pages/search";
import Saved from "./pages/saved";

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
			</Switch>
    </div>
		</Router>
  );
}


export default App;
