import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendWrap } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendWrap>
      {friends.map(el => (
        <FriendListItem key={el.id} data={el} />
      ))}
    </FriendWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
