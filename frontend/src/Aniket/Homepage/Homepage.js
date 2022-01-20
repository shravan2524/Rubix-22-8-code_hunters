import React from "react";
import styles from "./Homepage.module.css";
import Mapsscreen from "../../Mapsscreen";
import { useState , useEffect} from "react";
import { createBrowserHistory } from 'history';


const Homepage = () => {
  let history = createBrowserHistory();
const [selectcity, setselectcity] = useState("Maharashtra");
const [type, settype] = useState("hotels");
const [lat, setlat] = useState("");
const [long, setlong] = useState("");
const latandlong = [
  {
      city: "Tamil Nadu",
      latitude: "11.059821",
      longitude: "78.387451",
  },
  {
      city: "Telangana",
      latitude: "17.123184",
      longitude: "79.208824",
  },
  {
      city: "Madhya Pradesh",
      latitude: "23.473324",
      longitude: "77.947998",
  },
  {
      city: "Haryana",
      latitude: "29.238478",
      longitude: "76.431885",
  },
  {
      city: "Chhattisgarh",
      latitude: "21.295132",
      longitude: "81.828232",
  },
  {
      city: "Maharashtra",
      latitude: "19.601194",
      longitude: "75.552979",
  },
  {
      city: "Tripura",
      latitude: "23.745127",
      longitude: "91.746826",
  },
  {
      city: "Telangana",
      latitude: "17.874857",
      longitude: "78.100815",
  },
  {
      city: "Chhattisgarh",
      latitude: "21.295132",
      longitude: "81.828232",
  },
  {
      city: "Karnataka",
      latitude: "15.317277",
      longitude: "75.713890",
  },
  {
      city: "Kerala",
      latitude: "10.850516",
      longitude: "76.271080",
  },
  {
      city: "Uttar Pradesh",
      latitude: "28.207609",
      longitude: "79.826660",
  },
  {
      city: "Karnataka",
      latitude: "15.317277",
      longitude: "75.713890",
  },
  {
      city: "Assam",
      latitude: "26.244156",
      longitude: "92.537842",
  },
  {
      city: "Rajasthan",
      latitude: "27.391277",
      longitude: "73.432617",
  },
  {
      city: "Himachal Pradesh",
      latitude: "32.084206",
      longitude: "77.571167",
  },
]
  function submit(){
    latandlong.forEach(e => {
      if(e.city===selectcity[1]){
        console.log(e);
        setlat(e.latitude);
        setlong(e.longitude);
        sessionStorage.setItem("city", e.city);
        sessionStorage.setItem("latitude", e.latitude);
        sessionStorage.setItem("longitude", e.longitude);
        sessionStorage.setItem("type", type[1]);
      }
    });
    history.push('/search');
    window.location.reload();
  }
  return (
    <React.Fragment>
      <section className={styles["main-section"]}>
        <div>
          <h1>Search your next Holiday!</h1>
          <select onChange={(e) => {
                                    setselectcity(prevState => ({ ...prevState, ["1"]: e.target.value }))
                                }}>
            <option >Tamil Nadu</option>
            <option >Telangana</option>
            <option >Madhya Pradesh</option>
            <option >Maharashtra</option>
            <option>Tripura</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Uttar Pradesh</option>
            <option>Karnataka</option>
            <option>Assam</option>
            <option>Chhattisgarh</option>
            <option>Haryana</option>
            <option>Rajasthan</option>
            <option>Himachal Pradesh</option>
          </select>
          <select onChange={(e) => {
                                    settype(prevState => ({ ...prevState, ["1"]: e.target.value }))
                                }}>
            <option>restaurants</option>
            <option>hotels</option>
            <option>attractions</option>
          </select>
          <button onClick={submit}>GO</button>
        </div>
      </section>
      <section className={styles["reccomendation-section"]}>
        <hr />
        <div className={styles["rec-content"]}>
              <div>
                <Mapsscreen />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Homepage;
