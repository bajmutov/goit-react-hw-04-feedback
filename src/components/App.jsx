import { Component } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions ';
import Statistics from './Statistics/Statistics ';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickIncrement = label => {
    console.log('label', label);
    this.setState(prev => ({ [label]: prev[label] + 1 }));
  };

  countTotalFeedback = () => {
    let sum = 0;
    for (let salary of Object.values(this.state)) {
      sum += salary;
    }
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      this.countTotalFeedback() &&
      Math.round((100 * this.state.good) / this.countTotalFeedback())
    );
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClickIncrement}
          />
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
