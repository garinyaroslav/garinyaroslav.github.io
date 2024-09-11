import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>Портфолио</h1>
        <p>Каждый проект исключительная разработка🧩</p>
      </div>
      <div className={styles.projectRev}>
        <img src="/img/maranyon.webp" alt="proj-img" />
        <div className={styles.info}>
          <h2>Магазин мебели📦</h2>
          <p>
            Интуитивно понятный интерфейс обеспечивает комфортное взаимодействие с ресурсом, а стильный дизайн создает приятную атмосферу и
            способствует хорошему пользовательскому опыту, позволяя клиентам легко находить и приобретать необходимые им товары.
          </p>
          <div className={styles.buttons}>
            <a href="https://github.com/garinyaroslav/maranyon">
              <div className={styles.gitbut}>
                <span>Code</span>
                <div className={styles.imggit}></div>
              </div>
            </a>
            <a href="https://maranyon.vercel.app/">
              <div className={styles.linkbut}>
                <span>Live</span>
                <div className={styles.imglink}></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <img src="/img/mern-blog.webp" alt="proj-img" />
        <div className={styles.info}>
          <h2>Техноблог💻</h2>
          <p>
            Технический блог-сайт — это онлайн-платформа, которая позволяет пользователям публиковать свои статьи. Интерфейс регистрации и авторизации
            Предоставлен. Сайт имеет полноценный бэкэнд. (Во время вашего просмотра данные могут не загружаться из-за спящего режима бэкэнда, jast
            wait).
          </p>
          <div className={styles.buttons}>
            <a href="https://github.com/garinyaroslav/mern-blog">
              <div className={styles.gitbut}>
                <span>Code</span>
                <div className={styles.imggit}></div>
              </div>
            </a>
            <a href="https://mern-blog-orpin.vercel.app/">
              <div className={styles.linkbut}>
                <span>Live</span>
                <div className={styles.imglink}></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.projectRev}>
        <img src="/img/pizza.webp" alt="proj-img" />
        <div className={styles.info}>
          <h2>Магазин еды🍕</h2>
          <p>
            Делая акцент на простоте и чистом дизайне, этот магазин ставит во главу угла пользовательский опыт, позволяя клиентам легко находить и
            приобретать нужные им товары.
          </p>
          <div className={styles.buttons}>
            <a href="https://github.com/garinyaroslav/react-pizza">
              <div className={styles.gitbut}>
                <span>Code</span>
                <div className={styles.imggit}></div>
              </div>
            </a>
            <a href="https://garinyaroslav.github.io/react-pizza/">
              <div className={styles.linkbut}>
                <span>Live</span>
                <div className={styles.imglink}></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <img src="/img/tracker.webp" alt="proj-img" />
        <div className={styles.info}>
          <h2>IP адрес трекер📡</h2>
          <p>
            Приложение с простым дизайном для определения вашего местоположения или заданного с помощью IP-API, я также использовал карту Leaflet.
          </p>
          <div className={styles.buttons}>
            <a href="https://github.com/garinyaroslav/ip-address-tracker">
              <div className={styles.gitbut}>
                <span>Code</span>
                <div className={styles.imggit}></div>
              </div>
            </a>
            <a href="https://ip-address-tracker-phi-five.vercel.app/">
              <div className={styles.linkbut}>
                <span>Live</span>
                <div className={styles.imglink}></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.projectRev}>
        <img src="/img/tickly.webp" alt="proj-img" />
        <div className={styles.info}>
          <h2>Страница авторизации📝</h2>
          <p>Сайт для получения токена для интерфейса командной строки Twitch</p>
          <div className={styles.buttons}>
            <a href="https://tickly-frontend.vercel.app/?obs=true">
              <div className={styles.linkbut}>
                <span>Live</span>
                <div className={styles.imglink}></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
