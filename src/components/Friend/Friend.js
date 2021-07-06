import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

export const Friend = ({data}) =>
    <>
        <span className={styles.status} style={{ backgroundColor: (data.isOnline) ? "red" : "green" }}></span>
        <img className={styles.avatar} src={data.avatar} alt={data.name} width="88" />
        <p className={styles.name}>{data.name}</p>
    </>

// Friend.defaultProps = {
//     avatar: `https://yt3.ggpht.com/ytc/AKedOLQ4M-MgcjBx7p80AOMfgq9RQMgIyDFFx5pj5zok=s900-c-k-c0x00ffffff-no-rj`
// }

// Friend.propTypes = {
//     data: PropTypes.objectOf(PropTypes.shape(
//         {
//         status: PropTypes.bool.isRequired,        
//             name: PropTypes.string.isRequired
//        // avatar: PropTypes.string,
//         }
//     )).isRequired,
 
// }
