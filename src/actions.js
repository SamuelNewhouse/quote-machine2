import randomWikiquote from './util/random-wikiquote';

export const FETCHING_QUOTE = 'FETCHING_QUOTE';
export function fetchingQuote() {
  return {
    type: FETCHING_QUOTE,
    isFetching: true
  }
}

export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';
export function fetchQuoteFailure(error) {
  return {
    type: FETCH_QUOTE_FAILURE,
    error: error
  }
}

export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCESS';
export function fetchQuoteSuccess(quoteData) {
  return {
    type: FETCH_QUOTE_SUCCESS,
    author: quoteData.title,
    quote: quoteData.quote
  }
}

export function fetchQuote() {
  return function (dispatch) {
    dispatch(fetchingQuote());

    return randomWikiquote.getRandomQuote().then(
      quoteData => { dispatch(fetchQuoteSuccess(quoteData)) },
      error => { dispatch(fetchQuoteFailure(error)) }
    );
  }
}