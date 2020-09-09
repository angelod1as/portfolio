import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
import parse from 'html-react-parser';
import { Content, OpenSummaryButton } from './style';

import parserOptions from '../../components/parser';

const Summary = ({ color, summary }) => {
  const [summaryOpen, setSummaryOpen] = useState(false);

  const handleClick = useCallback(() => {
    setSummaryOpen(!summaryOpen);
  }, [summaryOpen]);

  return (
    <>
      <Content color={color} className={summaryOpen ? 'open' : 'closed'}>
        {parse(summary, parserOptions)}
      </Content>
      <OpenSummaryButton color={color} onClick={handleClick}>
        {summaryOpen ? 'Close' : 'Open'} Summary
      </OpenSummaryButton>
    </>
  );
};

Summary.propTypes = {
  color: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
};

export default Summary;
