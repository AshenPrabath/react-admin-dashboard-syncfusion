import React from 'react';
import { Header, TrackingTable } from '../components';
import { trackingData } from '../data/dummy';


const Tracking = () => {
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
            <Header category="Page" title="Tracking" />
            <TrackingTable dataSource={trackingData} />
        </div>
    )
}

export default Tracking