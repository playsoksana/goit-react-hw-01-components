import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

export const Friend = ({ isOnline, name, avatar }) =>
    <li className={styles.Item}>
        <span className={styles.Status} style={{ backgroundColor: (isOnline) ? "red" : "green" }}></span>
        <img className={styles.Avatar} src={avatar} alt={name} width="88" />
        <p className={styles.Name}>{name}</p>
    </li>;

Friend.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string  
};

Friend.defaultProps = {
    avatar: "https://yt3.ggpht.com/ytc/AKedOLQ4M-MgcjBx7p80AOMfgq9RQMgIyDFFx5pj5zok=s900-c-k-c0x00ffffff-no-rj"   
}


  