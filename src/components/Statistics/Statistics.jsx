import React from "react";
import PropTypes from "prop-types";
import { Statisticlist, StatisticFeedback } from "./Statistics.styled";
import { Notification } from "components/Notification/Notification";


export const Statistics = ({
    good,
    neutral,
    bad,
    total = 0,
    positivePercentage = 0,
}) => {
    return total ? (
        <Statisticlist>
            <li>
                <StatisticFeedback>
                 Good:<span>{good}</span>
                </StatisticFeedback>
            </li>
            <li>
                <StatisticFeedback>
                 Neutral:<span>{neutral}</span>
                </StatisticFeedback>
            </li>
            <li>
                <StatisticFeedback>
                  Bad:<span>{bad}</span>
                </StatisticFeedback>
            </li>
            <li>
                <StatisticFeedback>
                  Total:<span>{total}</span>
                </StatisticFeedback>
            </li>
            <li>
                <StatisticFeedback>
                  Positive Feedback:<span>{positivePercentage}%</span>
                </StatisticFeedback>
            </li>
        </Statisticlist>
    ) : (<Notification message="There is no feedback"></Notification>);
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}