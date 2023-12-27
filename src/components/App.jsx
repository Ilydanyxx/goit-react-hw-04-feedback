import { Container } from '@mui/material';
import { useReducer } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Options/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setFeedback':
      return { ...state, [action.payload]: state[action.payload] + 1 };
    default:
      return state;
  }
}


export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const feedbackOptions = option => {
    dispatch({
      type: 'setFeedback',
      payload: option,
    });
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };
  
  const percentage = () => {
    const { good, neutral, bad } = state;
    const a = good + neutral + bad;
    return (good * 100) / a;
  };
  
    return (
      <Container maxWidth="xl">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            feedback={key => feedbackOptions(key)}
          />
        </Section>
        {!totalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={totalFeedback()}
              percentage={percentage()}
            />
          </Section>
        )}
      </Container>
    );
}

