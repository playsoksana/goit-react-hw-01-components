import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';


const StatisticsList =({statData}) => 
<ul className="stat-list">
{statData.map(({ label, percentage, id}) => (
    <li key={id}>
    <StatisticsItem title={label} interest={percentage}/>         
</li>
))}
</ul>;

StatisticsList.propTypes = {
    id: PropTypes.string.isRequired
}

export default StatisticsList;