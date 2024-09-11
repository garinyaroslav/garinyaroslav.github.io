import styles from './Contact.module.scss';

export const Contact = () => {
  return (
    <div className={styles.root}>
      <div>
        <h2>Контакты</h2>
        <p>Не стесняйся, свяжись со мной👇</p>
        <div>
          <div className={styles.contact}>
            <div className={styles.icon}>
              <img src="/img/mail.svg" alt="mail" />
            </div>
            <div className={styles.info}>
              <h3>Mail</h3>
              <span>garinyaroslav13@mail.ru</span>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.icon}>
              <img className={styles.tg} src="/img/tg.svg" alt="tg" />
            </div>
            <div className={styles.info}>
              <h3>Telegram</h3>
              <span>@garinyaroslav</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
