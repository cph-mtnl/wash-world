import { useState, useEffect } from "react";
import WashLocations from "./views/WashLocations";
import NavBar from "./components/NavBar";
import "./styles/app.css";
import WashProducts from "./views/WashProducts";
import WashInProgress from "./views/WashInProgress";

function App() {
  const [view, setView] = useState("locations");
  const [location, setLocation] = useState(undefined);
  const [product, setProduct] = useState(undefined);

  function handleSetLocation(location) {
    setView("products");
    setLocation(location);
  }

  function handleSetProduct(product) {
    setView("in progress");
    setProduct(product);
  }

  return (
    <div>
      <NavBar />
      <div className="content">
        {view === "locations" && (
          <WashLocations setSelectedLocation={handleSetLocation} />
        )}
        {view === "products" && location && (
          <WashProducts
            location={location}
            setSelectedProduct={handleSetProduct}
          />
        )}
        {view === "in progress" && location && product && (
          <WashInProgress location={location} product={product} />
        )}
      </div>
    </div>
  );
}

export default App;
