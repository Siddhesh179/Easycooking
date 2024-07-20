import styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imagecontainer}>
          <img
            className={styles.image}
            src={
              `https://img.spoonacular.com/ingredients_100x100/` + item.image
            }
            alt=""
          />
        </div>
        <div className={styles.namecontainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
