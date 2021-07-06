import React from 'react';
import styles from './Friend.module.css';

const color = (value) => value ? "red" : "green";
//{data.isOnline}

export const Friend = ({data}) =>
    <li key={data.id} className={styles.item}>
        <span className={styles.status} style={{backgroundColor: (data.isOnline)? "red" : "green"}}></span>
        <img className={styles.avatar} src={data.avatar} alt={data.name} width="88" />
        <p className={styles.name}>{data.name}</p>
    </li>;
