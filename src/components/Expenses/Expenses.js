import { Component } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './Expenses.css';

class Expenses extends Component {
  constructor(props) {
    super(props);

    this.filterChangeHandler = this.filterChangeHandler.bind(this);
  }

  filterChangeHandler(selectYear) {
    this.props.setExpenesWithYear(selectYear);
  }

  render() {
    return (
      <div className='expenses'>
        <ExpensesFilter
        // selected={this.props.filter.year}
        // onChangeFilter={this.filterChangeHandler}
        />
        <ExpensesChart expenses={this.props.expenses} />
        <ExpensesList />
        {/* <ExpensesList expenses={this.props.expenses} /> */}
      </div>
    );
  }
}

export default Expenses;
