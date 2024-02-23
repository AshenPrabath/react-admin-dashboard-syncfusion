import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

const LineChart = () => {
  const {currentMode} = useStateContext();
  const tooltip = { enable: true }
  return (
    <ChartComponent
    id='line-Chart'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={tooltip}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[DateTime, Legend, LineSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((series, index) => {
          return <SeriesDirective key={index} {...series}/>
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart