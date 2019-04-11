import {
  FETCHING_QUOTE,
  FETCH_QUOTE_FAILURE,
  FETCH_QUOTE_SUCCESS
} from './actions';

const initialState = {
  isFetching: false,
  error: null,
  author: "",
  quote: ""
};

function handleActions(state = initialState, action) {
  switch (action.type) {
    case FETCHING_QUOTE:
      return Object.assign({}, state, { isFetching: true, error: false });
    case FETCH_QUOTE_FAILURE:
      return Object.assign({}, state, { isFetching: false, error: action.error });
    case FETCH_QUOTE_SUCCESS:
      return Object.assign({}, state, { isFetching: false, author: action.author, quote: action.quote });
    default:
      return state;
  }
}

export default handleActions;