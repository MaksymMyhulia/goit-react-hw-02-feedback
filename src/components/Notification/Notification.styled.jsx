import styled from "@emotion/styled"
 export const Message = styled.h2`
 text-align: center;
 margin: ${({theme}) => theme.space[4]}px;
 color: ${({theme}) => theme.colors.primary};
 font-size: ${({theme}) => theme.fontSizes.s};
 `; 