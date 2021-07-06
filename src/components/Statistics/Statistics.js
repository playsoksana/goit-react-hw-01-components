import React from 'react';
import PropTypes from "prop-types";
import StatisticsList from '../StatisticsList/StatisticsList';
import styles from './Statistics.module.css'

const Statistics =({data}) => 
<section className={styles.statistics}>
<div className={styles.title}>
<h2>Upload stats</h2>
</div>
<StatisticsList statData={data}/>
</section>;

Statistics.propTypes = {
    data: PropTypes.array
}

export default Statistics;