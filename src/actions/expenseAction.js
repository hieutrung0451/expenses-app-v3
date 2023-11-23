import { ADD_NEW_EXPENSE, FILTER_EXPENSE, FILTER_YEAR } from './actionTypes';

export function add_new_expense(payload) {
  return {
    type: ADD_NEW_EXPENSE,
    payload: payload,
  };
}

export function filter_expense(payload) {
  return {
    type: FILTER_EXPENSE,
    payload: payload,
  };
}

export function filter_year(payload) {
  return {
    type: FILTER_YEAR,
    payload: payload,
  };
}
