import React, { useState, useEffect } from 'react';
import PeopleItem from "./PeopleItem";
import Preloader from "../layout/Preloader";

const People = () => {
	const [people, setPeople] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getPeople();
		// eslint-disable-next-line
	}, [])

	const getPeople = async () => {
		setLoading(true);
		const res = await fetch('/api/people');
		const data = await res.json();

		setPeople(data);
		setLoading(false);
	}

	if (loading) {
		return <Preloader/>
	}
	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">People List</h4>
			</li>
			{!loading && people.length === 0 ? (
				<p className="center">No people to show</p>
			) : (
				people.map(person => <PeopleItem person={person} key={person._id}/>)
			)}


		</ul>
	);
};

export default People;
