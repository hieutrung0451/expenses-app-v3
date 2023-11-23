import { Component } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

class NewExpenses extends Component {
  constructor(props) {
    super(props);
    this.onSaveExpenseDataHandler = this.onSaveExpenseDataHandler.bind(this);
  }

  onSaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    this.props.onAddExpense(expenseData);
    console.log(enteredExpenseData);
  }

  render() {
    return (
      <div className='new-expense'>
        <ExpenseForm />
        {/* <ExpenseForm onSaveExpenseData={this.onSaveExpenseDataHandler} /> */}
      </div>
    );
  }
}

export default NewExpenses;
