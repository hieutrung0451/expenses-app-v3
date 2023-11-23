import { createStore } from 'redux';
import expensesReducer from './reducers/ExpensesReducer';

const store = createStore(expensesReducer);

export default store;
