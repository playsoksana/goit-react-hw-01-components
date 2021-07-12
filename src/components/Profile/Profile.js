import React from 'react';
import StatsList from '../StatsList/StatsList';
import Description from '../Description/Description';
import styles from './Profile.module.css'


const Profile = ({userName, userTag, userAvatar, userLocation, userStats}) => 

<div className={styles.Profile}>  

    <Description
      
  name={userName}   
  tag= {userTag}
  avatar = {userAvatar}
  location = {userLocation}
  />



<StatsList 
followers={userStats.followers}
views={userStats.views}
likes={userStats.likes}
/>
</div>;

export default Profile;