import { Component } from 'react';
import { connect } from 'react-redux';

import { filter_year, filter_expense } from '../../actions/expenseAction';

import './ExpensesFilter.css';

class ExpensesFilter extends Component {
  constructor(props) {
    super(props);

    this.dropdownChangeHandler = this.dropdownChangeHandler.bind(this);
    this.getListExp = this.getListExp.bind(this);
  }

  getListExp(exps, year) {
    return exps.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
  }

  dropdownChangeHandler = (event) => {
    const listExpense = this.getListExp(
      this.props.expenses,
      event.target.value
    );

    this.props.filter_year({ year: event.target.value });
    this.props.filter_expense(listExpense);
  };

  render() {
    return (
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select
            value={this.props.filter.year}
            onChange={this.dropdownChangeHandler}
          >
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filter: state.filter,
  listExpenseAfterFilter: state.listExpenseAfterFilter,
});

const mapDispatchToProps = (dispatch) => ({
  filter_year: (payload) => dispatch(filter_year(payload)),
  filter_expense: (payload) => dispatch(filter_expense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesFilter);
