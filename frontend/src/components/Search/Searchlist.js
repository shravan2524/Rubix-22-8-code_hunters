import React from 'react';
import { useState, useEffect } from 'react';
import { getPlacesData } from '../../api/travelAdvisorAPI';
import Card from '../Card';
const Searchlist = () => {
    const city = sessionStorage.getItem("city");
    const longitude = sessionStorage.getItem("longitude");
    const latitude = sessionStorage.getItem("latitude");
    const type = sessionStorage.getItem("type");
    // console.log(city, longitude, latitude, type);
    const [nearby, setnearby] = useState([]);
    useEffect(() => {
        getPlacesData(city, type, latitude, longitude)
        .then((data) => {
            setnearby(data.data);
            console.log(data.data, "data");
        })
        .catch((err)=>console.log(err));
    }, [])
    return (
        <div style={{display:"grid", gridTemplateColumns:"auto auto auto"}}>
           {   nearby
                ?nearby.map((e) => {
                    return <Card e={e} />
                })
                : null
            }
        </div>
    );
}

export default Searchlist;
