import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

export const TransactionItem = ({ transaction }) =>
    <tr className={styles.RowBody}>
        <td className={styles.CellBody}>{transaction.type}</td>
        <td className={styles.CellBody}>{transaction.amount}</td>
        <td className={styles.CellBody}>{transaction.currency}</td>
    </tr>;

    
TransactionItem.propTypes = {
    transaction: PropTypes.objectOf(PropTypes.shape(
        {
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired

        }
    )).isRequired
}
