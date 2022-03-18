import info from "../info";

export default function WashLocation({ location }) {
  function getProductUrl() {
    return info.backendUrl + "/cam/" + location.id;
  }

  function locationClicked() {
    console.log(location.name, location.id);
    console.log(getProductUrl());
  }
  return <button onClick={locationClicked}>{location.name}</button>;
}
