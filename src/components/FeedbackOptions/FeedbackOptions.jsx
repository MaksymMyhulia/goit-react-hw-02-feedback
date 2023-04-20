import React from "react";

import { ButtonList } from "./FeedbackOptions.styled";
import { FeedbackButtons } from "./FeedbackButtons/FeedbackButtons";
import PropTypes, { arrayOf } from "prop-types"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ButtonList>
         {options.map(option => {
            return(
                <li key={option}>
                    <FeedbackButtons
                     key={option}
                     value={option}
                     type="button"
                     children={option}
                     onClick={ () => onLeaveFeedback(option)}
                     >  
                     {option}
                    </FeedbackButtons>
                  
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
