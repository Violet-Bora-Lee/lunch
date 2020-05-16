import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PeopleItem from "./PeopleItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { fetchPeoples } from "../../actions/peopleActions"

const Peoples = ({ people: { peoples, loading }, fetchPeoples }) => {

	useEffect(() => {
		fetchPeoples();
		// eslint-disable-next-line
	}, [])

	if (loading || peoples === null) {
		return <Preloader/>
	}
	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">People List</h4>
			</li>
			{!loading && peoples.length === 0 ? (
				<p className="center">No people to show</p>
			) : (
				peoples.map(person => <PeopleItem person={person} key={person._id}/>)
			)}


		</ul>
	);
};

Peoples.propTypes = state => ({
	people: PropTypes.object.isRequired,
})

const mapStateToProps = state => ({
	people: state.people
});

export default connect(mapStateToProps, { fetchPeoples })(Peoples);
