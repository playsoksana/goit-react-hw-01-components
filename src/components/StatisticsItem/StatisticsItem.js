import React from 'react';
import PropTypes from 'prop-types';

const StatisticsItem =({title, interest}) =>
 <>
   <span className="label">{title}</span>
   <span className="percentage">{interest}%</span> 
</>

StatisticsItem.propTypes = {
    title: PropTypes.string.isRequired,
    interest: PropTypes.number.isRequired,
}

export default StatisticsItem;