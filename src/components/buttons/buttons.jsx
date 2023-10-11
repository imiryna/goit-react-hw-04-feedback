import React from 'react';
import { BoxButtonCss, BtnCss } from './buttons.styled';

export const ButtonBox = ({ options, onLeaveFeedback }) => (
  <BoxButtonCss>
    {options.map(option => (
      <BtnCss
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </BtnCss>
    ))}
  </BoxButtonCss>
);
