const Router = require("express");
const Product = require("../db/productSchema");

// here it is route to many routes we can control from here
// I have only one or two routes so I am using here only
const route = Router();

// as per the standard we also have to use middleware for authemtication but for simple use I am not using them


// api for new product
route.post("/newproduct", async (req, res) => {
  const {
    product_name,
    old_price,
    discounted_price,
    shop_name,
    shop_address,
    product_manufacturing,
  } = req.body;
  try {
    const data = await Product.create({
      product_name,
      old_price,
      discounted_price,
      shop_name,
      shop_address,
      product_manufacturing,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error inserted while inserting", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

// api to get all product
route.get("/product", async (req, res) => {
  try {
    const products = await Product.find().lean();

    const filtered = products.map((p) => ({
      id: p._id,
      name: p.product_name,
      old_price: p.old_price,
      new_price: p.discounted_price,
      shop: p.shop_name,
    }));
    res.status(200).json({ success: true, data: filtered });
  } catch (error) {
    {
      console.log("Error occured while fetchng", error);
      res.status(500).json({ error: "Failed to get product" });
    }
  }
});

// to get single product

route.get("/display_product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const find_data = await Product.findById(id);
    if (!find_data) {
      return res.status(404).json({ message: "Product not found" });
    }

    const filtered = {
      name: find_data.product_name,
      old_price: find_data.old_price,
      new_price: find_data.discounted_price,
      shop: find_data.shop_name,
    };
    res.status(200).json({ success: true, data: filtered });
  } catch (error) {
    {
      console.log("Error occured while fetchng", error);
      res.status(500).json({ error: "Failed to get product" });
    }
  }
});

module.exports = route;
