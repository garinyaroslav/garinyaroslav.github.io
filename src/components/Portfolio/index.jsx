import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>PORTFOLIO</h1>
        <p>Every project is an exceptional development🧩</p>
      </div>
      <div className={styles.projectRev}>
        <img src="/img/maranyon.webp" alt="proj-img" />
        <div className={styles.info}>
          <h2>FURNITURE COMMERTIAL📦</h2>
          <p>
            An intuitive interface ensures comfortable interaction with the resource, and a stylish
            design creates a pleasant atmosphere and promotes a good user experience, allowing
            customers to easily find and buy the products they need.
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
          <h2>TECH BLOG💻</h2>
          <p>
            A technical blog site is an online platform that allows users to publish their articles.
            A registration and authorization interface is provided. The site has a full backend.
            (During your viewing, the data may not be loaded due to the backend sleeping mode, jast
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
          <h2>FOOD COMMERCIAL🍕</h2>
          <p>
            With a focus on simplicity and clean design, this store prioritize user experience,
            making it easy for customers to find and purchase the products they need.
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
          <h2>IP ADDRESS TRACKER📡</h2>
          <p>
            An application with a simple design to determine your location or a given one using
            IP-API, I also used the Leaflet map.
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
          <h2>ACCESS TOKEN PAGE📝</h2>
          <p>Website for obtaining a token for the Twitch Command Line interface</p>
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
