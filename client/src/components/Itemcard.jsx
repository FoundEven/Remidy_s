import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Link to={`/items/${item._id}`}>
      <section className="p-2">
        <div className="border ">
          <img className="" src={item.image} />
          <h3 className="">{item.itemName}</h3>
          <h3 className="">${item.price}</h3>
        </div>
      </section>
    </Link>
  );
};

export default ItemCard;