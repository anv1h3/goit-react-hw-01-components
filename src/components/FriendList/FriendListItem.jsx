import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <FriendItem>
      <FriendStatus online={isOnline}>{isOnline}</FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
