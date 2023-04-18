import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section/Section";
import { Box } from "components/Box/Box";
 
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
  
<Box>
<Section title="Please leave feedback">
    <FeedbackOptions 
      options={Object.keys(this.state)}
      onLeaveFeedback={this.leaveFeedback}
     />
   </Section>
   <Section title="Statistics">
    <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback(this.state)}
        positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
    >

     </Statistics>
    </Section>
    <GlobalStyle />
</Box>
  )
}
};
