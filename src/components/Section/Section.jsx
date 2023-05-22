import React from 'react';
import PropTypes from 'prop-types';
import { SectionEl, Title} from './styled';

const Section = ({ title, children }) => {
  return (
    <SectionEl>
      <Title>{title}</Title>
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,

};

export default Section;
