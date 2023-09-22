import css from '../index.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={css.h1}>{title}</h1>
      {children}
    </>
  );
};

export default Section;
