import React from 'react';
import PropTypes from 'prop-types';

const PeopleItem = ({ person }) => {

	const {_id, name} = person;

	return (
		<li className="collection-item">
			<div>
				<a href="">{name}</a>
			</div>

		</li>
	);
};

PeopleItem.propTypes = {
	person: PropTypes.object.isRequired
}

export default PeopleItem;
