import React from "react";
import { Button } from "./FeedbackButtons.styled";
import PropTypes from "prop-types";

export const FeedbackButtons = ({
    type = "button",
    children,
    onClick,
}) => {
    return (
       <Button type={type} onClick={onClick}> 
        {children}
       </Button>
    )
}

FeedbackButtons.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};