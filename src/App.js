import { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import NewExpenses from './components/NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses';

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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expenses !== prevState.expenses) {
      let listExpense = this.getListExp(
        this.state.expenses,
        this.state.filter.year
      );

      this.setState({
        ...this.state,

        listExpenseAfterFilter: listExpense,
      });
    }
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

  render() {
    return (
      <Provider store={store}>
        <NewExpenses onAddExpense={this.addExpenseHandler} />
        <Expenses
          expenses={this.state.listExpenseAfterFilter}
          filter={this.state.filter}
          setExpenesWithYear={this.setExpenesWithYear}
        />
      </Provider>
    );
  }
}

export default App;
