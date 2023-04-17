import React from "react";

import { ButtonList } from "./FeedbackOptions.styled";
import { Button } from "./FeedbackButtons/FeedbackButtons.styled";
import PropTypes, { arrayOf } from "prop-types"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ButtonList>
         {options.map(option => {
            return(
                <li key={option}>
                    <Button
                     key={option}
                     value={option}
                     type="button"
                     children={option}
                     onClick={ () => onLeaveFeedback(option)}
                     >  
                     {option}
                    </Button>
                  
                </li>
            )
         })}
        </ButtonList>
    )
}


FeedbackOptions.propTypes = {
    options: arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}
