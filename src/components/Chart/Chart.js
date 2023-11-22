import { Component } from 'react';

import ChartBar from './ChartBar';

import './Chart.css';

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  dataPointValues = this.props.dataPoints.map((dataPoint) => dataPoint.value);

  totalMaximum = Math.max(...this.dataPointValues);

  render() {
    return (
      <div className='chart'>
        {this.props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={1000}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
  }
}

export default Chart;
