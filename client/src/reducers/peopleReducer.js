import {FETCH_PEOPLES, SET_LOADING, PEOPLE_ERROR, ADD_PERSON, DELETE_PERSON} from '../actions/types';

const initialState = {
  peoples: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLES:
      return {
        ...state,
	    peoples: action.payload,
        loading: false
      }
    case ADD_PERSON:
	  return {
	    ...state,
		peoples: [...state.peoples, action.payload],
		loading: false
	  }
    case DELETE_PERSON:
	  return {
	    ...state,
	    peoples: state.peoples.filter(person => person._id !== action.payload),
	    loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case PEOPLE_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
