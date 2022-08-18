import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import sunny from "./icons/sunny.svg";
import night from "./icons/night.svg";
import day from "./icons/day.svg";
import cloudynight from "./icons/cloudy-night.svg";
import cloudy from "./icons/cloudy.svg";
import rainnight from "./icons/rain-night.svg";
import rain from "./icons/rain.svg";
import storm from "./icons/storm.svg";
import pressure from "./icons/pressure.svg";
import perfectDay from "./icons/perfect-day.svg";

export const WeatherIcons = {
  "01d": {sunny},
  "01n": {night},
  "02d": {day},
  "02n": {cloudynight},
  "03d": {cloudy},
  "03n": {cloudy},
  "04d": {perfectDay},
  "04n": {cloudynight},
  "09d": {rain},
  "09n": {rainnight},
  "10d": {rain},
  "10n": {rainnight},
  "11d": {storm},
  "11n": {storm},
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>QA LEARN VKR</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
