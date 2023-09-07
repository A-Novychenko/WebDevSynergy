import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.wrap}>
      <p className={styles.logo}>WDS</p>
    </div>
  );
};
