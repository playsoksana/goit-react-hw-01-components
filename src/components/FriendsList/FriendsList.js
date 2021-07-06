import React from 'react';
import { Friend } from '../Friend/Friend';

export const FriendsList = ({friendsList}) =>

    <ul className="friend-list">
        {friendsList.map(el =>
            
            <Friend data={el}/>
        )}
    </ul>;

