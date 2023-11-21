import { Component } from 'react';

import NewExpenses from './components/NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses';

// const EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   {
//     id: 'e2',
//     title: 'New TV',
//     amount: 799.49,
//     date: new Date(2021, 2, 12),
//   },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

class App extends Component {
  constructor() {
    super();
    this.addExpenseHandler = this.addExpenseHandler.bind(this);
    this.setExpenesWithYear = this.setExpenesWithYear.bind(this);
    this.getListExp = this.getListExp.bind(this);

    this.state = {
      expenses: [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        {
          id: 'e2',
          title: 'New TV',
          amount: 799.49,
          date: new Date(2021, 2, 12),
        },
        {
          id: 'e3',
          title: 'New House',
          amount: 799.49,
          date: new Date(2023, 2, 12),
        },
      ],
      filter: {
        year: '2023',
        month: null,
      },
      listExpenseAfterFilter: [],
    };
  }

  getListExp(exps, year) {
    return exps.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
  }

  componentDidMount() {
    const listExpense = this.getListExp(
      this.state.expenses,
      this.state.filter.year
    );

    this.setState({
      ...this.state,

      listExpenseAfterFilter: listExpense,
    });
  }

  addExpenseHandler(expense) {
    this.setState({
      expenses: [expense, ...this.state.expenses],
      listExpenseAfterFilter: [expense, ...this.state.listExpenseAfterFilter],
    });
  }

  setExpenesWithYear(year) {
    const listExpense = this.getListExp(this.state.expenses, year);

    this.setState({
      ...this.state,
      listExpenseAfterFilter: listExpense,
      filter: {
        ...this.state.filter,
        year,
      },
    });
  }

  // setExpenesWithMonth(month) {
  //   this.setState({
  //     ...this.state,
  //     filter: {
  //       ...this.state.filter,
  //       month,
  //     },
  //   });
  // }

  render() {
    return (
      <>
        <NewExpenses onAddExpense={this.addExpenseHandler} />
        <Expenses
          expenses={this.state.listExpenseAfterFilter}
          filter={this.state.filter}
          setExpenesWithYear={this.setExpenesWithYear}
        />
      </>
    );
  }
}

export default App;
