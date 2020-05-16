import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePerson } from "../../actions/peopleActions";
import M from 'materialize-css/dist/js/materialize.min';

const PeopleItem = ({ person, deletePerson }) => {

	const {_id, name} = person;

	const onDelete = () => {
		deletePerson(_id);
		M.toast({html: `${name} is deleted.`})
	}

	return (
		<li className="collection-item">
			<div>
				<a href="#edit-person-modal" className="modal-trigger">{name}</a>
				<a href="#!" onClick={onDelete} className="secondary-content">
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>

		</li>
	);
};

PeopleItem.propTypes = {
	person: PropTypes.object.isRequired,
	deletePerson: PropTypes.func.isRequired,
}

// export default PeopleItem;
export default connect(null, { deletePerson })(PeopleItem);
