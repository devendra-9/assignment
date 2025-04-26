import { useEffect, useState } from "react";
import "../commonCSS/product.css";
import AddProduct from "../addProduct";
import axios from "axios";
import Product from "../product/index";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [product, setproduct] = useState([]);
  const [addProduct, setAddProduct] = useState(false);
  const [newProduct, setewProduct] = useState();

  async function fetchProduct() {
    try {
      const result = await axios.get("http://localhost:3000/index/product");
      setproduct(result?.data?.data);
    } catch (error) {
      console.error("Error in fetching the data", error);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, [addProduct]);
  return (
    <>
      <div className="alignCenter">
      <h1>Click on product to display</h1>
        {product === undefined || product.length === 0 ? (
          <h4>No product to display</h4>
        ) : (
          product.map((item) => {
            return (
              <Link to={`/product/${item.id}`} key={item?.id}>
                <div className="displayingProduct">
                  <h4 className="itemlink">{item?.name}</h4>
                </div>
              </Link>
            );
          })
        )}
      </div>
      <div className="displayingProduct">
        <button onClick={() => setAddProduct(true)}>Add Product</button>
      </div>
      {addProduct && (
        <div className="modalOverlay">
          <div className="modalContent">
            <AddProduct setAddProduct={setAddProduct} 
            setewProduct={setewProduct}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ListProduct;
