import { Component } from 'react';

import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

class ExpenseItem extends Component {
  render() {
    return (
      <li>
        <div className='card expense-item'>
          <ExpenseDate date={this.props.date} />
          <div className='expense-item__description'>
            <h2>{this.props.title}</h2>
            <div className='expense-item__price'>${this.props.amount}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default ExpenseItem;
