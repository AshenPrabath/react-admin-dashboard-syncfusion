import React from 'react';

const ProgressBar = ({ percentage, color }) => {
  const containerStyles = {
    width: '100%',
    backgroundColor: '#f3f3f3',
    borderRadius: '5px',

  };

  const fillerStyles = {
    height: '5px',
    width: `${percentage}%`,
    backgroundColor: color,
    textAlign: 'right',
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
