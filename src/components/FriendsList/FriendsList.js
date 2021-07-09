import React from 'react';
import PropTypes from 'prop-types';
import { Friend } from '../Friend/Friend';


export const FriendsList = ({friendsList}) =>

    <ul className="friend-list">
      
        {friendsList.map(({id, avatar, name, isOnline}) =>            
            <Friend key={id} avatarFriend={avatar} nameFriend={name} isOnlineFriend={isOnline}/>
        )}
    </ul>;

FriendsList.propTypes = {
    friendList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool
        }))
    }

