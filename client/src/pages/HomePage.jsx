import Carousel from "../components/Carousel";
import { GET_ITEMS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const HomePage = () => {
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

  const iceItems = data.items.filter((item) =>
    item.itemRegion.includes("Iceland")
  );

  const KoreanItems = data.items.filter((item) =>
    item.itemRegion.includes("Korean")
  );

  return (
    <section>
      <h2 className="my-6 text-4xl text-center font-bold">Iceland</h2>
      <Carousel items={iceItems} />
      <h2 className="my-6 text-4xl text-center font-bold">Korean</h2>
      <Carousel items={KoreanItems} />
    </section>
  );
};

export default HomePage;