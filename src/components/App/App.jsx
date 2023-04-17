import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
leaveFeedback = event => {
 this.setState({[event]: this.state[event] + 1});
};

countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

countPositiveFeedbackPercentage = ({ good }) => 
Math.round((good * 100) / this.countTotalFeedback(this.state));
 

render() {
const { good, neutral, bad } = this.state;
  
  return(   
  <div>
    <h2>Please leave feedback</h2>
    <FeedbackOptions 
     options={Object.keys(this.state)}
     onLeaveFeedback={this.leaveFeedback}
    />
    <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    total={this.countTotalFeedback(this.state)}
    positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
    >

    </Statistics>
    <GlobalStyle />
  </div>)
 

  }
};
