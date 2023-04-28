import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    width: 300px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
`;

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    padding: 20px
`;

export const Avatar = styled.img`
    display: block;
    width: 50%;
    border-radius: 100%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 40px;
`;

export const Name = styled.p`
    font-weight: 700;
    margin: 0;
    margin-bottom: 10px;
    font-size: 25px;
`;

export const Tag = styled.p`
    margin: 0;
    margin-bottom: 10px;
    color: grey;
`;

export const Location = styled.p`
    font-weight: 500;
    margin: 0;
    margin-bottom: 10px;
    color: grey;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #f5f5f5;
    border-radius: 4px;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    border-top: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    &:last-child {
        border-right: 0px;
  }
    padding: 10px;
`;

export const Label = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: grey;
`;

export const Quantity = styled.span`
    font-weight: 700;
    font-size: 18px;
`;


