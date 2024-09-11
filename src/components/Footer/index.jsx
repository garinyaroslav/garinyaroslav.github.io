import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div>
        <span>Copyright © 2023. All rights are reserved</span>
        <a href="https://github.com/garinyaroslav">
          <img src="/img/githubwhite.svg" alt="alt" />
        </a>
      </div>
    </div>
  );
};
