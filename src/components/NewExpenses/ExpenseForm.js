import { Component } from 'react';

import './ExpenseForm.css';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({
      ...this.state,
      enteredTitle: event.target.value,
    });
  }

  handleChangeAmount(event) {
    this.setState({
      ...this.state,
      enteredAmount: event.target.value,
    });
  }

  handleChangeDate(event) {
    this.setState({
      ...this.state,
      enteredDate: event.target.value,
    });
    console.log(event.target.value);
  }

  submitHandler(event) {
    event.preventDefault();

    const newExpense = {
      title: this.state.enteredTitle,
      amount: this.state.enteredAmount,
      date: new Date(this.state.enteredDate),
    };

    this.props.onSaveExpenseData(newExpense);

    this.setState({
      ...this.state,
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={this.state.enteredTitle}
              onChange={this.handleChangeTitle}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={this.state.enteredAmount}
              onChange={this.handleChangeAmount}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='1999-01-01'
              max='2024-12-31'
              value={this.state.enteredDate}
              onChange={this.handleChangeDate}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button>Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
