import { useEffect, useState } from "react";
import "./App.css";
import sun from "./Assets/113.png";
import { FaSearch } from "react-icons/fa";
function App() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("London");
  const [data, setData] = useState("");
  const componentMounted = true;

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ae869c4c2c3366a81e9f58da3db98bb3`
      );
      if (componentMounted) {
        setData(await response.json());
        console.log(data);
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchWeather();
  }, []);

  return (
    <div className="weather-app">
      <div className="container">
        <h2 className="brand"> The Weather</h2>
        <div>
           <h1 className="temp">{data.main}&deg;</h1>
          <div className="city-time">
            <h1 className="name">{data.name}</h1>
            <small>
              <span className="time"> 06:09 </span>-
              <span className="date"> Monday Sep 19</span>
            </small>
          </div>
          <div className="weather">
            <img src={sun} className="icon" alt="icon" width={50} height={50} />
            <span className="condition">Cloudy</span>
          </div>
        </div>
      </div>
      <div className="panel">
        <form id="locationInput">
          <input
            type="text"
            className="search"
            placeholder="Search Location"
            // onChange={handleCity}
          />
          <button type="submit" className="submit">
            <FaSearch />
          </button>
        </form>
        <ul className="cities">
          <li className="city">New York</li>
          <li className="city">California</li>
          <li className="city">Paris</li>
          <li className="city">Tokyo</li>
        </ul>
        <ul className="details">
          <h4>Weather Details</h4>
          <li>
            <span>Cloudy</span>
            <span className="cloudy">89%</span>
          </li>
          <li>
            <span>Humidity</span>
            <span className="humidity">50%</span>
          </li>
          <li>
            <span>Wind</span>
            <span className="wind">7km/h</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
