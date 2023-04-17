import styled from "@emotion/styled";

export const Button = styled.button`
display: flex;
align-items: center;

margin: 0;
padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;

border: none;
border-radius: ${({theme}) => theme.space[2]}px;
box-shadow: ${({theme}) => theme.shadows.normal};
transition: all 0.25s ease-in-out;
color: ${({theme}) => theme.colors.text};
cursor: pointer;

:hover,
:focus {
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    color: ${({theme}) => theme.colors.black};
};

`;