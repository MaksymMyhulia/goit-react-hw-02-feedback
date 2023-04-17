import React from "react";
import { HeaderStyled } from "./Header.styled";
import PropTypes from "prop-types";

export const Header = ({ title }) => {
    <HeaderStyled>{title}</HeaderStyled>;
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};