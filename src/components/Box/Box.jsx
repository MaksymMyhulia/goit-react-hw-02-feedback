import React from "react";
import { Container } from "./Box.styled";

export const Box = ({ children }) => {
    return (
        <Container>
            <main>{children}</main>
        </Container>
    )
}