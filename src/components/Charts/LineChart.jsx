import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  const tooltip = { enable: true }

  const overridePrimaryXAxis = (baseDataset) => {
    return {
      ...baseDataset,
      labelStyle: { color: currentMode === "Dark" ? '#FFF' : '#33373E' },
      
      
    };
  };
  const overridePrimaryYAxis = (baseDataset) => {
    return {
      ...baseDataset,
      labelStyle: { color: currentMode === "Dark" ? '#FFF' : '#33373E' },
      majorGridLines: { width: 1, color: currentMode === "Dark" ? '#FFF' : '#33373E' },
      minorGridLines: { width: 1, color: currentMode === "Dark" ? '#FFF' : '#33373E' },
      
    };
  };
  return (
    <ChartComponent
      id='line-Chart'
      height='420px'
      primaryXAxis={overridePrimaryXAxis(LinePrimaryXAxis)}
      primaryYAxis={overridePrimaryYAxis(LinePrimaryYAxis)}
      chartArea={{ border: { width: 0 } }}
      tooltip={tooltip}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{
        background: currentMode === 'Dark' ? '#33373E' : '#fff',
        textStyle: { color: currentMode === 'Dark' ? '#fff' : '#33373E' }
      }}
    >
      <Inject services={[DateTime, Legend, LineSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((series, index) => {
          return <SeriesDirective key={index} {...series} />
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart