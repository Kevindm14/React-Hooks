import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List'
import 'bootswatch/dist/darkly/bootstrap.min.css';

const App = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark border-bottom border-white">
				<a href="/" className="navbar-brand">React Movies</a>
			</nav>
			<main className="bg-dark">
				<div className="container">
					<List />
				</div>
			</main>
		</>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)