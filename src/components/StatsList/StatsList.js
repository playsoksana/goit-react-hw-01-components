import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatsList.module.css'


const StatsList = ({followers, views, likes}) => 

<ul className={styles.stats}>
<li className={styles.item}>
  <span className={styles.label}>Followers</span>
  <span className={styles.quantity}>{followers}</span>
</li>
<li className={styles.item}>
  <span className={styles.label}>Views</span>
  <span className={styles.quantity}>{views}</span>
</li>
<li className={styles.item}>
  <span className={styles.label}>Likes</span>
  <span className={styles.quantity}>{likes}</span>
</li>
</ul>;


StatsList.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired 
};

export default StatsList;