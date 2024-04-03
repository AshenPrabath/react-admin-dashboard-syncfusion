import React from 'react';
import { AiOutlineAreaChart, AiOutlineBarChart, AiOutlineShoppingCart, AiOutlineStock } from 'react-icons/ai';
import { BiLogoVenmo, BiTargetLock } from 'react-icons/bi';
import { BsBank, BsBoxSeam, BsCash, BsChatLeft, BsCurrencyDollar, BsPaypal, BsShield, BsShop } from 'react-icons/bs';
import { FaCcAmex } from "react-icons/fa";
import { FiBarChart, FiCreditCard, FiPieChart, FiShoppingBag, FiShoppingCart, FiStar } from 'react-icons/fi';
import { GiRunningShoe } from "react-icons/gi";
import { GrLocation } from 'react-icons/gr';
import { HiOutlineRefresh } from 'react-icons/hi';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';
import product9 from './product9.jpg';

import Product1_1 from '../data/Products/Product1/Product1 (1).jpg';
import Product1_2 from '../data/Products/Product1/Product1 (2).jpg';
import Product1_3 from '../data/Products/Product1/Product1 (3).jpg';
import Product1_4 from '../data/Products/Product1/Product1 (4).jpg';
import Product1D_1 from '../data/Products/Product1/Product1D (1).jpg';
import Product1D_2 from '../data/Products/Product1/Product1D (2).jpg';

import Product2_1 from '../data/Products/Product2/Product2 (1).jpg';
import Product2_2 from '../data/Products/Product2/Product2 (2).jpg';
import Product2_3 from '../data/Products/Product2/Product2 (3).jpg';
import Product2_4 from '../data/Products/Product2/Product2 (4).jpg';
import Product2_5 from '../data/Products/Product2/Product2 (5).jpg';
import Product2D_1 from '../data/Products/Product2/Product2D (1).jpg';
import Product2D_2 from '../data/Products/Product2/Product2D (2).jpg';
import Product2D_3 from '../data/Products/Product2/Product2D (3).jpg';
import Product2D_4 from '../data/Products/Product2/Product2D (4).jpg';

import Product3_1 from '../data/Products/Product3/Product3 (1).jpg';
import Product3_2 from '../data/Products/Product3/Product3 (2).jpg';
import Product3_3 from '../data/Products/Product3/Product3 (3).jpg';
import Product3_4 from '../data/Products/Product3/Product3 (4).jpg';
import Product3_5 from '../data/Products/Product3/Product3 (5).jpg';
import Product3D_1 from '../data/Products/Product3/Product3D (1).jpg';

import Product4_1 from '../data/Products/Product4/Product4 (1).jpg';
import Product4_2 from '../data/Products/Product4/Product4 (2).jpg';
import Product4_3 from '../data/Products/Product4/Product4 (3).jpg';
import Product4_4 from '../data/Products/Product4/Product4 (4).jpg';
import Product4D_1 from '../data/Products/Product4/product4D (1).jpg';
import Product4D_2 from '../data/Products/Product4/product4D (2).jpg';
import Product4D_3 from '../data/Products/Product4/product4D (3).jpg';
import Product4D_4 from '../data/Products/Product4/product4D (4).jpg';

import Product5_1 from '../data/Products/Product5/Product5 (1).jpg';
import Product5_2 from '../data/Products/Product5/Product5 (2).jpg';
import Product5_3 from '../data/Products/Product5/Product5 (3).jpg';
import Product5D_1 from '../data/Products/Product5/Product5D (1).jpg';
import Product5D_2 from '../data/Products/Product5/Product5D (2).jpg';

import Product6_1 from '../data/Products/Product6/Product6 (1).jpg';
import Product6_2 from '../data/Products/Product6/Product6 (2).jpg';
import Product6_3 from '../data/Products/Product6/Product6 (3).jpg';
import Product6_4 from '../data/Products/Product6/Product6 (4).jpg';
import Product6D_1 from '../data/Products/Product6/Product6D (1).jpg';
import Product6D_2 from '../data/Products/Product6/Product6D (2).jpg';
import Product6D_3 from '../data/Products/Product6/Product6D (3).jpg';
import Product6D_4 from '../data/Products/Product6/Product6D (4).jpg';

import Product7_1 from '../data/Products/Product7/Product7 (1).jpg';
import Product7_2 from '../data/Products/Product7/Product7 (2).jpg';
import Product7_3 from '../data/Products/Product7/Product7 (3).jpg';
import Product7_4 from '../data/Products/Product7/Product7 (4).jpg';
import Product7D_1 from '../data/Products/Product7/Product7D (1).jpg';

import Product8_1 from '../data/Products/Product8/Product8 (1).jpg';
import Product8_2 from '../data/Products/Product8/Product8 (2).jpg';
import Product8_3 from '../data/Products/Product8/Product8 (3).jpg';
import Product8_4 from '../data/Products/Product8/Product8 (4).jpg';
import Product8_5 from '../data/Products/Product8/Product8 (5).jpg';
import Product8_6 from '../data/Products/Product8/Product8 (6).jpg';
import Product8D_1 from '../data/Products/Product8/Product8D (1).jpg';
import Product8D_2 from '../data/Products/Product8/Product8D (2).jpg';
import Product8D_3 from '../data/Products/Product8/Product8D (3).jpg';
import Product8D_4 from '../data/Products/Product8/Product8D (4).jpg';

import Product9_1 from '../data/Products/Product9/Product9 (1).jpg';
import Product9_2 from '../data/Products/Product9/Product9 (2).jpg';
import Product9_3 from '../data/Products/Product9/Product9 (3).jpg';
import Product9D_1 from '../data/Products/Product9/Product9D (1).jpg';

import Product10_1 from '../data/Products/Product10/Product10 (1).jpg';
import Product10_2 from '../data/Products/Product10/Product10 (2).jpg';
import Product10_3 from '../data/Products/Product10/Product10 (3).jpg';
import Product10_4 from '../data/Products/Product10/Product10 (4).jpg';
import Product10D_1 from '../data/Products/Product10/Product10D (1).jpg';
import Product10D_2 from '../data/Products/Product10/Product10D (2).jpg';
import Product10D_3 from '../data/Products/Product10/Product10D (3).jpg';
import Product10D_4 from '../data/Products/Product10/Product10D (4).jpg';
import Product10D_5 from '../data/Products/Product10/Product10D (5).jpg';
import Product10D_6 from '../data/Products/Product10/Product10D (6).jpg';


export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-14 w-14 md:ml-3 object-contain"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);
export const gridCustomer = (props) => (
  <div className='text-left'>
    <p className=''>{props.CustomerName}</p>
    <p className='font-light text-xs text-gray-500'>{props.CustomerEmail}</p>
  </div>
);
export const gridProductImage = (props) => (
  <div>
    <img
      className="rounded-xl h-14 w-14 md:ml-3 object-contain"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

// export const gridProductActions = (rowData, onEdit) => (
//   <div>
//     <button onClick={() => onEdit(rowData)}>
//       <MdOutlineEdit />
//     </button>
//     <button onClick={()=>{}}>
//     <MdOutlineDelete/>
//     </button>
//   </div>
// );


export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-0.5 px-3 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);
export const gridTrackingStatus = (props) => (
  <button
    type="button"
    style={{ background: props.statusBg }}
    className="text-white py-0.5 px-3 capitalize rounded-2xl text-md"
  >
    {props.status}
  </button>
);

export const kanbanGrid = [
  {
    headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true
  },

  {
    headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true
  },

  {
    headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false
  },

  {
    headerText: 'Done',
    keyField: 'Close',
    allowToggle: true
  },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Bar',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Bar',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Bar',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  {
    label: '1°C to 10°C',
    start: '1',
    end: '10',
    colors: colorMappingData[1]
  },

  {
    label: '11°C to 20°C',
    start: '11',
    end: '20',
    colors: colorMappingData[2]
  },

  {
    label: '21°C to 30°C',
    start: '21',
    end: '30',
    colors: colorMappingData[3]
  },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const
  LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  };

export const LinePrimaryYAxis = {
  labelFormat: '$ {value}K',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center'
  },
  {
    field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus
  },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center'
  },
  {
    field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center'
  },

  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const employeesGrid = [
  {
    headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center'
  },
  {
    field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  {
    field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  {
    headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry
  },

  {
    field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center'
  },
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center'
  },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'products',
        icon: <GiRunningShoe />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
      {
        name: 'shop',
        icon: <BsShop />,
      },
      {
        name: 'tracking',
        icon: <BiTargetLock />,
      },


    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'revenue',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
    ],
  },
];

export const cartData = [
  {
    image:
      product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
    items: 1
  },
  {
    image:
      product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
    items: 3
  },
  {
    image:
      product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$200',
    items: 2
  },
  {
    image:
      product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$200',
    items: 2
  }

];

export const chatData = [
  {
    image: avatar,
    person: "John Doe",
    message: "Hey there! How's it going? I hope you're doing well. Just wanted to catch up and see how things are.",
    time: "10:00 AM"
  },
  {
    image: avatar2,
    person: "Jane Smith",
    message: "Hi! How are you?",
    time: "10:05 AM"
  },
  {
    image: avatar3,
    person: "Mike Johnson",
    message: "I'm good, thanks! How about you? I've been quite busy lately with work.",
    time: "10:10 AM"
  },
  {
    image: avatar4,
    person: "Emily Williams",
    message: "Great! Let's catch up soon. I have some exciting news to share!",
    time: "10:15 AM"
  }
]

export const notificationData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
]

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: '-$560',
    title: 'Top Sales',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '-$560',
    title: 'Best Seller',
    desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const productsPerformance = [
  {
    image:
      product5,
    title: 'Is it good butterscotch ice-cream?',
    desc: 'Ice-Cream, Milk, Powder',
    rating: 'Good',
    itemSold: '65%',
    earningAmount: '$546,000',
  },
  {
    image:
      product6,
    title: 'Supreme fresh tomato available',
    desc: 'Market, Mall',
    rating: 'Excellent',
    itemSold: '98%',
    earningAmount: '$780,000',
  },
  {
    image:
      product7,
    title: 'Red color candy from Gucci',
    desc: 'Chocolate, Yummy',
    rating: 'Average',
    itemSold: '46%',
    earningAmount: '$457,000',
  },
  {
    image:
      product4,
    title: 'Stylish night lamp for night',
    desc: 'Electric, Wire, Current',
    rating: 'Poor',
    itemSold: '23%',
    earningAmount: '$123,000',
  },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image:
        avatar2,
    },
    {
      image:
        avatar3,
    },
    {
      image:
        avatar2,
    },
    {
      image:
        avatar4,
    },
    {
      image:
        avatar,
    },
  ],
};

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];
export const userProfileInfoData = {
  image: avatar4,
  userName: "James Smith",
  designation: "Administrator",
  email: 'info.jamessmith.com',
}

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: '#EBFAF2',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: '#FEC90F',
  },
];

export const trackingGrid = [
  {
    field: 'trackingID',
    headerText: 'Tracking Number',
    width: '130',
    textAlign: 'left',
    editType: 'numericedit',
  },
  {
    field: 'orderID',
    headerText: 'Order ID',
    textAlign: 'Center',
    width: '100',
  },
  {
    field: 'customerName',
    headerText: 'Customer Name',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'customerLocation',
    headerText: 'Location',
    width: '100',
    textAlign: 'Center',
  },
  {
    field: 'status',
    headerText: 'Status',
    template: gridTrackingStatus,
    width: '100',
    textAlign: 'Center',
    editType: 'numericedit',
  },
  {
    field: 'shippingVia',
    headerText: 'Shipping Via',
    width: '120',
    textAlign: 'Center',
  },
]
export const productsGrid = [
  {
    field: 'ProductID',
    headerText: 'ID',
    width: '70',
    textAlign: 'left',
    editType: 'numericedit',
  },
  {
    headerText: 'Image',
    template: gridProductImage,
    textAlign: 'Center',
    width: '100',
  },
  {
    field: 'ProductName',
    headerText: 'Product Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'ProductCategory',
    headerText: 'Category',
    width: '130',
    textAlign: 'Center',
  },
  {
    field: 'Price',
    headerText: 'Price',
    format: 'C2',
    width: '100',
    textAlign: 'Center',
    editType: 'numericedit',
  },
  {
    field: 'ProductStock',
    headerText: 'Stock',
    width: '80',
    textAlign: 'Center',
    editType: 'numericedit',
  },
  {
    field: 'ItemsSold',
    headerText: 'Sold',
    width: '80',
    textAlign: 'Center',
  },

]

export const ordersGrid = [
  {
    field: 'OrderID',
    headerText: 'ID',
    width: '70',
    textAlign: 'left',
  },
  {
    headerText: 'Customer',
    template: gridCustomer,
    width: '130',
    textAlign: 'left',
  },
  {
    field: 'ItemsQuantity',
    headerText: 'Items',
    width: '70',
    textAlign: 'left',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'left',
    width: '100',
  },
  {
    field: 'PayMethod',
    headerText: 'Pay Method',
    width: '100',
    textAlign: 'left',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'Country',
    headerText: 'Location',
    width: '100',
    textAlign: 'Center',
  },
];
export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
];

export const productsInfo = [
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: Nike Air Zoom Pegasus 38 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $129.99<br />
          <strong>Brand:</strong> Nike<br />
          <strong>Model:</strong> Air Zoom Pegasus 38<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/White, Blue/Orange, Gray/Pink<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Engineered Mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: Nike React Foam</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Responsive Air Zoom cushioning in the forefoot</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Wider forefoot area provides a roomy fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midfoot webbing delivers support</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Nike React foam offers lightweight cushioning and durability</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Durable rubber outsole provides traction on various surfaces</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Breathable mesh upper keeps feet cool and comfortable</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Cushioned collar for ankle support</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure for a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Nike Air Zoom Pegasus 38 Running Shoes are designed to provide comfort and performance for runners of all levels. Featuring responsive Air Zoom cushioning in the forefoot, these shoes offer a springy feel with every stride. The wider forefoot area ensures a roomy fit, while the midfoot webbing provides support during runs. Constructed with Nike React foam, these shoes offer lightweight cushioning and durability for long-lasting wear. The breathable mesh upper keeps feet cool, while the durable rubber outsole provides traction on various surfaces. Whether you&#39;re hitting the pavement or the trails, the Nike Air Zoom Pegasus 38 Running Shoes are ready to take on your next run with style and comfort.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on orders over $50</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>30-day return policy for unused products</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: NZP38-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 887231896532</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Nike Elite Lightweight No-Show Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Nike Running Hat</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Nike Lightweight Running Jacket</span></p>
    </div>

  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: Adidas Ultraboost 22 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $149.99<br />
          <strong>Brand:</strong> Adidas<br />
          <strong>Model:</strong> Ultraboost 22<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Grey, White/Silver, Blue/Yellow<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Primeknit textile</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: Boost cushioning technology</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Continental™ Rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Responsive Boost cushioning provides energy return</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Adidas Primeknit upper for adaptive support and ultralight comfort</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Stretchweb outsole flexes naturally for an energized ride</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Torsion System for midfoot integrity</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Sock-like construction hugs the foot</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace closure for a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Adidas Ultraboost 22 Running Shoes are engineered to deliver exceptional comfort and performance for runners. Featuring Adidas' renowned Boost cushioning technology, these shoes provide unparalleled energy return with every stride. The Primeknit textile upper offers adaptive support and lightweight comfort, while the Continental™ Rubber outsole ensures superior traction on various surfaces. Whether you're hitting the road or the track, the Adidas Ultraboost 22 Running Shoes will elevate your running experience to new heights.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on orders over $75</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>45-day return policy for unworn products</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: ADUB22-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 889773542109</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Adidas Ultraboost Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Adidas Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Adidas Lightweight Running Jacket</span></p>
    </div>

  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: Asics Gel-Nimbus 25 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $159.99<br />
          <strong>Brand:</strong> Asics<br />
          <strong>Model:</strong> Gel-Nimbus 25<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Silver, Blue/Purple, White/Grey<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Engineered Mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: Asics GEL Cushioning Technology</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: AHAR (Asics High Abrasion Rubber)</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Responsive GEL cushioning system for shock absorption</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Breathable engineered mesh upper for enhanced ventilation</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Trusstic System technology reduces the weight of the sole unit while retaining structural integrity</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Ortholite X-40 Sockliner provides excellent moisture management and a high-level of breathability</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>FlyteFoam Propel Technology in the midsole for a bouncy feel</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace closure with discrete eyelets for a snug and personalized fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Asics Gel-Nimbus 25 Running Shoes are designed to provide maximum comfort and cushioning for long-distance runners. Featuring Asics' GEL cushioning technology, these shoes absorb shock during impact and toe-off phases, allowing for a smooth transition throughout your stride. The engineered mesh upper offers excellent breathability and support, while the AHAR outsole provides durability and traction on various surfaces. With features like the Trusstic System technology and FlyteFoam Propel Technology, these shoes offer a lightweight and responsive ride, making them ideal for runners seeking a plush and energized experience.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on all orders</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to most countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>60-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 90 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: ASIGN25-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192562930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in China</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Asics Lightweight Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Asics Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Asics Lightweight Running Jacket</span></p>
    </div>
  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: New Balance Fresh Foam 1080v11 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $139.99<br />
          <strong>Brand:</strong> New Balance<br />
          <strong>Model:</strong> Fresh Foam 1080v11<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/White, Grey/Blue, Red/Black<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Hypoknit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: Fresh Foam X cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Blown rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Fresh Foam X midsole cushioning for a plush and responsive ride</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Hypoknit upper for a comfortable and supportive fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Ultra Heel design hugs the back of the foot for a snug, supportive fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Breathable construction keeps feet cool and dry</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Blown rubber outsole for durable traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace closure for a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The New Balance Fresh Foam 1080v11 Running Shoes are engineered to provide exceptional comfort and performance for runners. Featuring Fresh Foam X cushioning, these shoes offer a plush and responsive ride mile after mile. The Hypoknit upper provides a comfortable and supportive fit, while the Ultra Heel design ensures a snug and secure feel around the heel. With a breathable construction and durable blown rubber outsole, these shoes are ready to take on any distance with confidence and style.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on all orders</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to most countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>90-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 120 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: NBFF1080v11-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in USA</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>New Balance Fresh Foam Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>New Balance Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>New Balance Lightweight Running Jacket</span></p>
    </div>
  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: Brooks Ghost 14 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $129.99<br />
          <strong>Brand:</strong> Brooks<br />
          <strong>Model:</strong> Ghost 14<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/White, Blue/Green, Grey/Orange<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Engineered Air Mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: DNA LOFT cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Blown rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>DNA LOFT cushioning provides a soft and luxurious feeling underfoot</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Engineered Air Mesh upper offers a breathable and comfortable fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Segmented Crash Pad allows for smooth heel-to-toe transitions</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>3D Fit Print technology delivers a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Omega Flex Grooves enhance flexibility for a natural stride</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure for a personalized fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Brooks Ghost 14 Running Shoes are designed to provide runners with a plush and smooth ride. With DNA LOFT cushioning, these shoes offer a soft and luxurious feel underfoot, making them ideal for long-distance runs or everyday training. The engineered Air Mesh upper ensures breathability and comfort, while the Segmented Crash Pad allows for smooth heel-to-toe transitions. 3D Fit Print technology delivers a secure fit, and Omega Flex Grooves enhance flexibility for a natural stride. Whether you're hitting the roads or the trails, the Brooks Ghost 14 will provide the comfort and support you need to reach your goals.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on all orders</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>60-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 90 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: BKG14-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Ghost Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Lightweight Running Jacket</span></p>
    </div>

  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: Saucony Kinvara 12 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $119.99<br />
          <strong>Brand:</strong> Saucony<br />
          <strong>Model:</strong> Kinvara 12<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Grey, Blue/White, Green/Yellow<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: FORMFIT engineered mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: PWRRUN cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: XT-900 rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>FORMFIT technology adapts to your foot for a personalized fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>PWRRUN cushioning provides a responsive and cushioned ride</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Flexfilm overlays offer lightweight support</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>XT-900 rubber outsole for durability and traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Breathable and lightweight FORMFIT engineered mesh upper</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure for a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Saucony Kinvara 12 Running Shoes are designed to provide a lightweight and responsive ride. Featuring FORMFIT technology, these shoes adapt to your foot shape for a personalized fit. The PWRRUN cushioning offers a responsive and cushioned feel underfoot, while the Flexfilm overlays provide lightweight support. With an XT-900 rubber outsole, these shoes offer durability and traction on various surfaces. The breathable and lightweight FORMFIT engineered mesh upper ensures comfort and ventilation during your runs. Lace-up closure allows for a secure fit, making the Kinvara 12 ideal for runners seeking a versatile and comfortable shoe for their training sessions.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on all orders</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to most countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>90-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 120 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: SK12-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Saucony Kinvara Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Saucony Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Saucony Lightweight Running Jacket</span></p>
    </div>
  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: Asics Gel-Nimbus 24 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $159.99<br />
          <strong>Brand:</strong> Asics<br />
          <strong>Model:</strong> Gel-Nimbus 24<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Silver, White/Blue, Red/Black<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Mesh and synthetic leather</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: FlyteFoam Propel and FlyteFoam Lyte cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: AHAR (Asics High Abrasion Rubber)</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Gel cushioning technology for shock absorption</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Adaptive Mesh upper for a supportive and breathable fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Impact Guidance System enhances the foot's natural gait</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>FlyteFoam Propel and FlyteFoam Lyte cushioning offer lightweight and responsive cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>AHAR outsole provides durability and traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Ortholite X-40 sockliner for moisture management and breathability</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Asics Gel-Nimbus 24 Running Shoes are designed to provide maximum comfort and support for neutral runners. Featuring Gel cushioning technology in the heel and forefoot, these shoes offer exceptional shock absorption to reduce impact during each stride. The Adaptive Mesh upper provides a supportive and breathable fit, while the Impact Guidance System enhances the foot's natural gait for a smoother transition from heel strike to toe-off. With FlyteFoam Propel and FlyteFoam Lyte cushioning, these shoes offer lightweight and responsive cushioning for a comfortable ride mile after mile. The AHAR outsole ensures durability and traction on various surfaces, while the Ortholite X-40 sockliner provides moisture management and breathability. Whether you're training for a marathon or going for a leisurely jog, the Gel-Nimbus 24 will keep you comfortable and supported every step of the way.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on orders over $100</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>60-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 90 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: ASGN24-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Asics Gel-Nimbus Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Asics Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Asics Lightweight Running Jacket</span></p>
    </div>
  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: New Balance Fresh Foam 1080v11 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $149.99<br />
          <strong>Brand:</strong> New Balance<br />
          <strong>Model:</strong> Fresh Foam 1080v11<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/White, Blue/Green, Grey/Yellow<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Hypoknit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: Fresh Foam X</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Blown rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Hypoknit upper provides strategic support and stretch</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Fresh Foam X midsole cushioning delivers a plush and responsive ride</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Ultra Heel design hugs the back of the foot for a snug, supportive fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Blown rubber outsole provides durable traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Bootie construction for a comfortable and secure fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure for a customizable fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The New Balance Fresh Foam 1080v11 Running Shoes offer premium cushioning and support for runners seeking a smooth and comfortable ride. The Hypoknit upper provides strategic support and stretch where you need it most, while the Fresh Foam X midsole cushioning delivers a plush and responsive feel underfoot. The Ultra Heel design hugs the back of the foot for a snug and supportive fit, and the blown rubber outsole ensures durable traction on various surfaces. With bootie construction for a comfortable and secure fit, as well as a lace-up closure for customizable adjustability, these shoes are ready to take on any run with you.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on orders over $75</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>90-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 120 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: NBFF1080v11-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>New Balance Fresh Foam Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>New Balance Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>New Balance Lightweight Running Jacket</span></p>
    </div>
  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: Brooks Ghost 14 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $129.99<br />
          <strong>Brand:</strong> Brooks<br />
          <strong>Model:</strong> Ghost 14<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Red, Blue/Silver, Grey/White<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Engineered Air Mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: DNA Loft cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Blown rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Engineered Air Mesh upper offers lightweight breathability</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>DNA Loft cushioning provides softness and durability</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Segmented Crash Pad accommodates any foot landing for smooth transitions</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Blown rubber outsole for reliable traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>3D Fit Print applies strategic stretch and structure for an impeccable fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure ensures a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Brooks Ghost 14 Running Shoes are engineered to provide a smooth and comfortable ride mile after mile. Featuring an Engineered Air Mesh upper, these shoes offer lightweight breathability to keep your feet cool and comfortable during your runs. The DNA Loft cushioning in the midsole provides softness and durability, while the segmented Crash Pad ensures smooth transitions from heel to toe. The blown rubber outsole delivers reliable traction on various surfaces, and the 3D Fit Print technology applies strategic stretch and structure for an impeccable fit. With a lace-up closure for a secure fit, the Brooks Ghost 14 is ready to take on any distance with you.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on orders over $100</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>60-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 90 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: BRKG14-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Ghost Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Lightweight Running Jacket</span></p>
    </div>

  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: Brooks Ghost 14 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $129.99<br />
          <strong>Brand:</strong> Brooks<br />
          <strong>Model:</strong> Ghost 14<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Red, Blue/Silver, Grey/White<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Engineered Air Mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: DNA Loft cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Blown rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Engineered Air Mesh upper offers lightweight breathability</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>DNA Loft cushioning provides softness and durability</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Segmented Crash Pad accommodates any foot landing for smooth transitions</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Blown rubber outsole for reliable traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>3D Fit Print applies strategic stretch and structure for an impeccable fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure ensures a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Brooks Ghost 14 Running Shoes are engineered to provide a smooth and comfortable ride mile after mile. Featuring an Engineered Air Mesh upper, these shoes offer lightweight breathability to keep your feet cool and comfortable during your runs. The DNA Loft cushioning in the midsole provides softness and durability, while the segmented Crash Pad ensures smooth transitions from heel to toe. The blown rubber outsole delivers reliable traction on various surfaces, and the 3D Fit Print technology applies strategic stretch and structure for an impeccable fit. With a lace-up closure for a secure fit, the Brooks Ghost 14 is ready to take on any distance with you.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on orders over $100</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>60-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 90 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: BRKG14-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Ghost Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Lightweight Running Jacket</span></p>
    </div>
  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: ASICS GEL-Nimbus 24 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $159.99<br />
          <strong>Brand:</strong> ASICS<br />
          <strong>Model:</strong> GEL-Nimbus 24<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Yellow, Blue/Purple, White/Red<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Engineered Mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: FlyteFoam cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: AHARPLUS rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Engineered Mesh upper offers breathability and support</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>FlyteFoam cushioning provides lightweight and responsive cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Rearfoot and forefoot GEL technology cushioning attenuates shock during impact and toe-off phases</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>AHARPLUS rubber outsole enhances durability and traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Trusstic System technology reduces the weight of the sole unit while retaining the structural integrity of the shoe</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>OrthoLite X-55 sockliner provides additional cushioning and moisture management</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The ASICS GEL-Nimbus 24 Running Shoes are designed to offer maximum comfort and support for long-distance runners. The Engineered Mesh upper provides breathability and support, while the FlyteFoam cushioning delivers lightweight and responsive cushioning mile after mile. The rearfoot and forefoot GEL technology cushioning attenuates shock during the impact and toe-off phases, enhancing comfort and reducing the risk of injury. The AHARPLUS rubber outsole enhances durability and traction, while the Trusstic System technology reduces the weight of the sole unit without compromising structural integrity. With an OrthoLite X-55 sockliner for additional cushioning and moisture management, these shoes are ideal for runners looking for reliable performance on every run.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on orders over $100</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>60-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 90 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: ASIG24-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>ASICS Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>ASICS Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>ASICS Lightweight Running Jacket</span></p>
    </div>



  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: New Balance Fresh Foam 1080v11 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $149.99<br />
          <strong>Brand:</strong> New Balance<br />
          <strong>Model:</strong> Fresh Foam 1080v11<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Yellow, Grey/Blue, White/Black<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Hypoknit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: Fresh Foam X cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Blown rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Hypoknit upper offers strategic zones of stretch and support</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Fresh Foam X cushioning provides ultra-plush and smooth ride</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Blown rubber outsole for reliable traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Ultra Heel design hugs the back of the foot for a snug, supportive fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure for a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The New Balance Fresh Foam 1080v11 Running Shoes deliver luxurious comfort and exceptional support for runners seeking a premium running experience. The Hypoknit upper combines strategic zones of stretch and support to provide a dynamic fit, while the Fresh Foam X cushioning offers an ultra-plush and smooth ride mile after mile. The blown rubber outsole ensures reliable traction, while the Ultra Heel design hugs the back of the foot for a snug, supportive fit. With a lace-up closure for a secure fit, these shoes are perfect for long-distance runs or everyday training sessions.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on orders over $75</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>45-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 60 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: NBFRESH1080-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>New Balance Performance Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>New Balance Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>New Balance Lightweight Running Jacket</span></p>
    </div>

  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}>
        <span style={{ fontSize: '26px' }}><strong>Product Title: Brooks Ghost 14 Running Shoes</strong></span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $129.99<br />
          <strong>Brand:</strong> Brooks<br />
          <strong>Model:</strong> Ghost 14<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Red, Blue/Silver, Grey/White<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Engineered Air Mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: DNA Loft cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Blown rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Engineered Air Mesh upper offers lightweight breathability</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>DNA Loft cushioning provides softness and durability</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Segmented Crash Pad accommodates any foot landing for smooth transitions</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Blown rubber outsole for reliable traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>3D Fit Print applies strategic stretch and structure for an impeccable fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure ensures a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Brooks Ghost 14 Running Shoes are engineered to provide a smooth and comfortable ride mile after mile. Featuring an Engineered Air Mesh upper, these shoes offer lightweight breathability to keep your feet cool and comfortable during your runs. The DNA Loft cushioning in the midsole provides softness and durability, while the segmented Crash Pad ensures smooth transitions from heel to toe. The blown rubber outsole delivers reliable traction on various surfaces, and the 3D Fit Print technology applies strategic stretch and structure for an impeccable fit. With a lace-up closure for a secure fit, the Brooks Ghost 14 is ready to take on any distance with you.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on orders over $100</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>60-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 90 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: BRKG14-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Ghost Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Lightweight Running Jacket</span></p>
    </div>

  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '26px' }}><strong>Product Title: Saucony Kinvara 12 Running Shoes</strong></span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $119.99<br />
          <strong>Brand:</strong> Saucony<br />
          <strong>Model:</strong> Kinvara 12<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/Grey, Blue/White, Green/Yellow<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: FORMFIT engineered mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: PWRRUN cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: XT-900 rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>FORMFIT technology adapts to your foot for a personalized fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>PWRRUN cushioning provides a responsive and cushioned ride</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Flexfilm overlays offer lightweight support</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>XT-900 rubber outsole for durability and traction</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Breathable and lightweight FORMFIT engineered mesh upper</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure for a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Saucony Kinvara 12 Running Shoes are designed to provide a lightweight and responsive ride. Featuring FORMFIT technology, these shoes adapt to your foot shape for a personalized fit. The PWRRUN cushioning offers a responsive and cushioned feel underfoot, while the Flexfilm overlays provide lightweight support. With an XT-900 rubber outsole, these shoes offer durability and traction on various surfaces. The breathable and lightweight FORMFIT engineered mesh upper ensures comfort and ventilation during your runs. Lace-up closure allows for a secure fit, making the Kinvara 12 ideal for runners seeking a versatile and comfortable shoe for their training sessions.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on all orders</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to most countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>90-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 120 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: SK12-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Saucony Kinvara Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Saucony Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Saucony Lightweight Running Jacket</span></p>
    </div>

  ],
  [
    <div>
      <p>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '26px' }}><strong>Product Title: Brooks Ghost 14 Running Shoes</strong></span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '16px' }}><strong>Price:</strong> $129.99<br />
          <strong>Brand:</strong> Brooks<br />
          <strong>Model:</strong> Ghost 14<br />
          <strong>Category:</strong> Running Shoes<br />
          <strong>Color Options:</strong> Black/White, Blue/Green, Grey/Orange<br />
          <strong>Sizes Available:</strong> 6, 7, 8, 9, 10, 11, 12<br />
          <strong>Gender:</strong> Unisex</span>
      </p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Material:</strong></span>
      </p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Upper: Engineered Air Mesh</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Midsole: DNA LOFT cushioning</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Outsole: Blown rubber</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Features:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>DNA LOFT cushioning provides a soft and luxurious feeling underfoot</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Engineered Air Mesh upper offers a breathable and comfortable fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Segmented Crash Pad allows for smooth heel-to-toe transitions</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>3D Fit Print technology delivers a secure fit</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Omega Flex Grooves enhance flexibility for a natural stride</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Lace-up closure for a personalized fit</span></p>
      <p style={{ marginLeft: '80px' }}>&nbsp;</p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Product Description:</strong></span><br />
        <span style={{ fontSize: '16px' }}>The Brooks Ghost 14 Running Shoes are designed to provide runners with a plush and smooth ride. With DNA LOFT cushioning, these shoes offer a soft and luxurious feel underfoot, making them ideal for long-distance runs or everyday training. The engineered Air Mesh upper ensures breathability and comfort, while the Segmented Crash Pad allows for smooth heel-to-toe transitions. 3D Fit Print technology delivers a secure fit, and Omega Flex Grooves enhance flexibility for a natural stride. Whether you're hitting the roads or the trails, the Brooks Ghost 14 will provide the comfort and support you need to reach your goals.</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Shipping Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free standard shipping on all orders</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Expedited shipping options available</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International shipping available to select countries</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '20px' }}><strong>Return Policy:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>60-day satisfaction guarantee</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Free returns within the U.S.</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>International returns accepted within 90 days, buyer pays return shipping</span></p>
      <p style={{ marginLeft: '40px' }}><br />
        <span style={{ fontSize: '20px' }}><strong>Additional Information:</strong></span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Product Code: BKG14-001</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>UPC: 192662930483</span></p>
      <p style={{ marginLeft: '80px' }}><span style={{ fontSize: '16px' }}>Manufactured in Vietnam</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}><strong>Disclaimer:</strong> Actual product colors may vary slightly from images due to monitor settings and lighting conditions.<br />
        <strong>Related Products:</strong></span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Ghost Running Socks</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Running Cap</span></p>
      <p style={{ marginLeft: '40px' }}><span style={{ fontSize: '16px' }}>Brooks Lightweight Running Jacket</span></p>
    </div>
  ]
];

export const productImages = [
  [
    {
      productImages: [Product1_1, Product1_2, Product1_3, Product1_4],
      productDetailImages: [Product1D_1, Product1D_2]
    }
  ],
  [
    {
      productImages: [Product2_1, Product2_2, Product2_3, Product2_4, Product2_5],
      productDetailImages: [Product2D_1, Product2D_2, Product2D_3, Product2D_4]
    }
  ],
  [
    {
      productImages: [Product3_1, Product3_2, Product3_3, Product3_4, Product2_5],
      productDetailImages: [Product3D_1]
    }
  ],
  [
    {
      productImages: [Product4_1, Product4_2, Product4_3, Product4_4],
      productDetailImages: [Product4D_1, Product4D_2, Product4D_3, Product4D_4]
    }
  ],
  [
    {
      productImages: [Product5_1, Product5_2, Product5_3],
      productDetailImages: [Product5D_1, Product5D_2]
    }
  ],
  [
    {
      productImages: [Product6_1, Product6_2, Product6_3, Product6_4],
      productDetailImages: [Product6D_1, Product6D_2, Product6D_3, Product6D_4]
    }
  ],
  [
    {
      productImages: [Product7_1, Product7_2, Product7_3, Product7_4],
      productDetailImages: [Product7D_1]
    }
  ],
  [
    {
      productImages: [Product8_1, Product8_2, Product8_3],
      productDetailImages: [Product8D_1, Product8D_2, Product8D_3, Product8D_4]
    }
  ],
  [
    {
      productImages: [Product9_1, Product9_2, Product9_3],
      productDetailImages: [Product9D_1]
    }
  ],
  [
    {
      productImages: [Product10_1, Product10_2, Product10_3, Product10_4],
      productDetailImages: [Product10D_1, Product10D_2, Product10D_3, Product10D_4, Product10D_5, Product10D_6]
    }
  ],
  [
    {
      productImages: [Product6_1, Product6_2, Product6_3, Product6_4],
      productDetailImages: [Product6D_1, Product6D_2, Product6D_3, Product6D_4]
    }
  ],
  [
    {
      productImages: [Product4_1, Product4_2, Product4_3, Product4_4, Product3_5],
      productDetailImages: [Product4D_1, Product4D_2, Product4D_3, Product4D_4]
    }
  ],
  [
    {
      productImages: [Product10_1, Product10_2, Product10_3, Product10_4],
      productDetailImages: [Product10D_1, Product10D_2, Product10D_3, Product10D_4, Product10D_5, Product10D_6]
    }
  ],
  [
    {
      productImages: [Product5_1, Product5_2, Product5_3],
      productDetailImages: [Product5D_1, Product5D_2]
    }
  ],
  [
    {
      productImages: [Product2_1, Product2_2, Product2_3, Product2_4, Product2_5],
      productDetailImages: [Product2D_1, Product2D_2, Product2D_3, Product2D_4]
    }
  ],
];

export const reviewImages = [
  [
    Product1_1, Product1_2, Product1_3, Product1_4
  ],
  [
    [Product2_1, Product2_2, Product2_3, Product2_4, Product2_5],
  ],
  [

  ],
  [
    Product4_1, Product4_2, Product4_3, Product4_4
  ],
  [

  ],
  [
    Product5_1, Product5_2, Product5_3
  ],
  [
    Product8_1, Product8_2, Product8_3, Product8_4, Product8_5, Product8_6
  ],
  [
    Product9_1, Product9_2, Product9_3
  ],
  [
    Product6_1, Product6_2, Product6_3, Product6_4
  ],
  [
    Product3_5,

  ],
  [
    Product8_1, Product8_2, Product8_3, Product8_4
  ],
  [
    Product6_1, Product6_2, Product6_3, Product6_4
  ],
  [
    Product3_3, Product3_4, Product2_5
  ],
  [
    Product6_2, Product6_3
  ],
  [

  ],
];
export const productReviews = [
  [
    {
      username: 'Sophie Thompson',
      images: [Product1_1, Product1_2, Product1_3, Product1_4],
      rating: 5,
      review: 'Absolutely love these shoes! They provide excellent support and cushioning, making them perfect for long runs. Plus, they look stylish and have held up well over time. Highly recommend!'
    },
    {
      username: 'Benjamin Wilson',
      images: [Product3_3, Product3_4, Product2_5],
      rating: 4,
      review: 'Great shoes for everyday wear. They offer a comfortable fit and adequate support for various activities. The design is sleek, and I\'ve received compliments on them. Overall, satisfied with my purchase.'
    },
    {
      username: 'Emma Johnson',
      images: [],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, a solid choice.'
    },
    {
      username: 'William Brown',
      images: [Product8_1, Product8_2, Product8_3, Product8_4],
      rating: 5,
      review: 'Excellent performance! These shoes offer exceptional comfort and support for my workouts. The cushioning is just right, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Isabella Garcia',
      images: [Product1_1, Product1_2, Product1_3, Product1_4],
      rating: 4,
      review: 'Comfortable fit, stylish design. These shoes provide a comfortable fit and look great with any outfit. The support is decent, making them suitable for various activities. Overall, satisfied.'
    },
    {
      username: 'James Smith',
      images: [],
      rating: 5,
      review: 'Perfect for long-distance running! These shoes offer excellent cushioning and support, making them perfect for my training sessions. Plus, they look sleek and have held up well. Couldn\'t be happier!'
    },
    {
      username: 'Sophia Martinez',
      images: [Product8_1, Product8_2, Product8_3, Product8_4, Product8_5, Product8_6],
      rating: 4,
      review: 'Good overall performance. These shoes offer decent comfort and support for my workouts. The design is modern, and they\'ve held up well over time. Overall, satisfied.'
    },
    {
      username: 'Alexander Rodriguez',
      images: [Product3_5],
      rating: 5,
      review: 'Exceptional quality! These shoes offer unparalleled comfort and support for long walks and runs. The build quality is excellent, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Ava Davis',
      images: [],
      rating: 4,
      review: 'Solid choice for everyday wear. These shoes provide a comfortable fit and adequate support for daily activities. The cushioning is decent, and they\'ve held up well with regular use. Satisfied.'
    },
    {
      username: 'Daniel Wilson',
      images: [Product3_3, Product3_4, Product2_5],
      rating: 5,
      review: 'Amazing shoes! They offer exceptional comfort and support for my runs. The cushioning is just right, and they look stylish too. Highly recommend!'
    }
  ],
  [
    {
      username: 'Olivia Taylor',
      images: [Product6_1, Product6_2, Product6_3, Product6_4],
      rating: 5,
      review: 'Fantastic shoes, highly recommended! They provide excellent support and cushioning for long runs. Plus, they look sleek and have held up well over time. Couldn\'t be happier with my purchase!'
    },
    {
      username: 'Ethan Martinez',
      images: [Product8_1, Product8_2, Product8_3, Product8_4],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, satisfied.'
    },
    {
      username: 'Sophia Rodriguez',
      images: [],
      rating: 4,
      review: 'Comfortable fit, stylish design. These shoes provide a comfortable fit and look great with any outfit. The support is decent, making them suitable for various activities. Overall, satisfied.'
    },
    {
      username: 'Michael Garcia',
      images: [],
      rating: 5,
      review: 'Perfect for long-distance running! These shoes offer excellent cushioning and support, making them perfect for my training sessions. Plus, they look sleek and have held up well. Couldn\'t be happier!'
    },
    {
      username: 'Emma Smith',
      images: [],
      rating: 4,
      review: 'Good overall performance. These shoes offer decent comfort and support for my workouts. The design is modern, and they\'ve held up well over time. Overall, satisfied.'
    },
    {
      username: 'Daniel Brown',
      images: [Product8_1, Product8_2, Product8_3, Product8_4, Product8_5, Product8_6],
      rating: 5,
      review: 'Exceptional quality! These shoes offer unparalleled comfort and support for long walks and runs. The build quality is excellent, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Ava Wilson',
      images: [],
      rating: 4,
      review: 'Solid choice for everyday wear. These shoes provide a comfortable fit and adequate support for daily activities. The cushioning is decent, and they\'ve held up well with regular use. Satisfied.'
    },
    {
      username: 'Sophie Taylor',
      images: [],
      rating: 5,
      review: 'Amazing shoes! They offer exceptional comfort and support for my runs. The cushioning is just right, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Benjamin Martinez',
      images: [],
      rating: 5,
      review: 'Fantastic shoes, highly recommended! They provide excellent support and cushioning for long runs. Plus, they look sleek and have held up well over time. Couldn\'t be happier with my purchase!'
    },
    {
      username: 'Emma Garcia',
      images: [Product6_3],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, satisfied.'
    }
  ],
  [
    {
      username: 'Nathan Moore',
      images: [product2, product6],
      rating: 5,
      review: 'These shoes are absolutely amazing! They provide incredible support and cushioning, making every run feel effortless. Plus, they look stylish and have quickly become my go-to pair.'
    },
    {
      username: 'Sophia Johnson',
      images: [product3, product5, product8],
      rating: 4,
      review: 'I\'m quite pleased with these shoes. They offer good comfort and support, although the cushioning could be a bit better. Overall, a solid choice for daily wear.'
    },
    {
      username: 'Ethan Wilson',
      images: [product1, product4],
      rating: 4,
      review: 'These shoes exceeded my expectations. They provide excellent stability and support, which has helped improve my overall performance. I would highly recommend them to anyone!'
    },
    {
      username: 'Ava Martinez',
      images: [],
      rating: 5,
      review: 'I absolutely love these shoes! They are incredibly comfortable and provide excellent support for long runs. Plus, they look fantastic!'
    },
    {
      username: 'Isabella Brown',
      images: [product7],
      rating: 4,
      review: 'Overall, I\'m quite satisfied with these shoes. They offer decent comfort and support for various activities. The design is also quite stylish.'
    }
  ],
  [
    {
      username: 'Daniel Thompson',
      images: [product1, product5],
      rating: 5,
      review: 'These shoes are simply fantastic! They provide exceptional comfort and support for my workouts. I\'ve noticed a significant improvement in my performance since I started wearing them.'
    },
    {
      username: 'Olivia Davis',
      images: [product3, product7],
      rating: 4,
      review: 'I\'m quite impressed with these shoes. They offer good cushioning and support, although they could be a bit more breathable. Overall, a solid choice for running.'
    },
    {
      username: 'William Clark',
      images: [product2, product4],
      rating: 5,
      review: 'These shoes are amazing! They provide excellent stability and support, which has helped reduce fatigue during long runs. Plus, they look sleek and stylish.'
    },
    {
      username: 'Emma Rodriguez',
      images: [product6],
      rating: 4,
      review: 'Overall, I\'m quite satisfied with these shoes. They offer good comfort and support for daily wear. The cushioning is adequate, and they look great!'
    },
    {
      username: 'Liam Garcia',
      images: [],
      rating: 5,
      review: 'I absolutely love these shoes! They are incredibly comfortable and provide excellent support for my workouts. Plus, they look fantastic!'
    }
  ],
  [
    {
      username: 'Sophie Thompson',
      images: [product6, product8, product3],
      rating: 5,
      review: 'Absolutely love these shoes! They provide excellent support and cushioning, making them perfect for long runs. Plus, they look stylish and have held up well over time. Highly recommend!'
    },
    {
      username: 'Benjamin Wilson',
      images: [product9, product7, product2],
      rating: 4,
      review: 'Great shoes for everyday wear. They offer a comfortable fit and adequate support for various activities. The design is sleek, and I\'ve received compliments on them. Overall, satisfied with my purchase.'
    },
    {
      username: 'Emma Johnson',
      images: [],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, a solid choice.'
    },
    {
      username: 'William Brown',
      images: [product8, product3, product6, product1, product9],
      rating: 5,
      review: 'Excellent performance! These shoes offer exceptional comfort and support for my workouts. The cushioning is just right, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Isabella Garcia',
      images: [product7, product9, product1],
      rating: 4,
      review: 'Comfortable fit, stylish design. These shoes provide a comfortable fit and look great with any outfit. The support is decent, making them suitable for various activities. Overall, satisfied.'
    },
    {
      username: 'James Smith',
      images: [product2, product5, product8],
      rating: 5,
      review: 'Perfect for long-distance running! These shoes offer excellent cushioning and support, making them perfect for my training sessions. Plus, they look sleek and have held up well. Couldn\'t be happier!'
    },
    {
      username: 'Sophia Martinez',
      images: [product4, product7],
      rating: 4,
      review: 'Good overall performance. These shoes offer decent comfort and support for my workouts. The design is modern, and they\'ve held up well over time. Overall, satisfied.'
    },
    {
      username: 'Alexander Rodriguez',
      images: [product3, product8, product1, product5],
      rating: 5,
      review: 'Exceptional quality! These shoes offer unparalleled comfort and support for long walks and runs. The build quality is excellent, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Ava Davis',
      images: [],
      rating: 4,
      review: 'Solid choice for everyday wear. These shoes provide a comfortable fit and adequate support for daily activities. The cushioning is decent, and they\'ve held up well with regular use. Satisfied.'
    },
    {
      username: 'Daniel Wilson',
      images: [product1, product7],
      rating: 5,
      review: 'Amazing shoes! They offer exceptional comfort and support for my runs. The cushioning is just right, and they look stylish too. Highly recommend!'
    }
  ],
  [
    {
      username: 'Olivia Taylor',
      images: [product8, product9, product3, product1, product5],
      rating: 5,
      review: 'Fantastic shoes, highly recommended! They provide excellent support and cushioning for long runs. Plus, they look sleek and have held up well over time. Couldn\'t be happier with my purchase!'
    },
    {
      username: 'Ethan Martinez',
      images: [product4, product7, product1, product2],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, satisfied.'
    },
    {
      username: 'Sophia Rodriguez',
      images: [product5, product8, product9, product1],
      rating: 4,
      review: 'Comfortable fit, stylish design. These shoes provide a comfortable fit and look great with any outfit. The support is decent, making them suitable for various activities. Overall, satisfied.'
    },
    {
      username: 'Michael Garcia',
      images: [],
      rating: 5,
      review: 'Perfect for long-distance running! These shoes offer excellent cushioning and support, making them perfect for my training sessions. Plus, they look sleek and have held up well. Couldn\'t be happier!'
    },
    {
      username: 'Emma Smith',
      images: [product2],
      rating: 4,
      review: 'Good overall performance. These shoes offer decent comfort and support for my workouts. The design is modern, and they\'ve held up well over time. Overall, satisfied.'
    },
    {
      username: 'Daniel Brown',
      images: [product3, product8, product1, product4],
      rating: 5,
      review: 'Exceptional quality! These shoes offer unparalleled comfort and support for long walks and runs. The build quality is excellent, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Ava Wilson',
      images: [],
      rating: 4,
      review: 'Solid choice for everyday wear. These shoes provide a comfortable fit and adequate support for daily activities. The cushioning is decent, and they\'ve held up well with regular use. Satisfied.'
    },
    {
      username: 'Sophie Taylor',
      images: [product1, product7, product5, product3],
      rating: 5,
      review: 'Amazing shoes! They offer exceptional comfort and support for my runs. The cushioning is just right, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Benjamin Martinez',
      images: [product8, product9],
      rating: 5,
      review: 'Fantastic shoes, highly recommended! They provide excellent support and cushioning for long runs. Plus, they look sleek and have held up well over time. Couldn\'t be happier with my purchase!'
    },
    {
      username: 'Emma Garcia',
      images: [product4, product7, product1],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, satisfied.'
    }
  ],
  [
    {
      username: 'Nathan Moore',
      images: [product2, product6],
      rating: 5,
      review: 'These shoes are absolutely amazing! They provide incredible support and cushioning, making every run feel effortless. Plus, they look stylish and have quickly become my go-to pair.'
    },
    {
      username: 'Sophia Johnson',
      images: [product3, product5, product8],
      rating: 4,
      review: 'I\'m quite pleased with these shoes. They offer good comfort and support, although the cushioning could be a bit better. Overall, a solid choice for daily wear.'
    },
    {
      username: 'Ethan Wilson',
      images: [product1, product4],
      rating: 4,
      review: 'These shoes exceeded my expectations. They provide excellent stability and support, which has helped improve my overall performance. I would highly recommend them to anyone!'
    },
    {
      username: 'Ava Martinez',
      images: [],
      rating: 5,
      review: 'I absolutely love these shoes! They are incredibly comfortable and provide excellent support for long runs. Plus, they look fantastic!'
    },
    {
      username: 'Isabella Brown',
      images: [product7],
      rating: 4,
      review: 'Overall, I\'m quite satisfied with these shoes. They offer decent comfort and support for various activities. The design is also quite stylish.'
    }
  ],
  [
    {
      username: 'Daniel Thompson',
      images: [product1, product5],
      rating: 5,
      review: 'These shoes are simply fantastic! They provide exceptional comfort and support for my workouts. I\'ve noticed a significant improvement in my performance since I started wearing them.'
    },
    {
      username: 'Olivia Davis',
      images: [product3, product7],
      rating: 4,
      review: 'I\'m quite impressed with these shoes. They offer good cushioning and support, although they could be a bit more breathable. Overall, a solid choice for running.'
    },
    {
      username: 'William Clark',
      images: [product2, product4],
      rating: 5,
      review: 'These shoes are amazing! They provide excellent stability and support, which has helped reduce fatigue during long runs. Plus, they look sleek and stylish.'
    },
    {
      username: 'Emma Rodriguez',
      images: [product6],
      rating: 4,
      review: 'Overall, I\'m quite satisfied with these shoes. They offer good comfort and support for daily wear. The cushioning is adequate, and they look great!'
    },
    {
      username: 'Liam Garcia',
      images: [],
      rating: 5,
      review: 'I absolutely love these shoes! They are incredibly comfortable and provide excellent support for my workouts. Plus, they look fantastic!'
    }
  ],
  [
    {
      username: 'Sophie Thompson',
      images: [product6, product8, product3],
      rating: 5,
      review: 'Absolutely love these shoes! They provide excellent support and cushioning, making them perfect for long runs. Plus, they look stylish and have held up well over time. Highly recommend!'
    },
    {
      username: 'Benjamin Wilson',
      images: [product9, product7, product2],
      rating: 4,
      review: 'Great shoes for everyday wear. They offer a comfortable fit and adequate support for various activities. The design is sleek, and I\'ve received compliments on them. Overall, satisfied with my purchase.'
    },
    {
      username: 'Emma Johnson',
      images: [],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, a solid choice.'
    },
    {
      username: 'William Brown',
      images: [product8, product3, product6, product1, product9],
      rating: 5,
      review: 'Excellent performance! These shoes offer exceptional comfort and support for my workouts. The cushioning is just right, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Isabella Garcia',
      images: [product7, product9, product1],
      rating: 4,
      review: 'Comfortable fit, stylish design. These shoes provide a comfortable fit and look great with any outfit. The support is decent, making them suitable for various activities. Overall, satisfied.'
    },
    {
      username: 'James Smith',
      images: [product2, product5, product8],
      rating: 5,
      review: 'Perfect for long-distance running! These shoes offer excellent cushioning and support, making them perfect for my training sessions. Plus, they look sleek and have held up well. Couldn\'t be happier!'
    },
    {
      username: 'Sophia Martinez',
      images: [product4, product7],
      rating: 4,
      review: 'Good overall performance. These shoes offer decent comfort and support for my workouts. The design is modern, and they\'ve held up well over time. Overall, satisfied.'
    },
    {
      username: 'Alexander Rodriguez',
      images: [product3, product8, product1, product5],
      rating: 5,
      review: 'Exceptional quality! These shoes offer unparalleled comfort and support for long walks and runs. The build quality is excellent, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Ava Davis',
      images: [],
      rating: 4,
      review: 'Solid choice for everyday wear. These shoes provide a comfortable fit and adequate support for daily activities. The cushioning is decent, and they\'ve held up well with regular use. Satisfied.'
    },
    {
      username: 'Daniel Wilson',
      images: [product1, product7],
      rating: 5,
      review: 'Amazing shoes! They offer exceptional comfort and support for my runs. The cushioning is just right, and they look stylish too. Highly recommend!'
    }
  ],
  [
    {
      username: 'Olivia Taylor',
      images: [product8, product9, product3, product1, product5],
      rating: 5,
      review: 'Fantastic shoes, highly recommended! They provide excellent support and cushioning for long runs. Plus, they look sleek and have held up well over time. Couldn\'t be happier with my purchase!'
    },
    {
      username: 'Ethan Martinez',
      images: [product4, product7, product1, product2],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, satisfied.'
    },
    {
      username: 'Sophia Rodriguez',
      images: [product5, product8, product9, product1],
      rating: 4,
      review: 'Comfortable fit, stylish design. These shoes provide a comfortable fit and look great with any outfit. The support is decent, making them suitable for various activities. Overall, satisfied.'
    },
    {
      username: 'Michael Garcia',
      images: [],
      rating: 5,
      review: 'Perfect for long-distance running! These shoes offer excellent cushioning and support, making them perfect for my training sessions. Plus, they look sleek and have held up well. Couldn\'t be happier!'
    },
    {
      username: 'Emma Smith',
      images: [product2],
      rating: 4,
      review: 'Good overall performance. These shoes offer decent comfort and support for my workouts. The design is modern, and they\'ve held up well over time. Overall, satisfied.'
    },
    {
      username: 'Daniel Brown',
      images: [product3, product8, product1, product4],
      rating: 5,
      review: 'Exceptional quality! These shoes offer unparalleled comfort and support for long walks and runs. The build quality is excellent, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Ava Wilson',
      images: [],
      rating: 4,
      review: 'Solid choice for everyday wear. These shoes provide a comfortable fit and adequate support for daily activities. The cushioning is decent, and they\'ve held up well with regular use. Satisfied.'
    },
    {
      username: 'Sophie Taylor',
      images: [product1, product7, product5, product3],
      rating: 5,
      review: 'Amazing shoes! They offer exceptional comfort and support for my runs. The cushioning is just right, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Benjamin Martinez',
      images: [product8, product9],
      rating: 5,
      review: 'Fantastic shoes, highly recommended! They provide excellent support and cushioning for long runs. Plus, they look sleek and have held up well over time. Couldn\'t be happier with my purchase!'
    },
    {
      username: 'Emma Garcia',
      images: [product4, product7, product1],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, satisfied.'
    }
  ],
  [
    {
      username: 'Nathan Moore',
      images: [product2, product6],
      rating: 5,
      review: 'These shoes are absolutely amazing! They provide incredible support and cushioning, making every run feel effortless. Plus, they look stylish and have quickly become my go-to pair.'
    },
    {
      username: 'Sophia Johnson',
      images: [product3, product5, product8],
      rating: 4,
      review: 'I\'m quite pleased with these shoes. They offer good comfort and support, although the cushioning could be a bit better. Overall, a solid choice for daily wear.'
    },
    {
      username: 'Ethan Wilson',
      images: [product1, product4],
      rating: 4,
      review: 'These shoes exceeded my expectations. They provide excellent stability and support, which has helped improve my overall performance. I would highly recommend them to anyone!'
    },
    {
      username: 'Ava Martinez',
      images: [],
      rating: 5,
      review: 'I absolutely love these shoes! They are incredibly comfortable and provide excellent support for long runs. Plus, they look fantastic!'
    },
    {
      username: 'Isabella Brown',
      images: [product7],
      rating: 4,
      review: 'Overall, I\'m quite satisfied with these shoes. They offer decent comfort and support for various activities. The design is also quite stylish.'
    }
  ],
  [
    {
      username: 'Daniel Thompson',
      images: [product1, product5],
      rating: 5,
      review: 'These shoes are simply fantastic! They provide exceptional comfort and support for my workouts. I\'ve noticed a significant improvement in my performance since I started wearing them.'
    },
    {
      username: 'Olivia Davis',
      images: [product3, product7],
      rating: 4,
      review: 'I\'m quite impressed with these shoes. They offer good cushioning and support, although they could be a bit more breathable. Overall, a solid choice for running.'
    },
    {
      username: 'William Clark',
      images: [product2, product4],
      rating: 5,
      review: 'These shoes are amazing! They provide excellent stability and support, which has helped reduce fatigue during long runs. Plus, they look sleek and stylish.'
    },
    {
      username: 'Emma Rodriguez',
      images: [product6],
      rating: 4,
      review: 'Overall, I\'m quite satisfied with these shoes. They offer good comfort and support for daily wear. The cushioning is adequate, and they look great!'
    },
    {
      username: 'Liam Garcia',
      images: [],
      rating: 5,
      review: 'I absolutely love these shoes! They are incredibly comfortable and provide excellent support for my workouts. Plus, they look fantastic!'
    }
  ],
  [
    {
      username: 'Sophie Thompson',
      images: [product6, product8, product3],
      rating: 5,
      review: 'Absolutely love these shoes! They provide excellent support and cushioning, making them perfect for long runs. Plus, they look stylish and have held up well over time. Highly recommend!'
    },
    {
      username: 'Benjamin Wilson',
      images: [product9, product7, product2],
      rating: 4,
      review: 'Great shoes for everyday wear. They offer a comfortable fit and adequate support for various activities. The design is sleek, and I\'ve received compliments on them. Overall, satisfied with my purchase.'
    },
    {
      username: 'Emma Johnson',
      images: [],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, a solid choice.'
    },
    {
      username: 'William Brown',
      images: [product8, product3, product6, product1, product9],
      rating: 5,
      review: 'Excellent performance! These shoes offer exceptional comfort and support for my workouts. The cushioning is just right, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Isabella Garcia',
      images: [product7, product9, product1],
      rating: 4,
      review: 'Comfortable fit, stylish design. These shoes provide a comfortable fit and look great with any outfit. The support is decent, making them suitable for various activities. Overall, satisfied.'
    },
    {
      username: 'James Smith',
      images: [product2, product5, product8],
      rating: 5,
      review: 'Perfect for long-distance running! These shoes offer excellent cushioning and support, making them perfect for my training sessions. Plus, they look sleek and have held up well. Couldn\'t be happier!'
    },
    {
      username: 'Sophia Martinez',
      images: [product4, product7],
      rating: 4,
      review: 'Good overall performance. These shoes offer decent comfort and support for my workouts. The design is modern, and they\'ve held up well over time. Overall, satisfied.'
    },
    {
      username: 'Alexander Rodriguez',
      images: [product3, product8, product1, product5],
      rating: 5,
      review: 'Exceptional quality! These shoes offer unparalleled comfort and support for long walks and runs. The build quality is excellent, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Ava Davis',
      images: [],
      rating: 4,
      review: 'Solid choice for everyday wear. These shoes provide a comfortable fit and adequate support for daily activities. The cushioning is decent, and they\'ve held up well with regular use. Satisfied.'
    },
    {
      username: 'Daniel Wilson',
      images: [product1, product7],
      rating: 5,
      review: 'Amazing shoes! They offer exceptional comfort and support for my runs. The cushioning is just right, and they look stylish too. Highly recommend!'
    }
  ],
  [
    {
      username: 'Olivia Taylor',
      images: [product8, product9, product3, product1, product5],
      rating: 5,
      review: 'Fantastic shoes, highly recommended! They provide excellent support and cushioning for long runs. Plus, they look sleek and have held up well over time. Couldn\'t be happier with my purchase!'
    },
    {
      username: 'Ethan Martinez',
      images: [product4, product7, product1, product2],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, satisfied.'
    },
    {
      username: 'Sophia Rodriguez',
      images: [product5, product8, product9, product1],
      rating: 4,
      review: 'Comfortable fit, stylish design. These shoes provide a comfortable fit and look great with any outfit. The support is decent, making them suitable for various activities. Overall, satisfied.'
    },
    {
      username: 'Michael Garcia',
      images: [],
      rating: 5,
      review: 'Perfect for long-distance running! These shoes offer excellent cushioning and support, making them perfect for my training sessions. Plus, they look sleek and have held up well. Couldn\'t be happier!'
    },
    {
      username: 'Emma Smith',
      images: [product2],
      rating: 4,
      review: 'Good overall performance. These shoes offer decent comfort and support for my workouts. The design is modern, and they\'ve held up well over time. Overall, satisfied.'
    },
    {
      username: 'Daniel Brown',
      images: [product3, product8, product1, product4],
      rating: 5,
      review: 'Exceptional quality! These shoes offer unparalleled comfort and support for long walks and runs. The build quality is excellent, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Ava Wilson',
      images: [],
      rating: 4,
      review: 'Solid choice for everyday wear. These shoes provide a comfortable fit and adequate support for daily activities. The cushioning is decent, and they\'ve held up well with regular use. Satisfied.'
    },
    {
      username: 'Sophie Taylor',
      images: [product1, product7, product5, product3],
      rating: 5,
      review: 'Amazing shoes! They offer exceptional comfort and support for my runs. The cushioning is just right, and they look stylish too. Highly recommend!'
    },
    {
      username: 'Benjamin Martinez',
      images: [product8, product9],
      rating: 5,
      review: 'Fantastic shoes, highly recommended! They provide excellent support and cushioning for long runs. Plus, they look sleek and have held up well over time. Couldn\'t be happier with my purchase!'
    },
    {
      username: 'Emma Garcia',
      images: [product4, product7, product1],
      rating: 4,
      review: 'Good value for money. These shoes offer decent comfort and support for the price. The design is modern, and they\'ve held up well with regular use. Overall, satisfied.'
    }
  ],
  [
    {
      username: 'Nathan Moore',
      images: [product2, product6],
      rating: 5,
      review: 'These shoes are absolutely amazing! They provide incredible support and cushioning, making every run feel effortless. Plus, they look stylish and have quickly become my go-to pair.'
    },
    {
      username: 'Sophia Johnson',
      images: [product3, product5, product8],
      rating: 4,
      review: 'I\'m quite pleased with these shoes. They offer good comfort and support, although the cushioning could be a bit better. Overall, a solid choice for daily wear.'
    },
    {
      username: 'Ethan Wilson',
      images: [product1, product4],
      rating: 4,
      review: 'These shoes exceeded my expectations. They provide excellent stability and support, which has helped improve my overall performance. I would highly recommend them to anyone!'
    },
    {
      username: 'Ava Martinez',
      images: [],
      rating: 5,
      review: 'I absolutely love these shoes! They are incredibly comfortable and provide excellent support for long runs. Plus, they look fantastic!'
    },
    {
      username: 'Isabella Brown',
      images: [product7],
      rating: 4,
      review: 'Overall, I\'m quite satisfied with these shoes. They offer decent comfort and support for various activities. The design is also quite stylish.'
    }
  ],

];


export const productColors = [
  [
    { colorName: 'Olive', colorCode: '#808000' },
    { colorName: 'Maroon', colorCode: '#800000' },
  ],
  [
    { colorName: 'Red', colorCode: '#FF0000' },
    { colorName: 'Green', colorCode: '#00FF00' },
    { colorName: 'Blue', colorCode: '#0000FF' },
  ],
  [
    { colorName: 'Yellow', colorCode: '#FFFF00' },
    { colorName: 'Purple', colorCode: '#800080' },
  ],
  [
    { colorName: 'Orange', colorCode: '#FFA500' },
  ],
  [
    { colorName: 'Pink', colorCode: '#FFC0CB' },
    { colorName: 'Cyan', colorCode: '#00FFFF' },
    { colorName: 'Magenta', colorCode: '#FF00FF' },
  ],
  [
    { colorName: 'Lime', colorCode: '#00FF00' },
  ],
  [
    { colorName: 'Teal', colorCode: '#008080' },
    { colorName: 'Slate Gray', colorCode: '#708090' },
  ],
  [
    { colorName: 'Olive', colorCode: '#808000' },
    { colorName: 'Maroon', colorCode: '#800000' },
  ],
  [
    { colorName: 'Navy', colorCode: '#000080' },
  ],
  [
    { colorName: 'Indigo', colorCode: '#4B0082' },
  ],
  [
    { colorName: 'Turquoise', colorCode: '#40E0D0' },
    { colorName: 'Lavender', colorCode: '#E6E6FA' },
  ],
  [
    { colorName: 'Beige', colorCode: '#F5F5DC' },
  ],
  [
    { colorName: 'Silver', colorCode: '#C0C0C0' },
    { colorName: 'Gold', colorCode: '#FFD700' },
  ],
  [
    { colorName: 'Crimson', colorCode: '#DC143C' },
    { colorName: 'Aquamarine', colorCode: '#7FFFD4' },
  ],
  [
    { colorName: 'Violet', colorCode: '#EE82EE' },
    { colorName: 'Azure', colorCode: '#007FFF' },
    { colorName: 'Salmon', colorCode: '#FA8072' },
  ]
];

export const productStarsData = [
  [
    { stars: 1, value: 4 },
    { stars: 2, value: 10 },
    { stars: 3, value: 25 },
    { stars: 4, value: 86 },
    { stars: 5, value: 108 },
  ],
  [
    { stars: 1, value: 59 },
    { stars: 2, value: 22 },
    { stars: 3, value: 38 },
    { stars: 4, value: 77 },
    { stars: 5, value: 91 }
  ]
  ,
  [
    { stars: 1, value: 13 },
    { stars: 2, value: 47 },
    { stars: 3, value: 64 },
    { stars: 4, value: 30 },
    { stars: 5, value: 82 }
  ]
  ,
  [
    { stars: 1, value: 24 },
    { stars: 2, value: 76 },
    { stars: 3, value: 41 },
    { stars: 4, value: 50 },
    { stars: 5, value: 95 }
  ]
  ,
  [
    { stars: 1, value: 7 },
    { stars: 2, value: 53 },
    { stars: 3, value: 88 },
    { stars: 4, value: 33 },
    { stars: 5, value: 69 }
  ]
  ,
  [
    { stars: 1, value: 36 },
    { stars: 2, value: 49 },
    { stars: 3, value: 17 },
    { stars: 4, value: 84 },
    { stars: 5, value: 12 }
  ]
  ,
  [
    { stars: 1, value: 80 },
    { stars: 2, value: 25 },
    { stars: 3, value: 63 },
    { stars: 4, value: 28 },
    { stars: 5, value: 40 }
  ]
  ,
  [
    { stars: 1, value: 42 },
    { stars: 2, value: 74 },
    { stars: 3, value: 9 },
    { stars: 4, value: 61 },
    { stars: 5, value: 57 }
  ]
  ,
  [
    { stars: 1, value: 18 },
    { stars: 2, value: 71 },
    { stars: 3, value: 35 },
    { stars: 4, value: 83 },
    { stars: 5, value: 96 }
  ]
  ,
  [
    { stars: 1, value: 68 },
    { stars: 2, value: 10 },
    { stars: 3, value: 55 },
    { stars: 4, value: 23 },
    { stars: 5, value: 87 }
  ]
  ,
  [
    { stars: 1, value: 14 },
    { stars: 2, value: 46 },
    { stars: 3, value: 90 },
    { stars: 4, value: 31 },
    { stars: 5, value: 79 }
  ]
  ,
  [
    { stars: 1, value: 62 },
    { stars: 2, value: 29 },
    { stars: 3, value: 72 },
    { stars: 4, value: 37 },
    { stars: 5, value: 16 }
  ]
  ,
  [
    { stars: 1, value: 85 },
    { stars: 2, value: 20 },
    { stars: 3, value: 51 },
    { stars: 4, value: 6 },
    { stars: 5, value: 98 }
  ]
  ,
  [
    { stars: 1, value: 43 },
    { stars: 2, value: 75 },
    { stars: 3, value: 27 },
    { stars: 4, value: 54 },
    { stars: 5, value: 3 }
  ]
  ,
  [
    { stars: 1, value: 65 },
    { stars: 2, value: 11 },
    { stars: 3, value: 48 },
    { stars: 4, value: 44 },
    { stars: 5, value: 92 }
  ]
];

export const productSizes = [
  [
    { sizeName: 8, sizeCode: '8in' },
    { sizeName: 9, sizeCode: '9in' },
    { sizeName: 10, sizeCode: '10in' },
    { sizeName: 11, sizeCode: '11in' },
  ],
  [
    { sizeName: 12, sizeCode: '12in' },
    { sizeName: 13, sizeCode: '13in' },
    { sizeName: 14, sizeCode: '14in' },
    { sizeName: 15, sizeCode: '15in' },
  ],
  [
    { sizeName: 16, sizeCode: '16in' },
    { sizeName: 17, sizeCode: '17in' },
    { sizeName: 18, sizeCode: '18in' },
    { sizeName: 19, sizeCode: '19in' },
    { sizeName: 20, sizeCode: '20in' },
  ],
  [
    { sizeName: 21, sizeCode: '21in' },
    { sizeName: 22, sizeCode: '22in' },
    { sizeName: 23, sizeCode: '23in' },
    { sizeName: 24, sizeCode: '24in' },
    { sizeName: 25, sizeCode: '25in' },
  ],
  [
    { sizeName: 26, sizeCode: '26in' },
    { sizeName: 27, sizeCode: '27in' },
    { sizeName: 28, sizeCode: '28in' },
    { sizeName: 29, sizeCode: '29in' },
    { sizeName: 30, sizeCode: '30in' },
  ],
  [
    { sizeName: 31, sizeCode: '31in' },
    { sizeName: 32, sizeCode: '32in' },
    { sizeName: 33, sizeCode: '33in' },
    { sizeName: 34, sizeCode: '34in' },
    { sizeName: 35, sizeCode: '35in' },
    { sizeName: 36, sizeCode: '36in' },
  ],
  [
    { sizeName: 37, sizeCode: '37in' },
    { sizeName: 38, sizeCode: '38in' },
    { sizeName: 39, sizeCode: '39in' },
    { sizeName: 40, sizeCode: '40in' },
    { sizeName: 41, sizeCode: '41in' },
    { sizeName: 42, sizeCode: '42in' },
  ],
  [
    { sizeName: 43, sizeCode: '43in' },
    { sizeName: 44, sizeCode: '44in' },
    { sizeName: 45, sizeCode: '45in' },
    { sizeName: 46, sizeCode: '46in' },
    { sizeName: 47, sizeCode: '47in' },
    { sizeName: 48, sizeCode: '48in' },
  ],
  [
    { sizeName: 49, sizeCode: '49in' },
    { sizeName: 50, sizeCode: '50in' },
    { sizeName: 51, sizeCode: '51in' },
    { sizeName: 52, sizeCode: '52in' },
    { sizeName: 53, sizeCode: '53in' },
    { sizeName: 54, sizeCode: '54in' },
  ],
  [
    { sizeName: 55, sizeCode: '55in' },
    { sizeName: 56, sizeCode: '56in' },
    { sizeName: 57, sizeCode: '57in' },
    { sizeName: 58, sizeCode: '58in' },
    { sizeName: 59, sizeCode: '59in' },
    { sizeName: 60, sizeCode: '60in' },
  ],
  [
    { sizeName: 61, sizeCode: '61in' },
    { sizeName: 62, sizeCode: '62in' },
    { sizeName: 63, sizeCode: '63in' },
    { sizeName: 64, sizeCode: '64in' },
    { sizeName: 65, sizeCode: '65in' },
    { sizeName: 66, sizeCode: '66in' },
  ],
  [
    { sizeName: 67, sizeCode: '67in' },
    { sizeName: 68, sizeCode: '68in' },
    { sizeName: 69, sizeCode: '69in' },
    { sizeName: 70, sizeCode: '70in' },
    { sizeName: 71, sizeCode: '71in' },
    { sizeName: 72, sizeCode: '72in' },
  ],
  [
    { sizeName: 73, sizeCode: '73in' },
    { sizeName: 74, sizeCode: '74in' },
    { sizeName: 75, sizeCode: '75in' },
    { sizeName: 76, sizeCode: '76in' },
    { sizeName: 77, sizeCode: '77in' },
    { sizeName: 78, sizeCode: '78in' },
  ],
  [
    { sizeName: 79, sizeCode: '79in' },
    { sizeName: 80, sizeCode: '80in' },
    { sizeName: 81, sizeCode: '81in' },
    { sizeName: 82, sizeCode: '82in' },
    { sizeName: 83, sizeCode: '83in' },
    { sizeName: 84, sizeCode: '84in' },
  ],
  [
    { sizeName: 73, sizeCode: '73in' },
    { sizeName: 74, sizeCode: '74in' },
    { sizeName: 75, sizeCode: '75in' },
    { sizeName: 76, sizeCode: '76in' },
    { sizeName: 77, sizeCode: '77in' },
    { sizeName: 78, sizeCode: '78in' },
  ]
];
export const productGender = [
  'Male',
  'Female',
  'Unisex',
]
export const productCategory = [
  { category: "Running Shoes", categoryCode: 0 },
  { category: "Soccer Cleats", categoryCode: 1 },
  { category: "Hiking Boots", categoryCode: 2 },
  { category: "Yoga Shoes", categoryCode: 3 },
  { category: "Tennis Shoes", categoryCode: 4 },
  { category: "Volleyball Shoes", categoryCode: 5 },
  { category: "Golf Shoes", categoryCode: 6 },
  { category: "Dance Sneakers", categoryCode: 7 },
  { category: "CrossFit Shoes", categoryCode: 8 },
  { category: "Track Spikes", categoryCode: 9 },
  { category: "Skate Shoes", categoryCode: 10 },
  { category: "Other", categoryCode: 11 },
]
export const productBrand = [
  { brand: "Nike", brandCode: 0 },
  { brand: "Adidas", brandCode: 1 },
  { brand: "Asics", brandCode: 2 },
  { brand: "New Balance", brandCode: 3 },
  { brand: "Brooks", brandCode: 4 },
  { brand: "Saucony", brandCode: 5 },
  { brand: "ASICS", brandCode: 6 },
  { brand: "Brooks", brandCode: 7 },
  { brand: "Mizuno", brandCode: 8 },
  { brand: "FILA", brandCode: 9 },
  { brand: "Other", brandCode: 10 },
];

export const productsData = [
  {
    productId: 0,
    productImages: productImages[0],
    productName: 'Men\'s Running Shoes',
    productDesc: 'Lightweight and breathable shoes for running enthusiasts. Agility and control on the soccer field',
    productInfo: productsInfo[0],
    productCategory: productCategory[0],
    productBrand: productBrand[0],
    productGender: productGender[0],
    productPrice: 89.99,
    productRating: 4,
    productStars: productStarsData[0],
    productColors: productColors[0],
    productSizes: productSizes[0],
    productQuantity: 5,
    productStock: 50,
    itemsSold: 64,
    productReviews: productReviews[0],
  },
  {
    productId: 1,
    productImages: productImages[1],
    productName: 'Men\'s Running Shoes',
    productDesc: 'Lightweight and breathable shoes for running enthusiasts.',
    productInfo: productsInfo[1],
    productCategory: productCategory[0],
    productBrand: productBrand[1],
    productGender: productGender[0],
    productPrice: 89.99,
    productRating: 5,
    productStars: productStarsData[1],
    productColors: productColors[1],
    productSizes: productSizes[1],
    productQuantity: 5,
    productStock: 100,
    itemsSold: 80,
    productReviews: productReviews[1],
  },
  {
    productId: 2,
    productImages: productImages[2],
    productName: 'Men\'s Running Shoes',
    productDesc: 'Lightweight and breathable shoes for running enthusiasts.',
    productInfo: productsInfo[2],
    productCategory: productCategory[0],
    productBrand: productBrand[2],
    productGender: productGender[0],
    productPrice: 89.99,
    productRating: 3,
    productStars: productStarsData[2],
    productColors: productColors[2],
    productSizes: productSizes[2],
    productQuantity: 5,
    productStock: 100,
    itemsSold: 297,
    productReviews: productReviews[2],
  }, {
    productId: 3,
    productImages: productImages[3],
    productName: 'Men\'s Running Shoes',
    productDesc: 'Lightweight and breathable shoes for running enthusiasts.',
    productInfo: productsInfo[3],
    productCategory: productCategory[0],
    productBrand: productBrand[3],
    productGender: productGender[0],
    productPrice: 89.99,
    productRating: 3,
    productStars: productStarsData[3],
    productColors: productColors[3],
    productSizes: productSizes[3],
    productQuantity: 5,
    productStock: 0,
    itemsSold: 650,
    productReviews: productReviews[3],
  },
  {
    productId: 4,
    productImages: productImages[4],
    productName: 'Men\'s Soccer Cleats',
    productDesc: 'Specially designed cleats for agility and control on the soccer field.',
    productInfo: productsInfo[4],
    productCategory: productCategory[1],
    productBrand: productBrand[4],
    productGender: productGender[0],
    productPrice: 99.99,
    productRating: 3,
    productStars: productStarsData[4],
    productColors: productColors[4],
    productSizes: productSizes[4],
    productQuantity: 7,
    productStock: 110,
    itemsSold: 643,
    productReviews: productReviews[4],
  },
  {
    productId: 5,
    productImages: productImages[5],
    productName: 'Women\'s Running Shoes',
    productDesc: 'Comfortable and supportive shoes for long-distance running.',
    productInfo: productsInfo[5],
    productCategory: productCategory[0],
    productBrand: productBrand[5],
    productGender: productGender[1],
    productPrice: 94.99,
    productRating: 3,
    productStars: productStarsData[5],
    productColors: productColors[5],
    productSizes: productSizes[5],
    productQuantity: 9,
    productStock: 105,
    itemsSold: 14,
    productReviews: productReviews[5],
  },
  {
    productId: 6,
    productImages: productImages[6],
    productName: 'Men\'s Hiking Boots',
    productDesc: 'Sturdy boots designed for rugged trails and outdoor adventures.',
    productInfo: productsInfo[6],
    productCategory: productCategory[2],
    productBrand: productBrand[2],
    productGender: productGender[0],
    productPrice: 149.99,
    productRating: 2,
    productStars: productStarsData[6],
    productColors: productColors[6],
    productSizes: productSizes[6],
    productQuantity: 12,
    productStock: 95,
    itemsSold: 69,
    productReviews: productReviews[6],
  },
  {
    productId: 7,
    productImages: productImages[7],
    productName: 'Women\'s Yoga Shoes',
    productDesc: 'Flexible and grippy shoes perfect for yoga and Pilates sessions.',
    productInfo: productsInfo[7],
    productCategory: productCategory[3],
    productBrand: productBrand[3],
    productGender: productGender[1],
    productPrice: 69.99,
    productRating: 5,
    productStars: productStarsData[7],
    productColors: productColors[7],
    productSizes: productSizes[7],
    productQuantity: 6,
    productStock: 85,
    itemsSold: 65,
    productReviews: productReviews[7],
  },
  {
    productId: 8,
    productImages: productImages[8],
    productName: 'Men\'s Tennis Shoes',
    productDesc: 'Supportive and lightweight shoes designed for agility on the tennis court.',
    productInfo: productsInfo[8],
    productCategory: productCategory[4],
    productBrand: productBrand[7],
    productGender: productGender[0],
    productPrice: 119.99,
    productRating: 4,
    productStars: productStarsData[8],
    productColors: productColors[8],
    productSizes: productSizes[8],
    productQuantity: 11,
    productStock: 100,
    itemsSold: 74,
    productReviews: productReviews[8],
  },
  {
    productId: 9,
    productImages: productImages[9],
    productName: 'Women\'s Volleyball Shoes',
    productDesc: 'Breathable shoes with excellent traction for indoor volleyball matches.',
    productInfo: productsInfo[9],
    productCategory: productCategory[5],
    productBrand: productBrand[7],
    productGender: productGender[1],
    productPrice: 89.99,
    productRating: 1,
    productStars: productStarsData[9],
    productColors: productColors[9],
    productSizes: productSizes[9],
    productQuantity: 7,
    productStock: 95,
    itemsSold: 50,
    productReviews: productReviews[9],
  },
  {
    productId: 10,
    productImages: productImages[10],
    productName: 'Men\'s Golf Shoes',
    productDesc: 'Waterproof and stable shoes designed for comfort and performance on the golf course.',
    productInfo: productsInfo[10],
    productCategory: productCategory[6],
    productBrand: productBrand[2],
    productGender: productGender[0],
    productPrice: 139.99,
    productRating: 5,
    productStars: productStarsData[10],
    productColors: productColors[10],
    productSizes: productSizes[10],
    productQuantity: 9,
    productStock: 105,
    itemsSold: 64,
    productReviews: productReviews[10],
  },
  {
    productId: 11,
    productImages: productImages[11],
    productName: 'Women\'s Dance Sneakers',
    productDesc: 'Sleek and supportive sneakers perfect for dance rehearsals and performances.',
    productInfo: productsInfo[11],
    productCategory: productCategory[7],
    productBrand: productBrand[3],
    productGender: productGender[1],
    productPrice: 79.99,
    productRating: 3,
    productStars: productStarsData[11],
    productColors: productColors[11],
    productSizes: productSizes[11],
    productQuantity: 5,
    productStock: 90,
    itemsSold: 64,
    productReviews: productReviews[11],
  },
  {
    productId: 12,
    productImages: productImages[12],
    productName: 'Men\'s CrossFit Shoes',
    productDesc: 'Durable shoes with excellent grip for high-intensity CrossFit workouts.',
    productInfo: productsInfo[12],
    productCategory: productCategory[8],
    productBrand: productBrand[4],
    productGender: productGender[0],
    productPrice: 109.99,
    productRating: 4,
    productStars: productStarsData[12],
    productColors: productColors[12],
    productSizes: productSizes[12],
    productQuantity: 8,
    productStock: 100,
    itemsSold: 64,
    productReviews: productReviews[12],
  },
  {
    productId: 13,
    productImages: productImages[13],
    productName: 'Women\'s Track Spikes',
    productDesc: 'Lightweight and responsive spikes for sprinting and track competitions.',
    productInfo: productsInfo[13],
    productCategory: productCategory[9],
    productBrand: productBrand[5],
    productGender: productGender[1],
    productPrice: 79.99,
    productRating: 4,
    productStars: productStarsData[13],
    productColors: productColors[13],
    productSizes: productSizes[13],
    productQuantity: 7,
    productStock: 95,
    itemsSold: 61,
    productReviews: productReviews[13],
  },
  {
    productId: 14,
    productImages: productImages[14],
    productName: 'Men\'s Skate Shoes',
    productDesc: 'Stylish and durable shoes designed for skateboarding and urban wear.',
    productInfo: productsInfo[14],
    productCategory: productCategory[10],
    productBrand: productBrand[4],
    productGender: productGender[0],
    productPrice: 89.99,
    productRating: 5,
    productStars: productStarsData[14],
    productColors: productColors[14],
    productSizes: productSizes[14],
    productQuantity: 6,
    productStock: 80,
    itemsSold: 61,
    productReviews: productReviews[14],
  },
];
export const productsPerformanceData = [
  {
    OrderID: 10248,
    productTitle: 'Is it good Runner Shoes?',
    categories: 'Running Shoes, Men, Nike',
    ratingString: 'Good',
    ratingPercentage: 65,
    Earnings: 546000,
    barColor: '#8BE78B',
    ProductImage:
      Product1_1,
  },
  {
    OrderID: 10250,
    productTitle: 'Comfortable pairs',
    categories: 'Casual shoes, Unisex, New balance',
    ratingString: 'Very Good',
    ratingPercentage: 80,
    Earnings: 380000,
    barColor: '#00CED1',
    ProductImage: Product7_1,
  },
  {
    OrderID: 10251,
    productTitle: 'Recommended for Pros',
    categories: 'Golf Shoes, Men, Adidas',
    ratingString: 'Excellent',
    ratingPercentage: 92,
    Earnings: 620000,
    barColor: '#FF6347',
    ProductImage: Product5_1,
  },
  {
    OrderID: 10252,
    productTitle: 'Best for Sports',
    categories: 'Soccer, Men, Nike',
    ratingString: 'Good',
    ratingPercentage: 70,
    Earnings: 450000,
    barColor: '#DA70D6',
    ProductImage: Product4_1,
  }
];

export const productsTableData = [
  {
    ProductID: productsData[0].productId,
    ProductImage: productsData[0].productImages[0].productImages[0],
    ProductName: productsData[0].productName,
    ProductCategory: productsData[0].productCategory.category,
    Price: productsData[0].productPrice,
    ProductStock: productsData[0].productStock,
    ItemsSold: productsData[0].itemsSold,
  },
  {
    ProductID: productsData[1].productId,
    ProductImage: productsData[1].productImages[0].productImages[0],
    ProductName: productsData[1].productName,
    ProductCategory: productsData[1].productCategory.category,
    Price: productsData[1].productPrice,
    ProductStock: productsData[1].productStock,
    ItemsSold: productsData[1].itemsSold,

  },
  {
    ProductID: productsData[2].productId,
    ProductImage: productsData[2].productImages[0].productImages[0],
    ProductName: productsData[2].productName,
    ProductCategory: productsData[2].productCategory.category,
    Price: productsData[2].productPrice,
    ProductStock: productsData[2].productStock,
    ItemsSold: productsData[2].itemsSold,

  },
  {
    ProductID: productsData[3].productId,
    ProductImage: productsData[3].productImages[0].productImages[0],
    ProductName: productsData[3].productName,
    ProductCategory: productsData[3].productCategory.category,
    Price: productsData[3].productPrice,
    ProductStock: productsData[3].productStock,
    ItemsSold: productsData[3].itemsSold,

  },
  {
    ProductID: productsData[4].productId,
    ProductImage: productsData[4].productImages[0].productImages[0],
    ProductName: productsData[4].productName,
    ProductCategory: productsData[4].productCategory.category,
    Price: productsData[4].productPrice,
    ProductStock: productsData[4].productStock,
    ItemsSold: productsData[4].itemsSold,

  },
  {
    ProductID: productsData[5].productId,
    ProductImage: productsData[5].productImages[0].productImages[0],
    ProductName: productsData[5].productName,
    ProductCategory: productsData[5].productCategory.category,
    Price: productsData[5].productPrice,
    ProductStock: productsData[5].productStock,
    ItemsSold: productsData[5].itemsSold,

  },
  {
    ProductID: productsData[6].productId,
    ProductImage: productsData[6].productImages[0].productImages[0],
    ProductName: productsData[6].productName,
    ProductCategory: productsData[6].productCategory.category,
    Price: productsData[6].productPrice,
    ProductStock: productsData[6].productStock,
    ItemsSold: productsData[6].itemsSold,

  },
  {
    ProductID: productsData[7].productId,
    ProductImage: productsData[7].productImages[0].productImages[0],
    ProductName: productsData[7].productName,
    ProductCategory: productsData[7].productCategory.category,
    Price: productsData[7].productPrice,
    ProductStock: productsData[7].productStock,
    ItemsSold: productsData[8].itemsSold,

  },
  {
    ProductID: productsData[8].productId,
    ProductImage: productsData[8].productImages[0].productImages[0],
    ProductName: productsData[8].productName,
    ProductCategory: productsData[8].productCategory.category,
    Price: productsData[8].productPrice,
    ProductStock: productsData[8].productStock,
    ItemsSold: productsData[8].itemsSold,

  },
  {
    ProductID: productsData[9].productId,
    ProductImage: productsData[9].productImages[0].productImages[0],
    ProductName: productsData[9].productName,
    ProductCategory: productsData[9].productCategory.category,
    Price: productsData[9].productPrice,
    ProductStock: productsData[9].productStock,
    ItemsSold: productsData[9].itemsSold,

  },
  {
    ProductID: productsData[10].productId,
    ProductImage: productsData[10].productImages[0].productImages[0],
    ProductName: productsData[10].productName,
    ProductCategory: productsData[10].productCategory.category,
    Price: productsData[10].productPrice,
    ProductStock: productsData[10].productStock,
    ItemsSold: productsData[10].itemsSold,

  },
  {
    ProductID: productsData[11].productId,
    ProductImage: productsData[11].productImages[0].productImages[0],
    ProductName: productsData[11].productName,
    ProductCategory: productsData[11].productCategory.category,
    Price: productsData[11].productPrice,
    ProductStock: productsData[11].productStock,
    ItemsSold: productsData[11].itemsSold,

  },
  {
    ProductID: productsData[12].productId,
    ProductImage: productsData[12].productImages[0].productImages[0],
    ProductName: productsData[12].productName,
    ProductCategory: productsData[12].productCategory.category,
    Price: productsData[12].productPrice,
    ProductStock: productsData[12].productStock,
    ItemsSold: productsData[12].itemsSold,

  },
  {
    ProductID: productsData[13].productId,
    ProductImage: productsData[13].productImages[0].productImages[0],
    ProductName: productsData[13].productName,
    ProductCategory: productsData[13].productCategory.category,
    Price: productsData[13].productPrice,
    ProductStock: productsData[13].productStock,
    ItemsSold: productsData[13].itemsSold,

  },
  {
    ProductID: productsData[14].productId,
    ProductImage: productsData[14].productImages[0].productImages[0],
    ProductName: productsData[14].productName,
    ProductCategory: productsData[14].productCategory.category,
    Price: productsData[14].productPrice,
    ProductStock: productsData[14].productStock,
    ItemsSold: productsData[14].itemsSold,
  }
]

export const trackingTableData = [
  {
    trackingID: "SKV32765388F",
    orderID: 10248,
    customerName: 'Vinet',
    customerLocation: 'Canda',
    shippiingTo: "John Doe",
    status: "Delivered",
    statusBg: '#8BE78B',
    placedOn: '2023-08-05',
    eta: '2023-08-29',
    shippingVia: "FedEx",
  }
]

export const orderItems = [
  [
    {
      productID: productsData[0].productId,
      productImage: productsData[0].productImages[0].productImages[0],
      productName: productsData[0].productName,
      unitPrice: productsData[0].productPrice,
      productQty: 2,
      totalPrice: productsData[0].productPrice * 2
    },
    {
      productID: productsData[3].productId,
      productImage: productsData[3].productImages[0].productImages[0],
      productName: productsData[3].productName,
      unitPrice: productsData[3].productPrice,
      productQty: 3,
      totalPrice: productsData[3].productPrice * 3
    },
    {
      productID: productsData[9].productId,
      productImage: productsData[9].productImages[0].productImages[0],
      productName: productsData[9].productName,
      unitPrice: productsData[9].productPrice,
      productQty: 1,
      totalPrice: productsData[9].productPrice * 1
    }
  ],
  [
    {
      productID: productsData[7].productId,
      productImage: productsData[7].productImages[0].productImages[0],
      productName: productsData[7].productName,
      unitPrice: productsData[7].productPrice,
      productQty: 2,
      totalPrice: productsData[7].productPrice * 2
    }
  ],
  [
    {
      productID: productsData[11].productId,
      productImage: productsData[11].productImages[0].productImages[0],
      productName: productsData[11].productName,
      unitPrice: productsData[11].productPrice,
      productQty: 1,
      totalPrice: productsData[11].productPrice * 1
    },
    {
      productID: productsData[2].productId,
      productImage: productsData[2].productImages[0].productImages[0],
      productName: productsData[2].productName,
      unitPrice: productsData[2].productPrice,
      productQty: 1,
      totalPrice: productsData[2].productPrice * 1
    }
  ],
  [
    {
      productID: productsData[6].productId,
      productImage: productsData[6].productImages[0].productImages[0],
      productName: productsData[6].productName,
      unitPrice: productsData[6].productPrice,
      productQty: 2,
      totalPrice: productsData[6].productPrice * 2
    },
    {
      productID: productsData[14].productId,
      productImage: productsData[14].productImages[0].productImages[0],
      productName: productsData[14].productName,
      unitPrice: productsData[14].productPrice,
      productQty: 2,
      totalPrice: productsData[14].productPrice * 2
    },
    {
      productID: productsData[1].productId,
      productImage: productsData[1].productImages[0].productImages[0],
      productName: productsData[1].productName,
      unitPrice: productsData[1].productPrice,
      productQty: 2,
      totalPrice: productsData[1].productPrice * 2
    }
  ],
  [
    {
      productID: productsData[8].productId,
      productImage: productsData[8].productImages[0].productImages[0],
      productName: productsData[8].productName,
      unitPrice: productsData[8].productPrice,
      productQty: 1,
      totalPrice: productsData[8].productPrice * 1
    },
    {
      productID: productsData[5].productId,
      productImage: productsData[5].productImages[0].productImages[0],
      productName: productsData[5].productName,
      unitPrice: productsData[5].productPrice,
      productQty: 2,
      totalPrice: productsData[5].productPrice * 2
    }
  ],
  [
    {
      productID: productsData[10].productId,
      productImage: productsData[10].productImages[0].productImages[0],
      productName: productsData[10].productName,
      unitPrice: productsData[10].productPrice,
      productQty: 1,
      totalPrice: productsData[10].productPrice * 1
    },
    {
      productID: productsData[12].productId,
      productImage: productsData[12].productImages[0].productImages[0],
      productName: productsData[12].productName,
      unitPrice: productsData[12].productPrice,
      productQty: 1,
      totalPrice: productsData[12].productPrice * 1
    },
    {
      productID: productsData[13].productId,
      productImage: productsData[13].productImages[0].productImages[0],
      productName: productsData[13].productName,
      unitPrice: productsData[13].productPrice,
      productQty: 4,
      totalPrice: productsData[13].productPrice * 4
    }
  ],
  [
    {
      productID: productsData[4].productId,
      productImage: productsData[4].productImages[0].productImages[0],
      productName: productsData[4].productName,
      unitPrice: productsData[4].productPrice,
      productQty: 1,
      totalPrice: productsData[4].productPrice * 1
    },
    {
      productID: productsData[7].productId,
      productImage: productsData[7].productImages[0].productImages[0],
      productName: productsData[7].productName,
      unitPrice: productsData[7].productPrice,
      productQty: 3,
      totalPrice: productsData[7].productPrice * 3
    },
    {
      productID: productsData[11].productId,
      productImage: productsData[11].productImages[0].productImages[0],
      productName: productsData[11].productName,
      unitPrice: productsData[11].productPrice,
      productQty: 2,
      totalPrice: productsData[11].productPrice * 2
    }
  ],
  [
    {
      productID: productsData[14].productId,
      productImage: productsData[14].productImages[0].productImages[0],
      productName: productsData[14].productName,
      unitPrice: productsData[14].productPrice,
      productQty: 1,
      totalPrice: productsData[14].productPrice * 1
    }
  ],
  [
    {
      productID: productsData[14].productId,
      productImage: productsData[14].productImages[0].productImages[0],
      productName: productsData[14].productName,
      unitPrice: productsData[14].productPrice,
      productQty: 2,
      totalPrice: productsData[14].productPrice * 2
    }
  ],
  [
    {
      productID: productsData[1].productId,
      productImage: productsData[1].productImages[0].productImages[0],
      productName: productsData[1].productName,
      unitPrice: productsData[1].productPrice,
      productQty: 2,
      totalPrice: productsData[1].productPrice * 2
    },
    {
      productID: productsData[6].productId,
      productImage: productsData[6].productImages[0].productImages[0],
      productName: productsData[6].productName,
      unitPrice: productsData[6].productPrice,
      productQty: 2,
      totalPrice: productsData[6].productPrice * 2
    }
  ],
  [
    {
      productID: productsData[10].productId,
      productImage: productsData[10].productImages[0].productImages[0],
      productName: productsData[10].productName,
      unitPrice: productsData[10].productPrice,
      productQty: 1,
      totalPrice: productsData[10].productPrice * 1
    },
    {
      productID: productsData[13].productId,
      productImage: productsData[13].productImages[0].productImages[0],
      productName: productsData[13].productName,
      unitPrice: productsData[13].productPrice,
      productQty: 1,
      totalPrice: productsData[13].productPrice * 1
    }
  ]
];


export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Vinet',
    CustomerEmail: 'vinet69@gmail.com',
    PhoneNumber: '+99 58 485 9541',
    AddressLine: '14/A ',
    StreetName: 'Calf Street',
    City: 'New York',
    State: 'NY',
    Country: 'USA',
    PostalCode: '10001',
  },
  {
    CustomerID: 1002,
    CustomerName: "Tom",
    CustomerEmail: "tom@example.com",
    PhoneNumber: "+1 123 456 7890",
    AddressLine: "27/B",
    StreetName: "Oak Avenue",
    City: "Los Angeles",
    State: "CA",
    Country: "USA",
    PostalCode: "90001"
  },
  {
    CustomerID: 1003,
    CustomerName: "Alice",
    CustomerEmail: "alice@example.com",
    PhoneNumber: "+1 234 567 8901",
    AddressLine: "19/C",
    StreetName: "Maple Street",
    City: "Toronto",
    State: "Ontario",
    Country: "Canada",
    PostalCode: "M5V 2V6"
  },
  {
    CustomerID: 1004,
    CustomerName: "John",
    CustomerEmail: "john@example.com",
    PhoneNumber: "+1 345 678 9012",
    AddressLine: "35/D",
    StreetName: "Pine Road",
    City: "London",
    State: "England",
    Country: "UK",
    PostalCode: "W1D 5DY"
  },
  {
    CustomerID: 1005,
    CustomerName: "Emma",
    CustomerEmail: "emma@example.com",
    PhoneNumber: "+1 456 789 0123",
    AddressLine: "42/E",
    StreetName: "Cedar Lane",
    City: "Sydney",
    State: "New South Wales",
    Country: "Australia",
    PostalCode: "2000"
  },
  {
    CustomerID: 1006,
    CustomerName: "Jack",
    CustomerEmail: "jack@example.com",
    PhoneNumber: "+1 567 890 1234",
    AddressLine: "8/F",
    StreetName: "Elm Street",
    City: "Paris",
    State: "Île-de-France",
    Country: "France",
    PostalCode: "75001"
  },
  {
    CustomerID: 1007,
    CustomerName: "Sophia",
    CustomerEmail: "sophia@example.com",
    PhoneNumber: "+1 678 901 2345",
    AddressLine: "21/G",
    StreetName: "Willow Avenue",
    City: "Berlin",
    State: "Berlin",
    Country: "Germany",
    PostalCode: "10117"
  },
  {
    CustomerID: 1008,
    CustomerName: "William",
    CustomerEmail: "william@example.com",
    PhoneNumber: "+1 789 012 3456",
    AddressLine: "10/H",
    StreetName: "Birch Street",
    City: "Tokyo",
    State: "Tokyo",
    Country: "Japan",
    PostalCode: "100-0005"
  },
  {
    CustomerID: 1002,
    CustomerName: "Tom",
    CustomerEmail: "tom@example.com",
    PhoneNumber: "+1 123 456 7890",
    AddressLine: "27/B",
    StreetName: "Oak Avenue",
    City: "Los Angeles",
    State: "CA",
    Country: "USA",
    PostalCode: "90001"
  },
  {
    CustomerID: 1009,
    CustomerName: "Olivia",
    CustomerEmail: "olivia@example.com",
    PhoneNumber: "+1 890 123 4567",
    AddressLine: "3/I",
    StreetName: "Sycamore Lane",
    City: "Rio de Janeiro",
    State: "Rio de Janeiro",
    Country: "Brazil",
    PostalCode: "20010-010"
  },
  {
    CustomerID: 1010,
    CustomerName: "James",
    CustomerEmail: "james@example.com",
    PhoneNumber: "+1 901 234 5678",
    AddressLine: "17/J",
    StreetName: "Poplar Street",
    City: "Madrid",
    State: "Community of Madrid",
    Country: "Spain",
    PostalCode: "28001"
  }

];
export const ordersData = [
  {
    OrderID: 10248,
    Customer: customersData[0],
    Items: orderItems[0],
    ItemsQuantity: orderItems[0].length,
    TotalAmount: orderItems[0].reduce((total, item) => total + item.totalPrice, 0),
    Date: "May 7, 2023",
    AcceptedDate: "N/A",
    PayMethod: 'COD',
    Status: "pending",
    StatusBg: "#FB9678"
  },
  {
    OrderID: 345653,
    Customer: customersData[1],
    Items: orderItems[1],
    ItemsQuantity: orderItems[1].length,
    TotalAmount: orderItems[1].reduce((total, item) => total + item.totalPrice, 0),
    Date: "November 3, 2024",
    AcceptedDate: "November 3, 2024",
    PayMethod: 'Paypal',
    OrderItems: "Nike Air Jordan",
    Status: "complete",
    StatusBg: "#8BE78B"
  },
  {
    OrderID: 390457,
    Customer: customersData[2],
    Items: orderItems[2],
    ItemsQuantity: orderItems[2].length,
    TotalAmount: orderItems[2].reduce((total, item) => total + item.totalPrice, 0),
    Date: "April 28, 2025",
    AcceptedDate: "April 28, 2025",
    PayMethod: 'Venmo',
    OrderItems: "Puma RS-X",

    Status: "active",
    StatusBg: "#03C9D7"
  },
  {
    OrderID: 893486,
    Customer: customersData[3],
    Date: "September 9, 2022",
    AcceptedDate: "November 4, 2022",
    Items: orderItems[3],
    ItemsQuantity: orderItems[3].length,
    TotalAmount: orderItems[3].reduce((total, item) => total + item.totalPrice, 0),
    PayMethod: 'Credit Card',
    OrderItems: "Adidas Superstar",
    Status: "canceled",
    StatusBg: "#FF5C8E"
  },
  {
    OrderID: 748975,
    Customer: customersData[4],
    Items: orderItems[4],
    ItemsQuantity: orderItems[4].length,
    TotalAmount: orderItems[4].reduce((total, item) => total + item.totalPrice, 0),
    Date: "September 9, 2022",
    AcceptedDate: "rejected order",
    PayMethod: 'COD',
    OrderItems: "Converse Chuck Taylor",
    Status: "rejected",
    StatusBg: "red"
  },
  {
    OrderID: 94757,
    Customer: customersData[5],
    Items: orderItems[5],
    ItemsQuantity: orderItems[5].length,
    TotalAmount: orderItems[5].reduce((total, item) => total + item.totalPrice, 0),
    Date: "September 9, 2022",
    AcceptedDate: "September 9, 2022",
    PayMethod: 'Paypal',
    OrderItems: "Vans Old Skool",
    Status: "canceled",
    StatusBg: "#FF5C8E"
  },
  {
    OrderID: 944895,
    Customer: customersData[6],
    Items: orderItems[6],
    ItemsQuantity: orderItems[6].length,
    TotalAmount: orderItems[6].reduce((total, item) => total + item.totalPrice, 0),
    Date: "September 9, 2022",
    AcceptedDate: "September 10, 2022",
    PayMethod: 'Venmo',
    OrderItems: "New Balance 990",
    Status: "active",
    StatusBg: "#03C9D7"
  },
  {
    OrderID: 845954,
    Customer: customersData[7],
    Items: orderItems[7],
    ItemsQuantity: orderItems[7].length,
    TotalAmount: orderItems[7].reduce((total, item) => total + item.totalPrice, 0),
    Date: "September 9, 2022",
    AcceptedDate: "September 10, 2022",
    PayMethod: 'Credit Card',
    OrderItems: "Under Armour HOVR",
    Status: "complete",
    StatusBg: "#8BE78B"
  },
  {
    OrderID: 874534,
    Customer: customersData[8],
    Items: orderItems[8],
    ItemsQuantity: orderItems[8].length,
    TotalAmount: orderItems[8].reduce((total, item) => total + item.totalPrice, 0),
    Date: "September 9, 2022",
    AcceptedDate: "September 9, 2022",
    PayMethod: 'Paypal',
    OrderItems: "Reebok Nano",
    Status: "canceled",
    StatusBg: "#FF5C8E"
  },
  {
    OrderID: 38489,
    Customer: customersData[9],
    Items: orderItems[9],
    ItemsQuantity: orderItems[9].length,
    TotalAmount: orderItems[9].reduce((total, item) => total + item.totalPrice, 0),
    Date: "September 9, 2022",
    AcceptedDate: "September 9, 2024",
    PayMethod: 'Venmo',
    OrderItems: "Skechers Go Walk",
    Status: "active",
    StatusBg: "#03C9D7"
  },
  {
    OrderID: 24546,
    Customer: customersData[10],
    Items: orderItems[10],
    ItemsQuantity: orderItems[10].length,
    TotalAmount: orderItems[10].reduce((total, item) => total + item.totalPrice, 0),
    Date: "September 9, 2022",
    AcceptedDate: "September 9, 2022",
    PayMethod: 'COD',
    OrderItems: "Adidas NMD",
    Status: "complete",
    StatusBg: "#8BE78B"
  }
  
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];


export const lineChartData = [
  [
    { x: new Date(2017, 0, 1), y: 21 },
    { x: new Date(2018, 0, 1), y: 36 },
    { x: new Date(2019, 0, 1), y: 24 },
    { x: new Date(2020, 0, 1), y: 38 },
    { x: new Date(2021, 0, 1), y: 70 },
    { x: new Date(2022, 0, 1), y: 57 },
    { x: new Date(2023, 0, 1), y: 54 },
  ],
  [
    { x: new Date(2017, 0, 1), y: 28 },
    { x: new Date(2018, 0, 1), y: 44 },
    { x: new Date(2019, 0, 1), y: 78 },
    { x: new Date(2020, 0, 1), y: 50 },
    { x: new Date(2021, 0, 1), y: 66 },
    { x: new Date(2022, 0, 1), y: 48 },
    { x: new Date(2023, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2017, 0, 1), y: 10 },
    { x: new Date(2018, 0, 1), y: 20 },
    { x: new Date(2019, 0, 1), y: 30 },
    { x: new Date(2020, 0, 1), y: 90 },
    { x: new Date(2021, 0, 1), y: 50 },
    { x: new Date(2022, 0, 1), y: 70 },
    { x: new Date(2023, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];

export const recentTransactionsData = [
  {
    Method: "Paypal Transfer",
    Desc: "Money Added",
    Amount: "+$350",
    fontColor: "#00eb10",
    icon: <BsPaypal />
  },
  {
    Method: "Amex Transfer",
    Desc: "Bill Payment",
    Amount: "-$560",
    fontColor: "#e80000",
    icon: <FaCcAmex />
  },
  {
    Method: "Venmo Transfer",
    Desc: "Rent Payment",
    Amount: "+$1200",
    fontColor: "#00eb10",
    icon: <BiLogoVenmo />
  },
  {
    Method: "Bank Transfer",
    Desc: "Salary Deposit",
    Amount: "+$2500",
    fontColor: "#00eb10",
    icon: <BsBank />
  },
  {
    Method: "Cash Withdrawal",
    Desc: "ATM Withdrawal",
    Amount: "-$100",
    fontColor: "#e80000",
    icon: <BsCash />
  },
  {
    Method: "Cash Withdrawal",
    Desc: "ATM Withdrawal",
    Amount: "+$100",
    fontColor: "#00eb10",
    icon: <BsCash />
  },
  {
    Method: "Cash Withdrawal",
    Desc: "ATM Withdrawal",
    Amount: "-$100",
    fontColor: "#e80000",
    icon: <BsCash />
  },
  {
    Method: "Cash Withdrawal",
    Desc: "ATM Withdrawal",
    Amount: "-$100",
    fontColor: "#e80000",
    icon: <BsCash />
  }

];
export const SparklineAreaData = [
  { x: 1, y: 2 },
  { x: 2, y: 6 },
  { x: 3, y: 8 },
  { x: 4, y: 5 },
  { x: 5, y: 10 },

];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    width: '2',
    // marker: { visible: true, width: 10, height: 10 },
    type: 'Spline'
  },

  {
    dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expenses',
    width: '2',
    // marker: { visible: true, width: 10, height: 10 },
    type: 'Spline'
  },

  {
    dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Profit',
    width: '2',
    // marker: { visible: true, width: 10, height: 10 },
    type: 'Spline'
  },

];

export const pieChartData = [
  { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];


export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  {
    dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },


];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0, },
  minorGridLines: { width: 0, },
  majorTickLines: { width: 0, },
  minorTickLines: { width: 0, },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',

};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0, },
  majorGridLines: { width: 1, },
  minorGridLines: { width: 1, },
  minorTickLines: { width: 0, },
  labelFormat: '{value}',

};

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29004',
    Status: 'InProgress',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29005',
    Status: 'Review',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29007',
    Status: 'Validate',
    Summary: 'Validate new requirements',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-robert-king',
  },
  {
    Id: 'Task 7',
    Title: 'Task - 29009',
    Status: 'Review',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
  {
    Id: 'Task 8',
    Title: 'Task - 29010',
    Status: 'Close',
    Summary: 'Test the application in the IE browser.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 9',
    Title: 'Task - 29011',
    Status: 'Validate',
    Summary: 'Validate the issues reported by the customer.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Validation,Fix',
    Estimate: 1,
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-steven-walker',
  },
  {
    Id: 'Task 10',
    Title: 'Task - 29015',
    Status: 'Open',
    Summary: 'Show the retrieved data from the server in grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Database,SQL',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 11',
    Title: 'Task - 29016',
    Status: 'InProgress',
    Summary: 'Fix cannot open user’s default database SQL error.',
    Priority: 'Critical',
    Type: 'Bug',
    Tags: 'Database,Sql2008',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 12',
    Title: 'Task - 29017',
    Status: 'Review',
    Summary: 'Fix the issues reported in data binding.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Databinding',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-janet-leverling',
  },
  {
    Id: 'Task 13',
    Title: 'Task - 29018',
    Status: 'Close',
    Summary: 'Analyze SQL server 2008 connection.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Grid,Sql',
    Estimate: 2,
    Assignee: 'Andrew Fuller',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-andrew-fuller',
  },
  {
    Id: 'Task 14',
    Title: 'Task - 29019',
    Status: 'Validate',
    Summary: 'Validate databinding issues.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Margaret hamilt',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 15',
    Title: 'Task - 29020',
    Status: 'Close',
    Summary: 'Analyze grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze',
    Estimate: 2.5,
    Assignee: 'Margaret hamilt',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 16',
    Title: 'Task - 29021',
    Status: 'Close',
    Summary: 'Stored procedure for initial data binding of the grid.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Databinding',
    Estimate: 1.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-release, e-steven-walker',
  },
  {
    Id: 'Task 17',
    Title: 'Task - 29022',
    Status: 'Close',
    Summary: 'Analyze stored procedures.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Procedures',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 7,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 18',
    Title: 'Task - 29023',
    Status: 'Validate',
    Summary: 'Validate editing issues.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Editing',
    Estimate: 1,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-critical, e-nancy-davloio',
  },
  {
    Id: 'Task 19',
    Title: 'Task - 29024',
    Status: 'Review',
    Summary: 'Test editing functionality.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Editing,Test',
    Estimate: 0.5,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-nancy-davloio',
  },
  {
    Id: 'Task 20',
    Title: 'Task - 29025',
    Status: 'Open',
    Summary: 'Enhance editing functionality.',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Editing',
    Estimate: 3.5,
    Assignee: 'Andrew Fuller',
    RankId: 5,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-andrew-fuller',
  },
  {
    Id: 'Task 21',
    Title: 'Task - 29026',
    Status: 'InProgress',
    Summary: 'Improve the performance of the editing functionality.',
    Type: 'Epic',
    Priority: 'High',
    Tags: 'Performance',
    Estimate: 6,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#e91e64',
    ClassName: 'e-epic, e-high, e-nancy-davloio',
  },
  {
    Id: 'Task 22',
    Title: 'Task - 29027',
    Status: 'Open',
    Summary: 'Arrange web meeting with the customer to show editing demo.',
    Type: 'Others',
    Priority: 'High',
    Tags: 'Meeting,Editing',
    Estimate: 5.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-high, e-steven-walker',
  },
  {
    Id: 'Task 23',
    Title: 'Task - 29029',
    Status: 'Review',
    Summary: 'Fix the editing issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Editing,Fix',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 6,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-janet-leverling',
  },
  {
    Id: 'Task 24',
    Title: 'Task - 29030',
    Status: 'Testing',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-steven-walker',
  },
  {
    Id: 'Task 25',
    Title: 'Task - 29031',
    Status: 'Testing',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
];

export const financialChartData = [
  {
    x: new Date('2012-04-02'),
    open: 85.9757,
    high: 90.6657,
    low: 85.7685,
    close: 90.5257,
    volume: 660187068,
  },
  {
    x: new Date('2012-04-09'),
    open: 89.4471,
    high: 92,
    low: 86.2157,
    close: 86.4614,
    volume: 912634864,
  },
  {
    x: new Date('2012-04-16'),
    open: 87.1514,
    high: 88.6071,
    low: 81.4885,
    close: 81.8543,
    volume: 1221746066,
  },
  {
    x: new Date('2012-04-23'),
    open: 81.5157,
    high: 88.2857,
    low: 79.2857,
    close: 86.1428,
    volume: 965935749,
  },
  {
    x: new Date('2012-04-30'),
    open: 85.4,
    high: 85.4857,
    low: 80.7385,
    close: 80.75,
    volume: 615249365,
  },
  {
    x: new Date('2012-05-07'),
    open: 80.2143,
    high: 82.2685,
    low: 79.8185,
    close: 80.9585,
    volume: 541742692,
  },
  {
    x: new Date('2012-05-14'),
    open: 80.3671,
    high: 81.0728,
    low: 74.5971,
    close: 75.7685,
    volume: 708126233,
  },
  {
    x: new Date('2012-05-21'),
    open: 76.3571,
    high: 82.3571,
    low: 76.2928,
    close: 80.3271,
    volume: 682076215,
  },
  {
    x: new Date('2012-05-28'),
    open: 81.5571,
    high: 83.0714,
    low: 80.0743,
    close: 80.1414,
    volume: 480059584,
  },
  {
    x: new Date('2012-06-04'),
    open: 80.2143,
    high: 82.9405,
    low: 78.3571,
    close: 82.9028,
    volume: 517577005,
  },
  {
    x: new Date('2012-06-11'),
    open: 83.96,
    high: 84.0714,
    low: 80.9571,
    close: 82.0185,
    volume: 499693120,
  },
  {
    x: new Date('2012-06-18'),
    open: 81.5657,
    high: 84.2857,
    low: 81.4814,
    close: 83.1571,
    volume: 442172142,
  },
  {
    x: new Date('2012-06-25'),
    open: 82.4714,
    high: 83.4285,
    low: 80.8014,
    close: 83.4285,
    volume: 371529102,
  },
  {
    x: new Date('2012-07-02'),
    open: 83.5328,
    high: 87.7628,
    low: 83.3714,
    close: 86.5543,
    volume: 385906790,
  },
  {
    x: new Date('2012-07-09'),
    open: 86.4714,
    high: 88.5528,
    low: 84.6685,
    close: 86.4243,
    volume: 524235196,
  },
  {
    x: new Date('2012-07-16'),
    open: 86.4457,
    high: 87.9071,
    low: 86.1643,
    close: 86.3285,
    volume: 419537217,
  },
  {
    x: new Date('2012-07-23'),
    open: 84.9143,
    high: 87.0971,
    low: 81.4285,
    close: 83.5943,
    volume: 680773023,
  },
  {
    x: new Date('2012-07-30'),
    open: 84.4171,
    high: 88.2828,
    low: 83.9743,
    close: 87.9571,
    volume: 475109323,
  },
  {
    x: new Date('2012-08-06'),
    open: 88.1843,
    high: 89.2857,
    low: 87.8943,
    close: 88.8143,
    volume: 312826308,
  },
  {
    x: new Date('2012-08-13'),
    open: 89.0557,
    high: 92.5985,
    low: 89.0357,
    close: 92.5871,
    volume: 392867193,
  },
  {
    x: new Date('2012-08-20'),
    open: 92.8585,
    high: 96.4114,
    low: 92.5871,
    close: 94.746,
    volume: 708614692,
  },
  {
    x: new Date('2012-08-27'),
    open: 97.1414,
    high: 97.2671,
    low: 93.8928,
    close: 95.0343,
    volume: 383807217,
  },
  {
    x: new Date('2012-09-03'),
    open: 95.1085,
    high: 97.4971,
    low: 94.9285,
    close: 97.2057,
    volume: 355722047,
  },
  {
    x: new Date('2012-09-10'),
    open: 97.2071,
    high: 99.5685,
    low: 93.7143,
    close: 98.7543,
    volume: 724042207,
  },
  {
    x: new Date('2012-09-17'),
    open: 99.9071,
    high: 100.7243,
    low: 99.0885,
    close: 100.0135,
    volume: 500166040,
  },
  {
    x: new Date('2012-09-24'),
    open: 98.1228,
    high: 99.3028,
    low: 94.3357,
    close: 95.3007,
    volume: 714507994,
  },
  {
    x: new Date('2012-10-01'),
    open: 95.88,
    high: 96.6785,
    low: 92.95,
    close: 93.2271,
    volume: 638543622,
  },
  {
    x: new Date('2012-10-08'),
    open: 92.4114,
    high: 92.5085,
    low: 89.0785,
    close: 89.9591,
    volume: 747127724,
  },
  {
    x: new Date('2012-10-15'),
    open: 90.3357,
    high: 93.2557,
    low: 87.0885,
    close: 87.12,
    volume: 646996264,
  },
  {
    x: new Date('2012-10-22'),
    open: 87.4885,
    high: 90.7685,
    low: 84.4285,
    close: 86.2857,
    volume: 866040680,
  },
  {
    x: new Date('2012-10-29'),
    open: 84.9828,
    high: 86.1428,
    low: 82.1071,
    close: 82.4,
    volume: 367371310,
  },
  {
    x: new Date('2012-11-05'),
    open: 83.3593,
    high: 84.3914,
    low: 76.2457,
    close: 78.1514,
    volume: 919719846,
  },
  {
    x: new Date('2012-11-12'),
    open: 79.1643,
    high: 79.2143,
    low: 72.25,
    close: 75.3825,
    volume: 894382149,
  },
  {
    x: new Date('2012-11-19'),
    open: 77.2443,
    high: 81.7143,
    low: 77.1257,
    close: 81.6428,
    volume: 527416747,
  },
  {
    x: new Date('2012-11-26'),
    open: 82.2714,
    high: 84.8928,
    low: 81.7514,
    close: 83.6114,
    volume: 646467974,
  },
  {
    x: new Date('2012-12-03'),
    open: 84.8071,
    high: 84.9414,
    low: 74.09,
    close: 76.1785,
    volume: 980096264,
  },
  {
    x: new Date('2012-12-10'),
    open: 75,
    high: 78.5085,
    low: 72.2257,
    close: 72.8277,
    volume: 835016110,
  },
  {
    x: new Date('2012-12-17'),
    open: 72.7043,
    high: 76.4143,
    low: 71.6043,
    close: 74.19,
    volume: 726150329,
  },
  {
    x: new Date('2012-12-24'),
    open: 74.3357,
    high: 74.8928,
    low: 72.0943,
    close: 72.7984,
    volume: 321104733,
  },
  {
    x: new Date('2012-12-31'),
    open: 72.9328,
    high: 79.2857,
    low: 72.7143,
    close: 75.2857,
    volume: 540854882,
  },
  {
    x: new Date('2013-01-07'),
    open: 74.5714,
    high: 75.9843,
    low: 73.6,
    close: 74.3285,
    volume: 574594262,
  },
  {
    x: new Date('2013-01-14'),
    open: 71.8114,
    high: 72.9643,
    low: 69.0543,
    close: 71.4285,
    volume: 803105621,
  },
  {
    x: new Date('2013-01-21'),
    open: 72.08,
    high: 73.57,
    low: 62.1428,
    close: 62.84,
    volume: 971912560,
  },
  {
    x: new Date('2013-01-28'),
    open: 62.5464,
    high: 66.0857,
    low: 62.2657,
    close: 64.8028,
    volume: 656549587,
  },
  {
    x: new Date('2013-02-04'),
    open: 64.8443,
    high: 68.4014,
    low: 63.1428,
    close: 67.8543,
    volume: 743778993,
  },
  {
    x: new Date('2013-02-11'),
    open: 68.0714,
    high: 69.2771,
    low: 65.7028,
    close: 65.7371,
    volume: 585292366,
  },
  {
    x: new Date('2013-02-18'),
    open: 65.8714,
    high: 66.1043,
    low: 63.26,
    close: 64.4014,
    volume: 421766997,
  },
  {
    x: new Date('2013-02-25'),
    open: 64.8357,
    high: 65.0171,
    low: 61.4257,
    close: 61.4957,
    volume: 582741215,
  },
  {
    x: new Date('2013-03-04'),
    open: 61.1143,
    high: 62.2043,
    low: 59.8571,
    close: 61.6743,
    volume: 632856539,
  },
  {
    x: new Date('2013-03-11'),
    open: 61.3928,
    high: 63.4614,
    low: 60.7343,
    close: 63.38,
    volume: 572066981,
  },
  {
    x: new Date('2013-03-18'),
    open: 63.0643,
    high: 66.0143,
    low: 63.0286,
    close: 65.9871,
    volume: 552156035,
  },
  {
    x: new Date('2013-03-25'),
    open: 66.3843,
    high: 67.1357,
    low: 63.0886,
    close: 63.2371,
    volume: 390762517,
  },
  {
    x: new Date('2013-04-01'),
    open: 63.1286,
    high: 63.3854,
    low: 59.9543,
    close: 60.4571,
    volume: 505273732,
  },
  {
    x: new Date('2013-04-08'),
    open: 60.6928,
    high: 62.57,
    low: 60.3557,
    close: 61.4,
    volume: 387323550,
  },
  {
    x: new Date('2013-04-15'),
    open: 61,
    high: 61.1271,
    low: 55.0143,
    close: 55.79,
    volume: 709945604,
  },
  {
    x: new Date('2013-04-22'),
    open: 56.0914,
    high: 59.8241,
    low: 55.8964,
    close: 59.6007,
    volume: 787007506,
  },
  {
    x: new Date('2013-04-29'),
    open: 60.0643,
    high: 64.7471,
    low: 60,
    close: 64.2828,
    volume: 655020017,
  },
  {
    x: new Date('2013-05-06'),
    open: 65.1014,
    high: 66.5357,
    low: 64.3543,
    close: 64.71,
    volume: 545488533,
  },
  {
    x: new Date('2013-05-13'),
    open: 64.5014,
    high: 65.4143,
    low: 59.8428,
    close: 61.8943,
    volume: 633706550,
  },
  {
    x: new Date('2013-05-20'),
    open: 61.7014,
    high: 64.05,
    low: 61.4428,
    close: 63.5928,
    volume: 494379068,
  },
  {
    x: new Date('2013-05-27'),
    open: 64.2714,
    high: 65.3,
    low: 62.7714,
    close: 64.2478,
    volume: 362907830,
  },
  {
    x: new Date('2013-06-03'),
    open: 64.39,
    high: 64.9186,
    low: 61.8243,
    close: 63.1158,
    volume: 443249793,
  },
  {
    x: new Date('2013-06-10'),
    open: 63.5328,
    high: 64.1541,
    low: 61.2143,
    close: 61.4357,
    volume: 389680092,
  },
  {
    x: new Date('2013-06-17'),
    open: 61.6343,
    high: 62.2428,
    low: 58.3,
    close: 59.0714,
    volume: 400384818,
  },
  {
    x: new Date('2013-06-24'),
    open: 58.2,
    high: 58.38,
    low: 55.5528,
    close: 56.6471,
    volume: 519314826,
  },
  {
    x: new Date('2013-07-01'),
    open: 57.5271,
    high: 60.47,
    low: 57.3171,
    close: 59.6314,
    volume: 343878841,
  },
  {
    x: new Date('2013-07-08'),
    open: 60.0157,
    high: 61.3986,
    low: 58.6257,
    close: 60.93,
    volume: 384106977,
  },
  {
    x: new Date('2013-07-15'),
    open: 60.7157,
    high: 62.1243,
    low: 60.5957,
    close: 60.7071,
    volume: 286035513,
  },
  {
    x: new Date('2013-07-22'),
    open: 61.3514,
    high: 63.5128,
    low: 59.8157,
    close: 62.9986,
    volume: 395816827,
  },
  {
    x: new Date('2013-07-29'),
    open: 62.9714,
    high: 66.1214,
    low: 62.8857,
    close: 66.0771,
    volume: 339668858,
  },
  {
    x: new Date('2013-08-05'),
    open: 66.3843,
    high: 67.4128,
    low: 64.8071,
    close: 64.9214,
    volume: 368486781,
  },
  {
    x: new Date('2013-08-12'),
    open: 65.2657,
    high: 72.0357,
    low: 65.2328,
    close: 71.7614,
    volume: 711563584,
  },
  {
    x: new Date('2013-08-19'),
    open: 72.0485,
    high: 73.3914,
    low: 71.1714,
    close: 71.5743,
    volume: 417119660,
  },
  {
    x: new Date('2013-08-26'),
    open: 71.5357,
    high: 72.8857,
    low: 69.4286,
    close: 69.6023,
    volume: 392805888,
  },
  {
    x: new Date('2013-09-02'),
    open: 70.4428,
    high: 71.7485,
    low: 69.6214,
    close: 71.1743,
    volume: 317244380,
  },
  {
    x: new Date('2013-09-09'),
    open: 72.1428,
    high: 72.56,
    low: 66.3857,
    close: 66.4143,
    volume: 669376320,
  },
  {
    x: new Date('2013-09-16'),
    open: 65.8571,
    high: 68.3643,
    low: 63.8886,
    close: 66.7728,
    volume: 625142677,
  },
  {
    x: new Date('2013-09-23'),
    open: 70.8714,
    high: 70.9871,
    low: 68.6743,
    close: 68.9643,
    volume: 475274537,
  },
  {
    x: new Date('2013-09-30'),
    open: 68.1786,
    high: 70.3357,
    low: 67.773,
    close: 69.0043,
    volume: 368198906,
  },
  {
    x: new Date('2013-10-07'),
    open: 69.5086,
    high: 70.5486,
    low: 68.3257,
    close: 70.4017,
    volume: 361437661,
  },
  {
    x: new Date('2013-10-14'),
    open: 69.9757,
    high: 72.7514,
    low: 69.9071,
    close: 72.6985,
    volume: 342694379,
  },
  {
    x: new Date('2013-10-21'),
    open: 73.11,
    high: 76.1757,
    low: 72.5757,
    close: 75.1368,
    volume: 490458997,
  },
  {
    x: new Date('2013-10-28'),
    open: 75.5771,
    high: 77.0357,
    low: 73.5057,
    close: 74.29,
    volume: 508130174,
  },
  {
    x: new Date('2013-11-04'),
    open: 74.4428,
    high: 75.555,
    low: 73.1971,
    close: 74.3657,
    volume: 318132218,
  },
  {
    x: new Date('2013-11-11'),
    open: 74.2843,
    high: 75.6114,
    low: 73.4871,
    close: 74.9987,
    volume: 306711021,
  },
  {
    x: new Date('2013-11-18'),
    open: 74.9985,
    high: 75.3128,
    low: 73.3814,
    close: 74.2571,
    volume: 282778778,
  },
  {
    x: new Date('2013-11-25'),
    open: 74.4314,
    high: 79.7614,
    low: 74.4285,
    close: 79.4385,
    volume: 327405302,
  },
  {
    x: new Date('2013-12-02'),
    open: 79.7143,
    high: 82.1622,
    low: 78.6885,
    close: 80.0028,
    volume: 522055676,
  },
  {
    x: new Date('2013-12-09'),
    open: 80.1286,
    high: 81.5671,
    low: 79.0957,
    close: 79.2043,
    volume: 387271099,
  },
  {
    x: new Date('2013-12-16'),
    open: 79.2885,
    high: 80.377,
    low: 76.9714,
    close: 78.4314,
    volume: 457580848,
  },
  {
    x: new Date('2013-12-23'),
    open: 81.1428,
    high: 81.6971,
    low: 79.9285,
    close: 80.0128,
    volume: 274253503,
  },
  {
    x: new Date('2013-12-30'),
    open: 79.6371,
    high: 80.1828,
    low: 77.2043,
    close: 77.2828,
    volume: 275734934,
  },
  {
    x: new Date('2014-01-06'),
    open: 76.7785,
    high: 78.1228,
    low: 75.8728,
    close: 76.1343,
    volume: 393462075,
  },
  {
    x: new Date('2014-01-13'),
    open: 75.7014,
    high: 80.0285,
    low: 75.6971,
    close: 77.2385,
    volume: 439557459,
  },
  {
    x: new Date('2014-01-20'),
    open: 77.2843,
    high: 79.6128,
    low: 77.2028,
    close: 78.01,
    volume: 385585525,
  },
  {
    x: new Date('2014-01-27'),
    open: 78.5814,
    high: 79.2571,
    low: 70.5071,
    close: 71.5143,
    volume: 813702575,
  },
  {
    x: new Date('2014-02-03'),
    open: 71.8014,
    high: 74.7042,
    low: 71.3286,
    close: 74.24,
    volume: 434447570,
  },
  {
    x: new Date('2014-02-10'),
    open: 74.0943,
    high: 77.9971,
    low: 74,
    close: 77.7128,
    volume: 379011880,
  },
  {
    x: new Date('2014-02-17'),
    open: 78,
    high: 78.7414,
    low: 74.9428,
    close: 75.0357,
    volume: 289609443,
  },
  {
    x: new Date('2014-02-24'),
    open: 74.7357,
    high: 76.1071,
    low: 73.6571,
    close: 75.1771,
    volume: 367569649,
  },
  {
    x: new Date('2014-03-03'),
    open: 74.7743,
    high: 76.3928,
    low: 74.6871,
    close: 75.7771,
    volume: 275972640,
  },
  {
    x: new Date('2014-03-10'),
    open: 75.48,
    high: 77.0943,
    low: 74.7143,
    close: 74.9557,
    volume: 287729528,
  },
  {
    x: new Date('2014-03-17'),
    open: 75.3857,
    high: 76.6057,
    low: 75.0286,
    close: 76.1243,
    volume: 303531061,
  },
  {
    x: new Date('2014-03-24'),
    open: 76.9171,
    high: 78.4285,
    low: 76.3214,
    close: 76.6943,
    volume: 338387221,
  },
  {
    x: new Date('2014-03-31'),
    open: 77.0328,
    high: 77.64,
    low: 75.7971,
    close: 75.9743,
    volume: 245749459,
  },
  {
    x: new Date('2014-04-07'),
    open: 75.4314,
    high: 76.0343,
    low: 73.8771,
    close: 74.23,
    volume: 312008139,
  },
  {
    x: new Date('2014-04-14'),
    open: 74.5571,
    high: 75.3943,
    low: 73.0471,
    close: 74.9914,
    volume: 241209047,
  },
  {
    x: new Date('2014-04-21'),
    open: 75.0485,
    high: 81.7128,
    low: 74.8514,
    close: 81.7057,
    volume: 476651465,
  },
  {
    x: new Date('2014-04-28'),
    open: 81.8285,
    high: 85.6328,
    low: 81.7928,
    close: 84.6543,
    volume: 473712709,
  },
  {
    x: new Date('2014-05-05'),
    open: 84.3057,
    high: 86.3442,
    low: 82.9043,
    close: 83.6489,
    volume: 365535013,
  },
  {
    x: new Date('2014-05-12'),
    open: 83.9271,
    high: 85.3614,
    low: 83.6285,
    close: 85.3585,
    volume: 260931637,
  },
  {
    x: new Date('2014-05-19'),
    open: 85.4071,
    high: 87.8184,
    low: 85.3328,
    close: 87.7328,
    volume: 294298274,
  },
  {
    x: new Date('2014-05-26'),
    open: 87.9828,
    high: 92.0243,
    low: 87.9471,
    close: 90.4285,
    volume: 400232120,
  },
  {
    x: new Date('2014-06-02'),
    open: 90.5657,
    high: 93.0371,
    low: 88.9285,
    close: 92.2243,
    volume: 412158024,
  },
  {
    x: new Date('2014-06-09'),
    open: 92.7,
    high: 95.05,
    low: 90.88,
    close: 91.28,
    volume: 292422550,
  },
  {
    x: new Date('2014-06-16'),
    open: 91.51,
    high: 92.75,
    low: 90.9,
    close: 90.91,
    volume: 234325480,
  },
  {
    x: new Date('2014-06-23'),
    open: 91.32,
    high: 92,
    low: 89.65,
    close: 91.98,
    volume: 213712160,
  },
  {
    x: new Date('2014-06-30'),
    open: 92.1,
    high: 94.1,
    low: 92.09,
    close: 94.03,
    volume: 138936570,
  },
  {
    x: new Date('2014-07-07'),
    open: 94.14,
    high: 96.8,
    low: 93.52,
    close: 95.22,
    volume: 229782440,
  },
  {
    x: new Date('2014-07-14'),
    open: 95.86,
    high: 97.1,
    low: 92.57,
    close: 94.43,
    volume: 248104390,
  },
  {
    x: new Date('2014-07-21'),
    open: 94.99,
    high: 97.88,
    low: 93.72,
    close: 97.671,
    volume: 273021350,
  },
  {
    x: new Date('2014-07-28'),
    open: 97.82,
    high: 99.44,
    low: 94.81,
    close: 96.13,
    volume: 235868530,
  },
  {
    x: new Date('2014-08-04'),
    open: 96.37,
    high: 96.58,
    low: 93.28,
    close: 94.74,
    volume: 222522120,
  },
  {
    x: new Date('2014-08-11'),
    open: 95.27,
    high: 98.19,
    low: 94.8355,
    close: 97.98,
    volume: 178806580,
  },
  {
    x: new Date('2014-08-18'),
    open: 98.49,
    high: 101.47,
    low: 97.98,
    close: 101.32,
    volume: 246446280,
  },
  {
    x: new Date('2014-08-25'),
    open: 101.79,
    high: 102.9,
    low: 100.7,
    close: 102.5,
    volume: 232858250,
  },
  {
    x: new Date('2014-09-01'),
    open: 103.06,
    high: 103.74,
    low: 97.79,
    close: 98.97,
    volume: 322045910,
  },
  {
    x: new Date('2014-09-08'),
    open: 99.3,
    high: 103.08,
    low: 96.14,
    close: 101.66,
    volume: 460851840,
  },
  {
    x: new Date('2014-09-15'),
    open: 102.81,
    high: 103.05,
    low: 98.89,
    close: 100.96,
    volume: 296425730,
  },
  {
    x: new Date('2014-09-22'),
    open: 101.8,
    high: 102.94,
    low: 97.72,
    close: 100.75,
    volume: 337617850,
  },
  {
    x: new Date('2014-09-29'),
    open: 98.65,
    high: 101.54,
    low: 98.04,
    close: 99.62,
    volume: 246900230,
  },
  {
    x: new Date('2014-10-06'),
    open: 99.95,
    high: 102.38,
    low: 98.31,
    close: 100.73,
    volume: 279646740,
  },
  {
    x: new Date('2014-10-13'),
    open: 101.33,
    high: 101.78,
    low: 95.18,
    close: 97.67,
    volume: 356408760,
  },
  {
    x: new Date('2014-10-20'),
    open: 98.315,
    high: 105.49,
    low: 98.22,
    close: 105.22,
    volume: 355329760,
  },
  {
    x: new Date('2014-10-27'),
    open: 104.85,
    high: 108.04,
    low: 104.7,
    close: 108,
    volume: 219443560,
  },
  {
    x: new Date('2014-11-03'),
    open: 108.22,
    high: 110.3,
    low: 107.72,
    close: 109.01,
    volume: 199332700,
  },
  {
    x: new Date('2014-11-10'),
    open: 109.02,
    high: 114.19,
    low: 108.4,
    close: 114.18,
    volume: 203976340,
  },
  {
    x: new Date('2014-11-17'),
    open: 114.27,
    high: 117.57,
    low: 113.3,
    close: 116.47,
    volume: 232574480,
  },
  {
    x: new Date('2014-11-24'),
    open: 116.85,
    high: 119.75,
    low: 116.62,
    close: 118.93,
    volume: 181158620,
  },
  {
    x: new Date('2014-12-01'),
    open: 118.81,
    high: 119.25,
    low: 111.27,
    close: 115,
    volume: 266118290,
  },
  {
    x: new Date('2014-12-08'),
    open: 114.1,
    high: 114.85,
    low: 109.35,
    close: 109.73,
    volume: 259311140,
  },
  {
    x: new Date('2014-12-15'),
    open: 110.7,
    high: 113.24,
    low: 106.26,
    close: 111.78,
    volume: 326382400,
  },
  {
    x: new Date('2014-12-22'),
    open: 112.16,
    high: 114.52,
    low: 111.97,
    close: 113.99,
    volume: 119248900,
  },
  {
    x: new Date('2014-12-29'),
    open: 113.79,
    high: 114.77,
    low: 107.35,
    close: 109.33,
    volume: 151780640,
  },
  {
    x: new Date('2015-01-05'),
    open: 108.29,
    high: 113.25,
    low: 104.63,
    close: 112.01,
    volume: 282690970,
  },
  {
    x: new Date('2015-01-12'),
    open: 112.6,
    high: 112.8,
    low: 105.2,
    close: 105.99,
    volume: 303531140,
  },
  {
    x: new Date('2015-01-19'),
    open: 107.84,
    high: 113.75,
    low: 106.5,
    close: 112.98,
    volume: 198362640,
  },
  {
    x: new Date('2015-01-26'),
    open: 113.74,
    high: 120,
    low: 109.03,
    close: 117.16,
    volume: 461747290,
  },
  {
    x: new Date('2015-02-02'),
    open: 118.05,
    high: 120.51,
    low: 116.08,
    close: 118.93,
    volume: 270190470,
  },
  {
    x: new Date('2015-02-09'),
    open: 118.55,
    high: 127.48,
    low: 118.43,
    close: 127.08,
    volume: 301354470,
  },
  {
    x: new Date('2015-02-16'),
    open: 127.49,
    high: 129.5,
    low: 126.92,
    close: 129.495,
    volume: 193883960,
  },
  {
    x: new Date('2015-02-23'),
    open: 130.02,
    high: 133.6,
    low: 126.61,
    close: 128.46,
    volume: 369856960,
  },
  {
    x: new Date('2015-03-02'),
    open: 129.25,
    high: 130.28,
    low: 125.76,
    close: 126.6,
    volume: 246472020,
  },
  {
    x: new Date('2015-03-09'),
    open: 127.96,
    high: 129.57,
    low: 121.63,
    close: 123.59,
    volume: 325921230,
  },
  {
    x: new Date('2015-03-16'),
    open: 123.88,
    high: 129.2451,
    low: 122.87,
    close: 125.9,
    volume: 266016400,
  },
  {
    x: new Date('2015-03-23'),
    open: 127.12,
    high: 128.04,
    low: 122.6,
    close: 123.25,
    volume: 208731730,
  },
  {
    x: new Date('2015-03-30'),
    open: 124.05,
    high: 126.49,
    low: 123.1,
    close: 125.32,
    volume: 161628950,
  },
  {
    x: new Date('2015-04-06'),
    open: 124.47,
    high: 128.1218,
    low: 124.33,
    close: 127.1,
    volume: 181454510,
  },
  {
    x: new Date('2015-04-13'),
    open: 128.37,
    high: 128.57,
    low: 124.46,
    close: 124.75,
    volume: 170090870,
  },
  {
    x: new Date('2015-04-20'),
    open: 125.57,
    high: 130.63,
    low: 125.17,
    close: 130.28,
    volume: 206698310,
  },
  {
    x: new Date('2015-04-27'),
    open: 132.31,
    high: 134.54,
    low: 124.58,
    close: 128.95,
    volume: 417115180,
  },
  {
    x: new Date('2015-05-04'),
    open: 129.5,
    high: 130.57,
    low: 123.36,
    close: 127.62,
    volume: 270197900,
  },
  {
    x: new Date('2015-05-11'),
    open: 127.39,
    high: 129.49,
    low: 124.82,
    close: 128.77,
    volume: 207858180,
  },
  {
    x: new Date('2015-05-18'),
    open: 128.38,
    high: 132.97,
    low: 128.36,
    close: 132.54,
    volume: 216438970,
  },
  {
    x: new Date('2015-05-25'),
    open: 132.6,
    high: 132.91,
    low: 129.12,
    close: 130.28,
    volume: 197468800,
  },
  {
    x: new Date('2015-06-01'),
    open: 131.2,
    high: 131.39,
    low: 128.36,
    close: 128.65,
    volume: 170465550,
  },
  {
    x: new Date('2015-06-08'),
    open: 128.9,
    high: 130.18,
    low: 125.62,
    close: 127.17,
    volume: 219812710,
  },
  {
    x: new Date('2015-06-15'),
    open: 126.1,
    high: 128.31,
    low: 125.71,
    close: 126.6,
    volume: 197925030,
  },
  {
    x: new Date('2015-06-22'),
    open: 127.49,
    high: 129.8,
    low: 126.51,
    close: 126.75,
    volume: 195104520,
  },
  {
    x: new Date('2015-06-29'),
    open: 125.46,
    high: 126.94,
    low: 124.48,
    close: 126.44,
    volume: 150747530,
  },
  {
    x: new Date('2015-07-06'),
    open: 124.94,
    high: 126.23,
    low: 119.22,
    close: 123.28,
    volume: 274904180,
  },
  {
    x: new Date('2015-07-13'),
    open: 125.03,
    high: 129.62,
    low: 124.32,
    close: 129.62,
    volume: 188579340,
  },
  {
    x: new Date('2015-07-20'),
    open: 130.97,
    high: 132.97,
    low: 121.99,
    close: 124.5,
    volume: 336423370,
  },
  {
    x: new Date('2015-07-27'),
    open: 123.09,
    high: 123.91,
    low: 120.91,
    close: 121.3,
    volume: 191087840,
  },
  {
    x: new Date('2015-08-03'),
    open: 121.5,
    high: 122.57,
    low: 112.1,
    close: 115.52,
    volume: 383883210,
  },
  {
    x: new Date('2015-08-10'),
    open: 116.53,
    high: 119.99,
    low: 109.63,
    close: 115.96,
    volume: 344549090,
  },
  {
    x: new Date('2015-08-17'),
    open: 116.04,
    high: 117.65,
    low: 105.645,
    close: 105.76,
    volume: 318855760,
  },
  {
    x: new Date('2015-08-24'),
    open: 110.87,
    high: 113.31,
    low: 102.6,
    close: 113.29,
    volume: 498047270,
  },
  {
    x: new Date('2015-08-31'),
    open: 112.03,
    high: 114.53,
    low: 107.36,
    close: 109.27,
    volume: 297402060,
  },
  {
    x: new Date('2015-09-07'),
    open: 111.65,
    high: 114.21,
    low: 109.77,
    close: 114.21,
    volume: 251859600,
  },
  {
    x: new Date('2015-09-14'),
    open: 116.58,
    high: 116.89,
    low: 111.87,
    close: 113.45,
    volume: 276281980,
  },
  {
    x: new Date('2015-09-21'),
    open: 113.67,
    high: 116.69,
    low: 112.37,
    close: 114.71,
    volume: 238617740,
  },
  {
    x: new Date('2015-09-28'),
    open: 113.85,
    high: 114.57,
    low: 107.31,
    close: 110.38,
    volume: 313017610,
  },
  {
    x: new Date('2015-10-05'),
    open: 109.88,
    high: 112.28,
    low: 108.21,
    close: 112.12,
    volume: 261920950,
  },
  {
    x: new Date('2015-10-12'),
    open: 112.73,
    high: 112.75,
    low: 109.56,
    close: 111.04,
    volume: 184208970,
  },
  {
    x: new Date('2015-10-19'),
    open: 110.8,
    high: 119.228,
    low: 110.11,
    close: 119.08,
    volume: 221612230,
  },
  {
    x: new Date('2015-10-26'),
    open: 118.08,
    high: 121.22,
    low: 113.99,
    close: 119.5,
    volume: 319660750,
  },
  {
    x: new Date('2015-11-02'),
    open: 119.87,
    high: 123.82,
    low: 119.61,
    close: 121.06,
    volume: 194953700,
  },
  {
    x: new Date('2015-11-09'),
    open: 120.96,
    high: 121.81,
    low: 112.27,
    close: 112.34,
    volume: 216054740,
  },
  {
    x: new Date('2015-11-16'),
    open: 111.38,
    high: 119.92,
    low: 111,
    close: 119.3,
    volume: 189492500,
  },
  {
    x: new Date('2015-11-23'),
    open: 119.27,
    high: 119.73,
    low: 117.12,
    close: 117.81,
    volume: 109582040,
  },
  {
    x: new Date('2015-11-30'),
    open: 117.99,
    high: 119.41,
    low: 114.22,
    close: 119.03,
    volume: 205415620,
  },
  {
    x: new Date('2015-12-07'),
    open: 118.98,
    high: 119.86,
    low: 112.851,
    close: 113.18,
    volume: 188609110,
  },
  {
    x: new Date('2015-12-14'),
    open: 112.18,
    high: 112.8,
    low: 105.81,
    close: 106.03,
    volume: 314856190,
  },
  {
    x: new Date('2015-12-21'),
    open: 107.28,
    high: 109,
    low: 105.57,
    close: 108.03,
    volume: 126450510,
  },
  {
    x: new Date('2015-12-28'),
    open: 107.59,
    high: 109.43,
    low: 104.82,
    close: 105.26,
    volume: 123621760,
  },
  {
    x: new Date('2016-01-04'),
    open: 102.61,
    high: 105.85,
    low: 96.43,
    close: 96.96,
    volume: 343000960,
  },
  {
    x: new Date('2016-01-11'),
    open: 98.97,
    high: 101.19,
    low: 95.36,
    close: 97.13,
    volume: 303375940,
  },
  {
    x: new Date('2016-01-18'),
    open: 98.41,
    high: 101.46,
    low: 93.42,
    close: 101.42,
    volume: 242982970,
  },
  {
    x: new Date('2016-01-25'),
    open: 101.52,
    high: 101.53,
    low: 92.39,
    close: 97.34,
    volume: 376481100,
  },
  {
    x: new Date('2016-02-01'),
    open: 96.47,
    high: 97.33,
    low: 93.69,
    close: 94.02,
    volume: 216608840,
  },
  {
    x: new Date('2016-02-08'),
    open: 93.13,
    high: 96.35,
    low: 92.59,
    close: 93.99,
    volume: 230794620,
  },
  {
    x: new Date('2016-02-15'),
    open: 95.02,
    high: 98.89,
    low: 94.61,
    close: 96.04,
    volume: 167001070,
  },
  {
    x: new Date('2016-02-22'),
    open: 96.31,
    high: 98.0237,
    low: 93.32,
    close: 96.91,
    volume: 158759600,
  },
  {
    x: new Date('2016-02-29'),
    open: 96.86,
    high: 103.75,
    low: 96.65,
    close: 103.01,
    volume: 201482180,
  },
  {
    x: new Date('2016-03-07'),
    open: 102.39,
    high: 102.83,
    low: 100.15,
    close: 102.26,
    volume: 155437450,
  },
  {
    x: new Date('2016-03-14'),
    open: 101.91,
    high: 106.5,
    low: 101.78,
    close: 105.92,
    volume: 181323210,
  },
  {
    x: new Date('2016-03-21'),
    open: 105.93,
    high: 107.65,
    low: 104.89,
    close: 105.67,
    volume: 119054360,
  },
  {
    x: new Date('2016-03-28'),
    open: 106,
    high: 110.42,
    low: 104.88,
    close: 109.99,
    volume: 147641240,
  },
  {
    x: new Date('2016-04-04'),
    open: 110.42,
    high: 112.19,
    low: 108.121,
    close: 108.66,
    volume: 145351790,
  },
  {
    x: new Date('2016-04-11'),
    open: 108.97,
    high: 112.39,
    low: 108.66,
    close: 109.85,
    volume: 161518860,
  },
  {
    x: new Date('2016-04-18'),
    open: 108.89,
    high: 108.95,
    low: 104.62,
    close: 105.68,
    volume: 188775240,
  },
  {
    x: new Date('2016-04-25'),
    open: 105,
    high: 105.65,
    low: 92.51,
    close: 93.74,
    volume: 345910030,
  },
  {
    x: new Date('2016-05-02'),
    open: 93.965,
    high: 95.9,
    low: 91.85,
    close: 92.72,
    volume: 225114110,
  },
  {
    x: new Date('2016-05-09'),
    open: 93,
    high: 93.77,
    low: 89.47,
    close: 90.52,
    volume: 215596350,
  },
  {
    x: new Date('2016-05-16'),
    open: 92.39,
    high: 95.43,
    low: 91.65,
    close: 95.22,
    volume: 212312980,
  },
  {
    x: new Date('2016-05-23'),
    open: 95.87,
    high: 100.73,
    low: 95.67,
    close: 100.35,
    volume: 203902650,
  },
  {
    x: new Date('2016-05-30'),
    open: 99.6,
    high: 100.4,
    low: 96.63,
    close: 97.92,
    volume: 140064910,
  },
  {
    x: new Date('2016-06-06'),
    open: 97.99,
    high: 101.89,
    low: 97.55,
    close: 98.83,
    volume: 124731320,
  },
  {
    x: new Date('2016-06-13'),
    open: 98.69,
    high: 99.12,
    low: 95.3,
    close: 95.33,
    volume: 191017280,
  },
  {
    x: new Date('2016-06-20'),
    open: 96,
    high: 96.89,
    low: 92.65,
    close: 93.4,
    volume: 206149160,
  },
  {
    x: new Date('2016-06-27'),
    open: 93,
    high: 96.465,
    low: 91.5,
    close: 95.89,
    volume: 184254460,
  },
  {
    x: new Date('2016-07-04'),
    open: 95.39,
    high: 96.89,
    low: 94.37,
    close: 96.68,
    volume: 111769640,
  },
  {
    x: new Date('2016-07-11'),
    open: 96.75,
    high: 99.3,
    low: 96.73,
    close: 98.78,
    volume: 142244590,
  },
  {
    x: new Date('2016-07-18'),
    open: 98.7,
    high: 101,
    low: 98.31,
    close: 98.66,
    volume: 147358320,
  },
  {
    x: new Date('2016-07-25'),
    open: 98.25,
    high: 104.55,
    low: 96.42,
    close: 104.21,
    volume: 252358930,
  },
  {
    x: new Date('2016-08-01'),
    open: 104.41,
    high: 107.65,
    low: 104,
    close: 107.48,
    volume: 168265830,
  },
  {
    x: new Date('2016-08-08'),
    open: 107.52,
    high: 108.94,
    low: 107.16,
    close: 108.18,
    volume: 124255340,
  },
  {
    x: new Date('2016-08-15'),
    open: 108.14,
    high: 110.23,
    low: 108.08,
    close: 109.36,
    volume: 131814920,
  },
  {
    x: new Date('2016-08-22'),
    open: 108.86,
    high: 109.32,
    low: 106.31,
    close: 106.94,
    volume: 123373540,
  },
  {
    x: new Date('2016-08-29'),
    open: 106.62,
    high: 108,
    low: 105.5,
    close: 107.73,
    volume: 134426100,
  },
  {
    x: new Date('2016-09-05'),
    open: 107.9,
    high: 108.76,
    low: 103.13,
    close: 103.13,
    volume: 168312530,
  },
  {
    x: new Date('2016-09-12'),
    open: 102.65,
    high: 116.13,
    low: 102.53,
    close: 114.92,
    volume: 388543710,
  },
  {
    x: new Date('2016-09-19'),
    open: 115.19,
    high: 116.18,
    low: 111.55,
    close: 112.71,
    volume: 200842480,
  },
  {
    x: new Date('2016-09-26'),
    open: 111.64,
    high: 114.64,
    low: 111.55,
    close: 113.05,
    volume: 156186800,
  },
  {
    x: new Date('2016-10-03'),
    open: 112.71,
    high: 114.56,
    low: 112.28,
    close: 114.06,
    volume: 125587350,
  },
  {
    x: new Date('2016-10-10'),
    open: 115.02,
    high: 118.69,
    low: 114.72,
    close: 117.63,
    volume: 208231690,
  },
  {
    x: new Date('2016-10-17'),
    open: 117.33,
    high: 118.21,
    low: 113.8,
    close: 116.6,
    volume: 114497020,
  },
  {
    x: new Date('2016-10-24'),
    open: 117.1,
    high: 118.36,
    low: 113.31,
    close: 113.72,
    volume: 204530120,
  },
  {
    x: new Date('2016-10-31'),
    open: 113.65,
    high: 114.23,
    low: 108.11,
    close: 108.84,
    volume: 155287280,
  },
  {
    x: new Date('2016-11-07'),
    open: 110.08,
    high: 111.72,
    low: 105.83,
    close: 108.43,
    volume: 206825070,
  },
  {
    x: new Date('2016-11-14'),
    open: 107.71,
    high: 110.54,
    low: 104.08,
    close: 110.06,
    volume: 197790040,
  },
  {
    x: new Date('2016-11-21'),
    open: 110.12,
    high: 112.42,
    low: 110.01,
    close: 111.79,
    volume: 93992370,
  },
  {
    x: new Date('2016-11-28'),
    open: 111.43,
    high: 112.465,
    low: 108.85,
    close: 109.9,
    volume: 155229390,
  },
  {
    x: new Date('2016-12-05'),
    open: 110,
    high: 114.7,
    low: 108.25,
    close: 113.95,
    volume: 151624650,
  },
  {
    x: new Date('2016-12-12'),
    open: 113.29,
    high: 116.73,
    low: 112.49,
    close: 115.97,
    volume: 194003220,
  },
  {
    x: new Date('2016-12-19'),
    open: 115.8,
    high: 117.5,
    low: 115.59,
    close: 116.52,
    volume: 113106370,
  },
  {
    x: new Date('2016-12-26'),
    open: 116.52,
    high: 118.0166,
    low: 115.43,
    close: 115.82,
    volume: 84354060,
  },
  {
    x: new Date('2017-01-02'),
    open: 115.8,
    high: 118.16,
    low: 114.76,
    close: 117.91,
    volume: 103680760,
  },
  {
    x: new Date('2017-01-09'),
    open: 117.95,
    high: 119.93,
    low: 117.94,
    close: 119.04,
    volume: 138446660,
  },
  {
    x: new Date('2017-01-16'),
    open: 118.34,
    high: 120.5,
    low: 118.22,
    close: 120,
    volume: 113576380,
  },
  {
    x: new Date('2017-01-23'),
    open: 120,
    high: 122.44,
    low: 119.5,
    close: 121.95,
    volume: 124406640,
  },
  {
    x: new Date('2017-01-30'),
    open: 120.93,
    high: 130.49,
    low: 120.62,
    close: 129.08,
    volume: 248063580,
  },
  {
    x: new Date('2017-02-06'),
    open: 129.13,
    high: 132.94,
    low: 128.9,
    close: 132.12,
    volume: 136252280,
  },
  {
    x: new Date('2017-02-13'),
    open: 133.08,
    high: 136.27,
    low: 132.75,
    close: 135.72,
    volume: 136326260,
  },
  {
    x: new Date('2017-02-20'),
    open: 136.23,
    high: 137.48,
    low: 135.28,
    close: 136.66,
    volume: 87773190,
  },
  {
    x: new Date('2017-02-27'),
    open: 137.14,
    high: 140.2786,
    low: 136.28,
    close: 139.78,
    volume: 127757050,
  },
  {
    x: new Date('2017-03-06'),
    open: 139.365,
    high: 139.98,
    low: 137.05,
    close: 139.14,
    volume: 99061270,
  },
  {
    x: new Date('2017-03-13'),
    open: 138.85,
    high: 141.02,
    low: 138.82,
    close: 139.99,
    volume: 120881720,
  },
  {
    x: new Date('2017-03-20'),
    open: 140.4,
    high: 142.8,
    low: 139.73,
    close: 140.64,
    volume: 129178500,
  },
  {
    x: new Date('2017-03-27'),
    open: 139.39,
    high: 144.5,
    low: 138.62,
    close: 143.66,
    volume: 126819590,
  },
  {
    x: new Date('2017-04-03'),
    open: 143.71,
    high: 145.46,
    low: 143.05,
    close: 143.34,
    volume: 105274540,
  },
  {
    x: new Date('2017-04-10'),
    open: 143.6,
    high: 143.8792,
    low: 140.06,
    close: 141.05,
    volume: 87342130,
  },
  {
    x: new Date('2017-04-17'),
    open: 141.48,
    high: 142.92,
    low: 140.45,
    close: 142.27,
    volume: 89092650,
  },
  {
    x: new Date('2017-04-24'),
    open: 143.5,
    high: 144.9,
    low: 143.18,
    close: 143.65,
    volume: 90423600,
  },
  {
    x: new Date('2017-05-01'),
    open: 145.1,
    high: 148.98,
    low: 144.27,
    close: 148.96,
    volume: 173861760,
  },
  {
    x: new Date('2017-05-08'),
    open: 149.03,
    high: 156.42,
    low: 149.03,
    close: 156.1,
    volume: 173087500,
  },
  {
    x: new Date('2017-05-15'),
    open: 156.01,
    high: 156.65,
    low: 149.71,
    close: 153.06,
    volume: 156993820,
  },
  {
    x: new Date('2017-05-22'),
    open: 154,
    high: 154.9,
    low: 152.67,
    close: 153.61,
    volume: 103151450,
  },
  {
    x: new Date('2017-05-29'),
    open: 153.42,
    high: 155.45,
    low: 152.22,
    close: 155.45,
    volume: 88670120,
  },
  {
    x: new Date('2017-06-05'),
    open: 154.34,
    high: 155.98,
    low: 146.02,
    close: 148.98,
    volume: 158814040,
  },
  {
    x: new Date('2017-06-12'),
    open: 145.74,
    high: 147.5,
    low: 142.2,
    close: 142.27,
    volume: 219638930,
  },
  {
    x: new Date('2017-06-19'),
    open: 143.66,
    high: 147.16,
    low: 143.66,
    close: 146.28,
    volume: 132832660,
  },
  {
    x: new Date('2017-06-26'),
    open: 147.17,
    high: 148.28,
    low: 142.28,
    close: 144.02,
    volume: 126890110,
  },
  {
    x: new Date('2017-07-03'),
    open: 144.88,
    high: 145.3001,
    low: 142.41,
    close: 144.18,
    volume: 78465450,
  },
  {
    x: new Date('2017-07-10'),
    open: 144.11,
    high: 149.33,
    low: 143.37,
    close: 149.04,
    volume: 109759170,
  },
  {
    x: new Date('2017-07-17'),
    open: 148.82,
    high: 151.74,
    low: 148.57,
    close: 150.27,
    volume: 104744470,
  },
  {
    x: new Date('2017-07-24'),
    open: 150.58,
    high: 153.99,
    low: 147.3,
    close: 149.5,
    volume: 105536280,
  },
  {
    x: new Date('2017-07-31'),
    open: 149.9,
    high: 159.75,
    low: 148.13,
    close: 156.39,
    volume: 170204830,
  },
  {
    x: new Date('2017-08-07'),
    open: 157.06,
    high: 161.83,
    low: 154.63,
    close: 157.48,
    volume: 149860480,
  },
  {
    x: new Date('2017-08-14'),
    open: 159.32,
    high: 162.51,
    low: 156.72,
    close: 157.5,
    volume: 133829670,
  },
  {
    x: new Date('2017-08-21'),
    open: 157.5,
    high: 160.74,
    low: 155.1101,
    close: 159.86,
    volume: 112238670,
  },
  {
    x: new Date('2017-08-28'),
    open: 160.14,
    high: 164.94,
    low: 159.93,
    close: 164.05,
    volume: 125610990,
  },
  {
    x: new Date('2017-09-04'),
    open: 163.75,
    high: 164.25,
    low: 158.53,
    close: 158.63,
    volume: 101419110,
  },
  {
    x: new Date('2017-09-11'),
    open: 160.5,
    high: 163.96,
    low: 157.91,
    close: 159.88,
    volume: 220431100,
  },
  {
    x: new Date('2017-09-18'),
    open: 160.11,
    high: 160.5,
    low: 157.995,
    close: 158.67,
    volume: 27939544,
  },
];
export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
  { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
  { x: 'Fruits', y: 520, text: '520 cal' },
  { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
];
