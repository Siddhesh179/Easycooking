import styles from "./globcontainer.module.css";
export default function Globalcontainer({ children }) {
  return <div className={styles.parentcontainer}>{children}</div>;
}
