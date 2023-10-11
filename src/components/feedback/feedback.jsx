import React, { Component } from 'react';
import { ButtonBox } from '../buttons/buttons';

import { ContainerCss, DescriptionCss } from './feedback.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <ContainerCss>
        <DescriptionCss>Please leave feedback</DescriptionCss>
        <ButtonBox
          options={this.props.options}
          onLeaveFeedback={this.props.onLeaveFeedback}
        />
      </ContainerCss>
    );
  } 
}
