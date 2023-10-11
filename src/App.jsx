import React, { useState }  from 'react';
import { FeedbackOptions } from './components/feedback/feedback';
import { Statistics } from './components/statistics/statistics';
import { Notification } from 'components/notification/notification';

export const App =() => {

  const[good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const state = {
    good: good,
    neutral: neutral,
    bad: bad,
  }

   const setStateValue = (opt) => {
    switch (opt) {
      case 'good':
        setGood(good + 1); 
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
   

  
    const options = Object.keys(state);
    const totalFeedback = good + neutral+ bad;
    let shownBlock;
    if (totalFeedback !== 0) {
      shownBlock = <Statistics state={state}  totalFeedback={totalFeedback}/>;
    } else {
      shownBlock = <Notification message="There is no feedback" />;
    }
    return (
      <>
        <FeedbackOptions
          onLeaveFeedback={setStateValue}
          options={options}
        ></FeedbackOptions>
        {shownBlock}
      </>
    );
};
