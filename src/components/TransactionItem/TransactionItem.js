import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

export const TransactionItem = ({ type, amount, currency }) =>
    <tr className={styles.RowBody}>
        <td className={styles.CellBody}>{type}</td>
        <td className={styles.CellBody}>{amount}</td>
        <td className={styles.CellBody}>{currency}</td>
    </tr>;

    
TransactionItem.propTypes = {  
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
}