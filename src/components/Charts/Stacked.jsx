import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  const overridePrimaryXAxis = (baseDataset) => {
    return {
      ...baseDataset,
      labelStyle: { color: currentMode == "Dark" ? '#FFF' : '#33373E' },
    };
  };
  const overridePrimaryYAxis = (baseDataset) => {
    return {
      ...baseDataset,
      majorGridLines: { width: 1, color: currentMode == "Dark" ? '#FFF' : '#33373E' },
      minorGridLines: { width: 1, color: currentMode == "Dark" ? '#FFF' : '#33373E' },
      labelStyle: { color: currentMode == "Dark" ? '#FFF' : '#33373E' },
    };
  };
  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      primaryXAxis={overridePrimaryXAxis(stackedPrimaryXAxis)}
      primaryYAxis={overridePrimaryYAxis(stackedPrimaryYAxis)}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{
        background: currentMode === 'Dark' ? '#33373E' : '#fff',
        textStyle: { color: currentMode === 'Dark' ? '#fff' : '#33373E' }
      }}

    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked;
