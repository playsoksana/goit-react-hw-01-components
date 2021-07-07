import React from 'react';
import PropTypes from 'prop-types';
import { Friend } from '../Friend/Friend';


export const FriendsList = ({friendsList}) =>

    <ul className="friend-list">
        {friendsList.map(el =>            
            <Friend key={el.id} avatar={el.avatar} name={el.name} isOnline={el.isOnline}/>
        )}
    </ul>;

FriendsList.propTypes = {
    friendList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        el: PropTypes.object.isRequired
        }))
    }

