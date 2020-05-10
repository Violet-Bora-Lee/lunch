import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
	fetchPeople,
	getPeople
} from './modules/lunch'

import './App.css'

const mapDispatchToProps = {
	fetchPeople
}

const mapStateToProps = state => ({
	people: getPeople(state)
})

class App extends React.Component {
	static propTypes = {
		people: PropTypes.array.isRequired
	}

	render () {
		const {
			people
		} = this.props

		return (
			<div className='container'>
			<h1>Lunch</h1>
		{people}
	</div>
	)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
