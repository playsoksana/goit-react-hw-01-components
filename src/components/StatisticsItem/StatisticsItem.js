import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';
import { getRandomEl } from '../../helpers/getRandomEl';

const StatisticsItem = ({ title, interest }) =>
  <li className={styles.item} style={{ backgroundColor: "rgb(" + getRandomEl() + "," + getRandomEl() + "," + getRandomEl() + ")" }} >
    <span className={styles.label}>{title}</span>
    <span className="percentage">{interest}%</span>
  </li>;

StatisticsItem.propTypes = {
    title: PropTypes.string.isRequired,
    interest: PropTypes.number.isRequired,
}

export default StatisticsItem; 