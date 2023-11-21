import { Component } from 'react';

import './ExpenseDate.css';

class ExpenseDate extends Component {
  day = this.props.date.toLocaleString('en-US', { day: '2-digit' });
  month = this.props.date.toLocaleString('en-US', { month: 'long' });
  year = this.props.date.getFullYear();

  render() {
    return (
      <div className='expense-date'>
        <div className='expense-date__month'>{this.month}</div>
        <div className='expense-date__year'>{this.year}</div>
        <div className='expense-date__day'>{this.day}</div>
      </div>
    );
  }
}

export default ExpenseDate;
