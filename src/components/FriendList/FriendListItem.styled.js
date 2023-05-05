import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;

  align-items: center;
  width: 250px;
  border-radius: 15px;
  background: #f0efef;
  border-radius: 10px;
  background: #f0efef;
  box-shadow: 10px 10px 20px #afaeae, -10px -10px 20px #ffffff;
  padding: 5px;
  margin-bottom: 15px;
`;

export const FriendName = styled.p`
  margin-left: 10px;
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
  margin-right: 10px;
`;
