import axios from "axios";
import { useState } from "react";

const AddProduct = ({ setewProduct, setAddProduct }) => {
  const [form, setForm] = useState({
    product_name: "",
    old_price: "",
    discounted_price: "",
    shop_name: "",
    shop_address: "",
    product_manufacturing: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/index/newproduct",
        form
      );
      setewProduct(res?.data?.data);
      setAddProduct(false);
    } catch (err) {
      console.error("Error adding product", err);
    }
  };

  return (
    // <>
    //   <div className="addproduct">
    //     <div>
    //       <h1>Add Product</h1>
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           name="product_name"
    //           placeholder="Product Name"
    //           onChange={handleChange}
    //           required
    //         />
    //         <input
    //           name="old_price"
    //           type="number"
    //           placeholder="Old Price"
    //           onChange={handleChange}
    //         />
    //         <input
    //           name="discounted_price"
    //           type="number"
    //           placeholder="Discounted Price"
    //           onChange={handleChange}
    //         />
    //         <input
    //           name="shop_name"
    //           placeholder="Shop Name"
    //           onChange={handleChange}
    //         />
    //         <input
    //           name="shop_address"
    //           placeholder="Shop Address"
    //           onChange={handleChange}
    //         />
    //         <input
    //           name="product_manufacturing"
    //           placeholder="Manufacturing Info"
    //           onChange={handleChange}
    //         />
    //         <button type="submit">Add</button>
    //       </form>
    //     </div>
    //   </div>
    // </>

    <>
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <form onSubmit={handleSubmit} className="addProductForm">
        <input
          name="product_name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />
        <input
          name="old_price"
          type="number"
          placeholder="Old Price"
          onChange={handleChange}
        />
        <input
          name="discounted_price"
          type="number"
          placeholder="Discounted Price"
          onChange={handleChange}
        />
        <input
          name="shop_name"
          placeholder="Shop Name"
          onChange={handleChange}
        />
        <input
          name="shop_address"
          placeholder="Shop Address"
          onChange={handleChange}
        />
        <input
          name="product_manufacturing"
          placeholder="Manufacturing Info"
          onChange={handleChange}
        />
        <div className="buttonAlign">
          <button type="submit">Add</button>
          <button type="submit" onClick={() => setAddProduct(false)}>
            Close
          </button>
        </div>
      </form>
    </>
  );
};
export default AddProduct;
