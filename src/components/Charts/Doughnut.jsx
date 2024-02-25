import React, { Component } from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from '@syncfusion/ej2-react-charts';

class Doughnut extends Component {
  constructor(props) {
    super(props);
    this.accData = [
      { x: 'Category 1', y: 30 },
      { x: 'Category 2', y: 20 },
      { x: 'Category 3', y: 50 },
      // Add more data points as needed
    ];
  }

  render() {
    return (
      <div className='text'>
        <AccumulationChartComponent id='charts' width='400px' height='300px'>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={this.accData} xName='x' yName='y' innerRadius='40%' />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    );
  }
}

export default Doughnut;
