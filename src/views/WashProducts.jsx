import { useEffect, useState } from "react";
import { formatCamUrl, formatProductsUrl } from "../utils/formatUrls";
import getRandomLpn from "../utils/randomLPN";
import axios from "axios";
import WWButton from "../components/WWButton";

export default function WashProducts({ location, setSelectedProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(formatCamUrl(location.id))
      .then((result) => {
        return getRandomLpn(result.data.response.lpn);
      })
      .then((lpn) => {
        axios.get(formatProductsUrl(lpn)).then((result) => {
          setProducts(result.data.response.products);
        });
      });
  }, [location]);

  return (
    <>
      <div className="description--container">
        <h1>Program</h1>
        <p>Vælg det ønskede program</p>
      </div>
      <div className="buttons--grid">
        {products.map((product) => {
          console.log(product);
          return (
            <WWButton
              key={product.productid}
              backgroundColor={"#00c167"}
              buttonText={product.name}
              onClick={() => setSelectedProduct(product)}
            >
              <p className="ww--button--description">{product.description}</p>
              <p className="ww--button--price">{product.price} kr</p>
            </WWButton>
          );
        })}
      </div>
    </>
  );
}
