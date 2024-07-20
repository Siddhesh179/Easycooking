import Fooditem from "./Fooditem";

export default function Foodlist({ data, setfoodid }) {
  return (
    <div>
      {data.map((food) => (
        <Fooditem setfoodid={setfoodid} food={food} key={food.id} />
      ))}
    </div>
  );
}
