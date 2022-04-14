import styles from "./style.module.scss";

export function Header({ count }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7141/7141808.png"
          alt=""
        />
        <span>Site</span>
      </div>
      <div>товары: {count}</div>
    </header>
  );
}
