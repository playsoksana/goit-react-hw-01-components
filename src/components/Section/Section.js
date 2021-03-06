import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css'

export const Section = ({ children }) => <div className={styles.Section}>{ children }</div>;

Section.propTypes = {
    children: PropTypes.node.isRequired,
}