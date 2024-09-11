import styles from './Home.module.scss';

export const Home = ({ handleClick }) => {
  return (
    <div className={styles.root}>
      <div className={styles.about}>
        Привет, я <span>Гарин Ярослав</span>.<br />Я фронтенд разработчик.
      </div>
      <div onClick={handleClick} className={styles.button}>
        посмотерть мои проекты
        <img src="/img/arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};
