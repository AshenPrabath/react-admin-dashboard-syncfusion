import React, { useEffect } from 'react';
import { GrInProgress } from "react-icons/gr";
import { GiCargoShip } from "react-icons/gi";
import { FaVanShuttle } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";


const ShippingTracker = ({ status }) => {
    const disabledBgColor = 'bg-slate-50';
    const actiiveBgColor = 'bg-green-200';
    const disabledIconColor = 'text-gray-300';
    const activeIconColor = 'text-green-700';

    const bgColorArray = [disabledBgColor, disabledBgColor, disabledBgColor, disabledBgColor];
    const bgIconArray = [disabledIconColor, disabledIconColor, disabledIconColor, disabledIconColor];

    if (status === 'Processing') {
        bgColorArray[0] = actiiveBgColor;
        bgIconArray[0] = activeIconColor;
    }
    else if (status === 'In Transit') {
        bgColorArray[0] = actiiveBgColor;
        bgColorArray[1] = actiiveBgColor;

        bgIconArray[0] = activeIconColor;
        bgIconArray[1] = activeIconColor;
    }
    else if (status === 'Out for Delivery') {
        bgColorArray[0] = actiiveBgColor;
        bgColorArray[1] = actiiveBgColor;
        bgColorArray[2] = actiiveBgColor;

        bgIconArray[0] = activeIconColor;
        bgIconArray[1] = activeIconColor;
        bgIconArray[2] = activeIconColor;
    }
    else if (status === 'Delivered') {
        bgColorArray[0] = actiiveBgColor;
        bgColorArray[1] = actiiveBgColor;
        bgColorArray[2] = actiiveBgColor;
        bgColorArray[3] = actiiveBgColor;

        bgIconArray[0] = activeIconColor;
        bgIconArray[1] = activeIconColor;
        bgIconArray[2] = activeIconColor;
        bgIconArray[3] = activeIconColor;

    }

    console.log(bgColorArray);
    return (
        <div>
            ShippingTracker
            <div className='flex justify-between m-3 pt-4 text-3xl'>
                <div className={`${bgColorArray[0]} rounded-full p-5 ${bgIconArray[0]}`}>
                    <GrInProgress className=' ' />
                </div>
                <div className={`${bgColorArray[1]} rounded-full p-5 ${bgIconArray[1]}`}>
                    <GiCargoShip className=' ' />
                </div>
                <div className={`${bgColorArray[2]} rounded-full p-5 ${bgIconArray[2]}`}>
                    <FaVanShuttle className=' ' />
                </div>
                <div className={`${bgColorArray[3]} rounded-full p-5 ${bgIconArray[3]}`}>
                    <MdOutlineDone className=' ' />
                </div>

            </div>
        </div>

    )
}

export default ShippingTracker