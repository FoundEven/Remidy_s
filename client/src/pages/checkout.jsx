import { GET_ITEMS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const checkout = () => {
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



  return (
    <section>
      
      
    </section>
  );
};

export default checkout;