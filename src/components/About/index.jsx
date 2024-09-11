import { forwardRef } from 'react';

import styles from './About.module.scss';

export const About = forwardRef(function About({}, ref) {
  return (
    <div ref={ref} className={styles.root}>
      <div className={styles.info}>
        <img src="/img/Freelance.webp" alt="dev" />
        <div>
          <h2>ABOUT ME</h2>
          <h3>A dedicated Front-end Developer from Russia📍</h3>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS,
            JavaScript, React, and SCSS. I excel in designing and maintaining responsive websites
            that offer a smooth user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who thrives in collaborating
            with cross-functional teams to produce outstanding web applications.
          </p>
        </div>
      </div>
      <div className={styles.svgs}>
        <span>Tech Stack</span>
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
