import { Component } from 'react';

import './ExpenseDate.css';

class ExpenseDate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const day = this.props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = this.props.date.toLocaleString('en-US', { month: 'long' });
    const year = this.props.date.getFullYear();

    return (
      <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
    );
  }
}

export default ExpenseDate;
