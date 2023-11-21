import { Component } from 'react';

import './ExpensesFilter.css';

class ExpensesFilter extends Component {
  dropdownChangeHandler = (event) => {
    this.props.onChangeFilter(event.target.value);
  };

  render() {
    return (
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select
            value={this.props.selected}
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

export default ExpensesFilter;
