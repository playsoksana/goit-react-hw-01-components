import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';


const Description = ({userName, tag, avatar, location}) => 
<div className={styles.description}>
    
<img
  src={avatar}
  alt="Аватар пользователя"
  className={styles.photo}
/>
<p className={styles.name}>{userName}</p>
<p className={styles.tag}>{tag}</p>
<p className={styles.location}>{location}</p>
</div>;


Description.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
}

Description.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default Description; 