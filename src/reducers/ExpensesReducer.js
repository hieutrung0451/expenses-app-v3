import {
  ADD_NEW_EXPENSE,
  FILTER_EXPENSE,
  FILTER_YEAR,
} from '../actions/actionTypes';

const initalState = {
  expenses: [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'New House',
      amount: 799.49,
      date: new Date(2023, 2, 12),
    },
  ],

  filter: {
    year: '2023',
  },
  listExpenseAfterFilter: [],
};

export default function expensesReducer(state = initalState, action) {
  switch (action.type) {
    case ADD_NEW_EXPENSE:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
    case FILTER_EXPENSE:
      return {
        ...state,
        listExpenseAfterFilter: action.payload,
      };
    case FILTER_YEAR:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}
