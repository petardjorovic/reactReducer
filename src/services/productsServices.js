import axios from "axios";

class ProductsServices {
  static handleAllProducts = () => axios.get("https://dummyjson.com/products");
}

export default ProductsServices;
