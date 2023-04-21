import React from "react";
import PropTypes from "prop-types";
import { SectionContainer } from "./Section.styled";
import { Header } from "./Header/Header";

export const Section = ({ title, children }) => {
    return (
        <SectionContainer>
            <Header title={title} />
            {children}
        </SectionContainer>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};