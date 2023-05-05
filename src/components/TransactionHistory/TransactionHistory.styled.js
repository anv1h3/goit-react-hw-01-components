import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-top: 30px;
  width: 600px;
`;

export const TableHeader = styled.thead`
  text-transform: uppercase;
  height: 30px;
  background-color: #53afb2;
`;

export const TableBody = styled.tbody`
  text-align: center;
`;

export const TableElement = styled.tr`
  height: 25px;
  color: #656969;
  &:nth-child(2n) {
    background-color: #c6e9ea;
  }
`;
