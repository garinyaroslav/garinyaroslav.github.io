import styles from './Home.module.scss';

export const Home = ({ handleClick }) => {
  return (
    <div className={styles.root}>
      <div className={styles.about}>
        Hello, I&apos;m <span>Garin Yaroslav</span>.<br />
        I&apos;m a front-end developer.
      </div>
      <div onClick={handleClick} className={styles.button}>
        view my work
        <img src="/img/arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};
