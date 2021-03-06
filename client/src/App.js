import React, { useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

import NavBar from "./components/layout/NavBar"
import People from "./components/people/Peoples";
import AddBtn from "./components/layout/AddBtn";
import AddPersonModal from "./components/people/AddPersonModal";
import EditPersonModal from "./components/people/EditPersonModal";

import { Provider } from "react-redux";
import store from "./store";
// import {
// 	fetchPeople,
// 	getPeople
// } from './modules/lunch'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'
import './App.css'

// const mapDispatchToProps = {
// 	fetchPeople
// }
//
// const mapStateToProps = state => ({
// 	people: getPeople(state)
// })

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	})

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<NavBar/>
					<div className="container">
						<AddBtn/>
						<AddPersonModal/>
						<EditPersonModal/>
						<People/>
					</div>
				</Fragment>
			</Router>
		</Provider>
	)
}

export default App;

// class App extends React.Component {
// 	static propTypes = {
// 		people: PropTypes.array.isRequired
// 	}
//
// 	render () {
// 		const {
// 			people
// 		} = this.props
//
// 		return (
// 			<div className='container'>
// 			<h1>Lunch</h1>
// 		{people}
// 	</div>
// 	)
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
