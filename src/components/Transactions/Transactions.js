import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css'
import {TransactionItem} from '../TransactionItem/TransactionItem';

export const Transactions = ({ transactions }) =>
    <table className={styles.Table}>
        <thead>
            <tr>
                <th className={styles.RowHead}>Type</th>
                <th className={styles.RowHead}>Amount</th>
                <th className={styles.RowHead}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(({ id, type, amount, currency }) =>
                <TransactionItem type={type} amount={amount} currency={currency} key={id}/>
            )}       
        </tbody>
    </table>;

Transactions.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }
    )).isRequired,
 
}