import Item from "./Item";

export default function Itemlist({ food, loading }) {
  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        food.extendedIngredients?.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
