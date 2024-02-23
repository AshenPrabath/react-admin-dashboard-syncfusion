import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';
import { Header } from '../../components'




const Area = () => {
  const { currentMode } = useStateContext();
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
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Area" title="Inflation rate in Percentage" />
      <div className='w-full'>
        <ChartComponent
          id='area-chart'
          height='420px'
          primaryXAxis={overridePrimaryXAxis(areaPrimaryXAxis)}
          primaryYAxis={overridePrimaryYAxis(areaPrimaryYAxis)}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{
            background: currentMode === 'Dark' ? '#33373E' : '#fff',
            textStyle: { color: currentMode === 'Dark' ? '#fff' : '#33373E' }
          }}
        >
          <Inject services={[DateTime, Legend, SplineAreaSeries,]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((series, index) => {
              return <SeriesDirective key={index} {...series} />
            })}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>

  )
}

export default Area