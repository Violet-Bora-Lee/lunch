import React from 'react';
import PropTypes from 'prop-types';

const PeopleItem = ({ person }) => {

	const {_id, name} = person;

	return (
		<li className="collection-item">
			<div>
				<a href="#edit-person-modal" className="modal-trigger">{name}</a>
				<a href="#!" className="secondary-content">
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>

		</li>
	);
};

PeopleItem.propTypes = {
	person: PropTypes.object.isRequired
}

export default PeopleItem;
