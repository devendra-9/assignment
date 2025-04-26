import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [allDetails, setallDetails] = useState([]);
  const { id } = useParams();
  console.log("param=====", id);

  const get_details = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/index/display_product/${id}`
      );
      setallDetails(response?.data?.data);
    } catch (error) {
      console.error("Error occured:::", error);
    }
  };
  useEffect(() => {
    get_details();
  }, [id]);
  return (
    <>
      <div className="alignCenter">
        <h2>Product Details</h2>
        {Object.entries(allDetails).map(([key, value]) => (
          <p key={key}>
            <strong>{key.replace(/_/g, " ").toUpperCase()}:</strong> {value}
          </p>
        ))}
      </div>
    </>
  );
};
export default ProductDetails;
