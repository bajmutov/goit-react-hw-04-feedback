import { useState } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions ';
import Statistics from './Statistics/Statistics ';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClickIncrement = label => {
    // console.log('label', label);
    if (label === 'good')
      setFeedback(prev => ({ ...prev, good: prev.good + 1 }));
    else if (label === 'neutral')
      setFeedback(prev => ({ ...prev, neutral: prev.neutral + 1 }));
    else setFeedback(prev => ({ ...prev, bad: prev.bad + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    let sum = 0;
    sum = good + bad + neutral;
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    return (
      countTotalFeedback() &&
      Math.round((100 * feedback.good) / countTotalFeedback())
    );
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleClickIncrement}
        />
        {feedback.good || feedback.neutral || feedback.bad ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClickIncrement = label => {
//     console.log('label', label);
//     this.setState(prev => ({ [label]: prev[label] + 1 }));
//   };

//   countTotalFeedback = () => {
//     let sum = 0;
//     for (let salary of Object.values(this.state)) {
//       sum += salary;
//     }
//     return sum;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return (
//       this.countTotalFeedback() &&
//       Math.round((100 * this.state.good) / this.countTotalFeedback())
//     );
//   };

//   render() {
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClickIncrement}
//           />
//           {this.state.good || this.state.neutral || this.state.bad ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

export default App;
