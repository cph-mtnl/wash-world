import WWButton from "../components/WWButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { formatLocationsUrl } from "../utils/formatUrls";

export default function WashLocations({ setSelectedLocation }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get(formatLocationsUrl()).then((result) => {
      setLocations(result.data.response.locations);
    });
  }, []);

  return (
    <>
      <div className="description--container">
        <h1>Velkommen til Wash World</h1>
        <p>Vælg den lokation du ønsker at starte en vask ved</p>
      </div>
      <div className="buttons--grid">
        {locations
          .map((location) => {
            return { available: location.status === "available", ...location };
          })
          .map((location) => {
            return (
              <WWButton
                key={location.id}
                backgroundColor={location.available ? "#00c167" : "grey"}
                onClick={() => setSelectedLocation(location)}
                disabled={!location.available}
                badgeText={location.available ? "" : "Closed for maintenance"}
                buttonText={location.name}
              />
            );
          })}
      </div>
    </>
  );
}
