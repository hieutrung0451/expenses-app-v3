import { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../Chart/Chart';

class ExpensesChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chartDataPoints = [
      { label: 'Jan', value: 0 },
      { label: 'Feb', value: 0 },
      { label: 'Mar', value: 0 },
      { label: 'Apr', value: 0 },
      { label: 'May', value: 0 },
      { label: 'Jun', value: 0 },
      { label: 'Jul', value: 0 },
      { label: 'Aug', value: 0 },
      { label: 'Sep', value: 0 },
      { label: 'Oct', value: 0 },
      { label: 'Nov', value: 0 },
      { label: 'Dec', value: 0 },
    ];

    for (const expense of this.props.listExpenseAfterFilter) {
      const expenseMonth = expense.date.getMonth();

      chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  listExpenseAfterFilter: state.listExpenseAfterFilter,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesChart);
