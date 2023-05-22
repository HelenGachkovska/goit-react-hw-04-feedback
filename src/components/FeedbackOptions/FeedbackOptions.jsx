import React from 'react';
import PropTypes from 'prop-types';
import { ContaiherBtn, Button } from './styled';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <ContaiherBtn>
      {option.map(el => (
        <Button type="button" name={el} onClick={onLeaveFeedback} key={el}>
          {(el = el.charAt(0).toUpperCase() + el.slice(1))}
        </Button>
      ))}
    </ContaiherBtn>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
