import { Component } from 'react';

import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

class ExpensesList extends Component {
  render() {
    return (
      <ul className='expenses-list'>
        {this.props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </ul>
    );
  }
}

export default ExpensesList;
