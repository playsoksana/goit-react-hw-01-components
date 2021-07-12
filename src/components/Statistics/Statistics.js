import React from 'react';
import PropTypes from "prop-types";
import StatisticsList from '../StatisticsList/StatisticsList';
import styles from './Statistics.module.css'

const Statistics =({data, title}) => 
<section className={styles.Statistics}>
{title? <div className={styles.Title}>
<h2>Upload stats</h2>
</div>: ''}
<StatisticsList statData={data}/>
</section>;

Statistics.propTypes = {
    data: PropTypes.array,
    tittle: PropTypes.string
}

export default Statistics;