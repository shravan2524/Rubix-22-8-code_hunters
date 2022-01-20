import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Card from './components/Card';
import { getPlacesData } from './api/travelAdvisorAPI';

const Mapsscreen = () => {
    const [slatitude, setslatitude] = useState("19.0760");
    const [slongitude, setslongitude] = useState("72.8777");

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

    const [nearby, setnearby] = useState([]);
    useEffect(() => {
        getPlacesData("city", "restaurants", "19.0760", "72.8777")
        .then((data) => {
            setnearby(data.data);
            console.log(data.data, "data");
        })
        .catch((err)=>console.log(err));
    }, [])

    return (
        <div>
            <div>
                Hotels near by you!
            </div>
            <div style={{display:"grid", gridTemplateColumns:"auto auto auto"}}>
            {   nearby
                ?nearby.map((e) => {
                    return <Card e={e} />
                })
                : null
            }
            </div>

        </div>
    );
}

export default Mapsscreen;
