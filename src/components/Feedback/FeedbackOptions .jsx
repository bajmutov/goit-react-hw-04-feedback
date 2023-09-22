const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log('options', options);
  return (
    <>
      {options.map(option => (
        <button
          className="btn btn-primary btn-lg"
          type="button"
          value={option}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
