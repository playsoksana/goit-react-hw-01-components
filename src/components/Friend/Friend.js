import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

export const Friend = ({ isOnlineFriend, nameFriend, avatarFriend }) =>
    <li className={styles.Item}>
        <span className={styles.Status} style={{ backgroundColor: (isOnlineFriend) ? "red" : "green" }}></span>
        <img className={styles.Avatar} src={avatarFriend} alt={nameFriend} width="88" />
        <p className={styles.Name}>{nameFriend}</p>
    </li>;

Friend.propTypes = {
    isOnlineFriend: PropTypes.bool.isRequired,
    nameFriend: PropTypes.string.isRequired,
    avatarFriend: PropTypes.string  
};

Friend.defaultProps = {
    avatar: "https://yt3.ggpht.com/ytc/AKedOLQ4M-MgcjBx7p80AOMfgq9RQMgIyDFFx5pj5zok=s900-c-k-c0x00ffffff-no-rj"   
}


  