import React, { Component } from 'react';
import Section from './Section/index';
import FeedbackOptions from './FeedbackOptions/index';
import Statistics from './Statistics/index';
import Notification from './Notification/Index';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerButtonClick = e => {
    this.setState(prevState => {
      const keyName = e.target.name;
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const option = Object.keys(this.state);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              option={option}
              onLeaveFeedback={this.handlerButtonClick}
            />
          }
        />
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
