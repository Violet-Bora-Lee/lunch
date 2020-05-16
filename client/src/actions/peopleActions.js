import { FETCH_PEOPLES, SET_LOADING, PEOPLE_ERROR } from './types';

// get people from server
export const fetchPeople = () => async dispatch => {

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


// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
