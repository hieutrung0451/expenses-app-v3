import { Component } from 'react';
import { connect } from 'react-redux';

import { filter_expense } from '../../actions/expenseAction';
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

class ExpensesList extends Component {
  constructor(props) {
    super(props);

    this.getListExp = this.getListExp.bind(this);
  }

  getListExp(exps, year) {
    return exps.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
  }

  componentDidMount() {
    console.log(
      '🚀 ~ file: ExpensesList.js:31 ~ ExpensesList ~ componentDidMount ~ this.props.filter.year:',
      this.props.filter
    );

    const newExpense = this.getListExp(
      this.props.expenses,
      this.props.filter.year
    );

    this.props.filter_expense(newExpense);
  }

  render() {
    console.log(this.props.listExpenseAfterFilter);
    return (
      <ul className='expenses-list'>
        {this.props.listExpenseAfterFilter.map((expense) => {
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

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filter: state.filter,
  listExpenseAfterFilter: state.listExpenseAfterFilter,
});

const mapDispatchToProps = (dispatch) => ({
  filter_expense: (payload) => dispatch(filter_expense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
// export default ExpensesList;
