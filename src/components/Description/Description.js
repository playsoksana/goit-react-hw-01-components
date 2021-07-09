import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';


const Description = ({name, tag, avatar, location}) => 
<div className={styles.Description}>
   
<img
  src={avatar}
  alt="Аватар пользователя"
  className={styles.Photo}
/>
<p className={styles.Name}>{name}</p>
<p className={styles.Tag}>{tag}</p>
<p className={styles.Location}>{location}</p>
</div>;


Description.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
}

Description.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default Description; 