import styled from "@emotion/styled";

export const Statisticlist = styled.ul`
padding: ${({theme}) => theme.space[4]}px;
margin: 0 auto;
max-width: 480px;

border-radius: ${({theme}) => theme.space[2]}px;
background-color: ${({theme}) => theme.colors.backgroundColor};
box-shadow: ${({theme}) => theme.shadows.normal};
`;  

export const StatisticFeedback = styled.p`
display: flex;
align-items: center;
font-weight: bold;
gap: ${({theme}) => theme.space[3]}px;
padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;


transition: all 0.25s ease-in-out;

color: ${({theme}) => theme.colors.text};
cursor: pointer;
`;