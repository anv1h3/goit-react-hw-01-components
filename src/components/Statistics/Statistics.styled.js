import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  width: 300px;

  border-radius: 0px;
  background: #f0efef;
  box-shadow: 32px 32px 64px #afaeae, -32px -32px 64px #ffffff;
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  color: grey;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatisticItem = styled.li`
  display: block;
  width: 20%;
  flex-direction: column;
  height: 50px;
  background-color: ${getRandomHexColor};
`;

export const StatisticInfo = styled.span`
  display: block;
  text-align: center;
  padding: 2px;
  font-weight: 600;
`;
