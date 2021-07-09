import React from 'react';
import StatsList from '../StatsList/StatsList';
import Description from '../Description/Description';
import styles from './Profile.module.css'


const Profile = ({userName, userTag, userAvatar, userLocation, userStatsFollowers, userStatsViews, userStatsLikes}) => 

<div className={styles.Profile}>  

    <Description
      
  name={userName}   
  tag= {userTag}
  avatar = {userAvatar}
  location = {userLocation}
  />



<StatsList 
followers={userStatsFollowers}
views={userStatsViews}
likes={userStatsLikes}
/>
</div>;

export default Profile;