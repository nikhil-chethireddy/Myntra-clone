import { useSelector } from "react-redux";
import Items from "../components/Items";

function Home() {
  const items = useSelector((store) => store.items);
  // console.log("Items are", items);
  return (
    <div className="items-container">
      {items.map((item) => (
        <Items key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Home;
