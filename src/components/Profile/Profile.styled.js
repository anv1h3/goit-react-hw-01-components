import styled from 'styled-components';

export const ProfileWrap = styled.div`
  width: 300px;
  border-radius: 0px;
  background: #f0efef;
  box-shadow: 32px 32px 64px #afaeae, -32px -32px 64px #ffffff;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  margin-top: 15px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

export const ProfileTitle = styled.p`
  margin-top: 15px;
  font-weight: bold;
  font-size: 20px;
`;

export const ProfileDescr = styled.p`
  margin-top: 15px;
  color: grey;
  text-align: center;
`;

export const StatsList = styled.ul`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(217, 217, 217);
  width: 33%;
  height: 70px;
`;
export const StatsInfo = styled.span`
  font-weight: bold;
`;
