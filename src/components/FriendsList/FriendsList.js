import React from 'react';
import PropTypes from 'prop-types';
import { Friend } from '../Friend/Friend';
import styles from './FriendsList.module.css'

export const FriendsList = ({friendsList}) =>

    <ul className="friend-list">
        {friendsList.map(el =>
            <li key={el.id} className={styles.item}>
                <Friend data={el}/>
            </li>
                
                
        )}
    </ul>;

FriendsList.propTypes = {
    friendList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        el: PropTypes.object.isRequired
        }))
    }

