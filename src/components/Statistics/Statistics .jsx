import css from '../index.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h1>Statistics</h1>
      <p className={css.success}>Good: {good}</p>
      <p className={css.info}>Neutral: {neutral}</p>
      <p className={css.error}>Bad: {bad}</p>
      <p className={css.warning}>Total: {total}</p>
      <p className={css.total}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

export default Statistics;
