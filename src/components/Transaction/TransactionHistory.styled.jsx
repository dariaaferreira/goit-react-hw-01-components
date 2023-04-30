import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 800px;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: rgb(75 194 223);
  color: #fff;
  border: 1px solid white;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: rgb(237, 241, 243);
  }
  &:nth-of-type(odd) {
    background-color: #fff;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid white;
`;