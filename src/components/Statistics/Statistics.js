import React from 'react';
import StatisticsList from '../StatisticsList/StatisticsList';

const Statistics =({data}) => 
<section className="statistics">
<h2 className="title">Upload stats</h2>
<StatisticsList statData={data}/>
</section>

export default Statistics;