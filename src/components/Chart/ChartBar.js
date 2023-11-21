import { Component } from 'react';

import './ChartBar.css';

class ChartBar extends Component {
  barFillHeight = '0%';

  render() {
    console.log(this.props.maxValue);
    if (this.props.maxValue > 0) {
      this.barFillHeight =
        Math.round((this.props.value / this.props.maxValue) * 100) + '%';
    }

    return (
      <div className='chart-bar'>
        <div className='chart-bar__inner'>
          <div
            className='chart-bar__fill'
            style={{ height: this.barFillHeight }}
          ></div>
        </div>
        <div className='chart-bar__label'>{this.props.label}</div>
      </div>
    );
  }
}

export default ChartBar;
