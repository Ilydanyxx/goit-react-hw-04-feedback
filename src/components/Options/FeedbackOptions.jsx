import React from 'react';
import { PropTypes } from 'prop-types';
export default function FeedbackOptions({ options, feedback }) {
  return (
    <div>
      {options.map(key => {
        return (
          <button key={key} type="button" onClick={() => feedback(key)}>
            {[key]}
          </button>
        );
      })}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  feedback: PropTypes.func.isRequired,
};
