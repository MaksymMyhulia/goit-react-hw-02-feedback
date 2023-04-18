import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: ${({theme}) => theme.space[4]}px;
padding: ${({theme}) => theme.space[4]}px;
`;