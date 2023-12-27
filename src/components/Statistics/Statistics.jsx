import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <div>
      <p>{`good: ${good}`}</p>
      <p>{`neutral: ${neutral}`}</p>
      <p>{`bad: ${bad}`}</p>
      <p>{`total: ${total}`}</p>
      <p>{`percentage: ${percentage}`}</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
