import React, { Component } from 'react';
import { DescriptionCss, TextCss, BoxCss } from './statistics.styled';

export class Statistics extends Component {
  countTotalFeedback = () => {
    return (
      this.props.state.good + this.props.state.neutral + this.props.state.bad
    );
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.props.state.good / total) * 100) || 0;
  };

  render() {
    return (
      <BoxCss>
        <DescriptionCss>Statistics</DescriptionCss>
        <TextCss>Good: {this.props.state.good}</TextCss>
        <TextCss>Neutral: {this.props.state.neutral}</TextCss>
        <TextCss>Bad: {this.props.state.bad}</TextCss>
        <TextCss>Total: {this.countTotalFeedback()}</TextCss>
        <TextCss>
          Total percentage: {this.countPositiveFeedbackPercentage()}%
        </TextCss>
      </BoxCss>
    );
  }
}
