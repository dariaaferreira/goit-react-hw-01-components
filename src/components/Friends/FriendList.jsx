import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ListItems } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <ListItems>
        {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}   
        />
        ))}
        </ListItems>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  };