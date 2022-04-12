import axios from "axios";
import { useEffect, useState } from "react";
import { formatStartWashUrl } from "../utils/formatUrls";

export default function WashInProgress({ location, product }) {
  const [washInfo, setWashInfo] = useState(undefined);
  const styles = {
    color: "#00c167",
  };

  useEffect(() => {
    axios
      .post(formatStartWashUrl(location.id, product.productid))
      .then((result) => {
        return result.data.response;
      })
      .then((data) => {
        console.log(data);
        setWashInfo(data);
      });
  }, [product, location]);

  return (
    <div className="description--container max-height">
      <h1 style={styles}>{product.name}</h1>
      <p>Tak for dit valg af vores {product.name} vask</p>
      <p>Varighed: {washInfo?.estimated_duration || "ukendt"}</p>
    </div>
  );
}
