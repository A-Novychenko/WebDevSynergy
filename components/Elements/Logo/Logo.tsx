import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.wrap}>
      <p className={styles.logo}>WDS</p>
      <p className={styles.logo_title}>WebDevSynergy</p>
    </div>
  );
};
