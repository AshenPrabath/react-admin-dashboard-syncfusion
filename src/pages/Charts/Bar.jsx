import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, BarSeries,DataLabel,Tooltip,Category } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis,  } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';
import { Header } from '../../components'

const Bar = () => {
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
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Bar" title="Inflation rate in bar" />
      <div className='w-full'>
        <ChartComponent
        id='bar-chart'
          title='Bar-chart'
          titleStyle={{ color: currentMode === "Dark" ? '#FFF': '#33373E' }}
          height='420px'
          primaryXAxis={overridePrimaryXAxis(barPrimaryXAxis)}
          primaryYAxis={overridePrimaryYAxis(barPrimaryYAxis)}
          chartArea={{ border: { width: 0 } }}
          tooltip={tooltip}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{
            background: currentMode === 'Dark' ? '#33373E' : '#fff',
            textStyle: { color: currentMode === 'Dark' ? '#fff' : '#33373E' }
          }}
        >
          <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((series, index) => {
              return <SeriesDirective key={index} {...series} />
            })}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar