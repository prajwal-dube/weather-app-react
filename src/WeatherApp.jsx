import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Mysore",
        feelsLike : 21.87,
        humidity : 92,
        temp : 21.28,
        tempMax : 21.28,
        tempMin : 21.28,
        weather : "haza"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
    )
}