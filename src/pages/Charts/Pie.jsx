import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationChart, AccumulationDataLabel, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { pieChartData, pieCustomSeries } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';
import { Header, LineChart} from '../../components'


const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Pie chart" title="Distribution of Business Expenses" />
      <div className='w-full'>
      <AccumulationChartComponent 
      id='charts' 
      legendSettings={{
        visible:true,
        background: currentMode === 'Dark' ? '#33373E' : '#fff',
        textStyle: { color: currentMode === 'Dark' ? '#fff' : '#33373E' }
        
      }}
      tooltip={{enable:true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
      <Inject services={[AccumulationLegend,AccumulationTooltip,AccumulationDataLabel]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' dataLabel={{ visible:true}} >
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
      </div>
    </div>

  )
}

export default Pie