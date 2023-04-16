import { Global } from "@emotion/react";
import { Button } from "components/FeedbackOptions/FeedbackButtons/FeedbackButtons.styled";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
leaveFeedback = event => {
 this.setState({[event]: this.state[event] + 1});
};
render() {
const { good, neutral, bad } = this.state;
  
  return(   
  <div>
    <h2>Please leave feedback</h2>
    <FeedbackOptions 
     options={Object.keys(this.state)}
     onLeaveFeedback={this.leaveFeedback}
    />
    <GlobalStyle />
  </div>)
 

  }
};
