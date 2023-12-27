import { Container } from '@mui/material';
import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Options/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  feedbackOptions = option => {
    this.setState(firstState => {
      return {
        ...firstState,
        [option]: firstState[option] + 1,
      };
    });
  };
  percentage = () => {
    const { good, neutral, bad } = this.state;
    const a = good + neutral + bad;
    return (good * 100) / a;
  };
  render() {
    return (
      <Container maxWidth="xl">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            feedback={key => this.feedbackOptions(key)}
          />
        </Section>
        {!this.totalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              percentage={this.percentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
