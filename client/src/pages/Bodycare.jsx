import ItemCard from "../components/ItemCard";
import { useLocation } from "react-router-dom";
import { GET_ITEMS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Bodycare = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.items) {
    return <p>No featured items available.</p>;
  }
  //filters data for bodycare
  const filteredItems = data.items.filter(
    (item) => item.category[0] == "bodycare"
  );

  //TODO
  return (
    <div className="m-8 flex flex-col items-center">
      <h2 className="mb-6 text-4xl text-center font-bold">
        Bodycare
      </h2>
      <div className="flex flex-wrap justify-evenly gap-5 w-1/2">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Bodycare;
