import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 300px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  margin-top: 40px;
  overflow: hidden;
`;

export const Title = styled.h2`
  margin: 20px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  padding: 10px;
  background-color: #f3f3f3;
`;

export const Label = styled.span`
  margin-bottom: 4px;
  font-size: 14px;
  color: #ffffff;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`;