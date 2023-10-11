import React, { Component } from 'react';
import { FeedbackOptions } from './components/feedback/feedback';
import { Statistics } from './components/statistics/statistics';
import { Notification } from 'components/notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setStateValue = opt => {
    this.setState(preState => ({
      [opt]: preState[opt] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = Object.values(this.state).reduce((a, b) => a + b, 0);
    let shownBlock;
    if (totalFeedback !== 0) {
      shownBlock = <Statistics state={this.state} />;
    } else {
      shownBlock = <Notification message="There is no feedback" />;
    }
    return (
      <>
        <FeedbackOptions
          onLeaveFeedback={this.setStateValue}
          options={options}
        ></FeedbackOptions>
        {shownBlock}
      </>
    );
  }
}
