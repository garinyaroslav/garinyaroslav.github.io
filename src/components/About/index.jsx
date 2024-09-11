import { forwardRef } from 'react';

import styles from './About.module.scss';

export const About = forwardRef(function About({}, ref) {
  return (
    <div ref={ref} className={styles.root}>
      <div className={styles.info}>
        <img src="/img/Freelance.webp" alt="dev" />
        <div>
          <h2>Обо мне</h2>
          <h3>Квалифициированный фронтенд-разработчик из России📍</h3>
          <p>
            Как младший разработчик интерфейса, я обладаю впечатляющим арсеналом навыков в HTML, CSS, JavaScript, React и SCSS. Я преуспеваю в
            проектировании и поддержке адаптивных веб-сайтов, которые предлагают плавный пользовательский интерфейс. Мой опыт заключается в создании
            динамичных, привлекательных интерфейсов путем написания чистого и оптимизированного кода и использования передовых инструментов и методов
            разработки. Я также командный игрок, который преуспевает в сотрудничестве с кросс-функциональными командами для создания выдающихся
            веб-приложений.
          </p>
        </div>
      </div>
      <div className={styles.svgs}>
        <span>Стек</span>
        <img src="/img/html.svg" alt="tech" />
        <img src="/img/css.svg" alt="tech" />
        <img src="/img/js.svg" alt="tech" />
        <img src="/img/ts.svg" alt="tech" />
        <img src="/img/react.svg" alt="tech" />
        <img src="/img/redux.svg" alt="tech" />
        <img src="/img/sass.svg" alt="tech" />
      </div>
    </div>
  );
});
