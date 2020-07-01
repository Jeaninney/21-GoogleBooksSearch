import React from "react";
import "./style.css";

function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand mb-1 h1 text-warning" href="/">
				Jeaninney's Google Books Searcher
			</a>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="/search">
							Search <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/saved">
							Saved
						</a>
					</li>
				</ul>
		</nav>
	);
}

export default Nav;
