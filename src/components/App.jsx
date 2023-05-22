import { useState } from 'react';
import Section from './Section/index';
import FeedbackOptions from './FeedbackOptions/index';
import Statistics from './Statistics/index';
import Notification from './Notification/Index';
import { AppContainer } from './syled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerButtonClick = (e) => {
   
    if (e.target.name === 'good') setGood(prevState => prevState + 1);
    if (e.target.name === 'neutral') setNeutral(prevState => prevState + 1);
    if (e.target.name === 'bad') setBad(prevState => prevState + 1);

    
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  return (
    <AppContainer>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            option={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={handlerButtonClick}
          />
        }
      />
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </AppContainer>
  );
}

