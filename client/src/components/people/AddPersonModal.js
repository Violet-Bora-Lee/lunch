import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { addPerson } from "../../actions/peopleActions";
import M from 'materialize-css/dist/js/materialize.min'

const AddPersonModal = ({ addPerson }) => {
	const [name, setName] = useState('');

	const onSubmit = () => {
		if (name === '') {
			M.toast({ html: 'Please enter a name'});
		} else {
			const newPerson = {
				name
			}

			addPerson(newPerson);

			M.toast({html: `${name} is added.`})

			// Clear field
			setName('');
		}
	}

	return (
		<div id="add-person-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Enter name</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<label htmlFor="name" className="active">
							Name
						</label>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a href="#!" onClick={onSubmit} className="modal-close waves-effect pink btn">
					Enter
				</a>
			</div>

		</div>
	);
};

AddPersonModal.propTypes = {
	addPerson: PropTypes.func.isRequired,
}

const modalStyle = {
	width: '60%',
	height: '30%'
}

export default connect(null, {addPerson})(AddPersonModal);
