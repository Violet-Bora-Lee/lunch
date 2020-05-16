import { FETCH_PEOPLES, SET_LOADING, PEOPLE_ERROR, ADD_PERSON } from './types';

// get peoples from server
export const fetchPeoples = () => async dispatch => {

  try {
    setLoading();

    const res = await fetch('/api/people');
    const data = await res.json();

    dispatch({
      type: FETCH_PEOPLES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PEOPLE_ERROR,
      payload: err.respond.data
    })
  }

};

// add person to server
export const addPerson = (person) => async dispatch => {

	try {
		setLoading();

		const res = await fetch('/api/people', {
			method: 'POST',
			body: JSON.stringify(person),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type: ADD_PERSON,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: PEOPLE_ERROR,
			payload: err.respond.data
		})
	}

};


// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
