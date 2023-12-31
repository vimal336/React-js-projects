import React,{useState} from 'react';
import './App.css';
import Inputer from "./components/Input";
import axios from 'axios';
import { Result } from './components/Result';
import WEATHER_API_KEY from './components/apikey';

function App() {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather = async ()=>{
 try{
 const apiKey = WEATHER_API_KEY;
 const unit = "metric";
 const url = "https://api.openweathermap.org/data/2.5/weather?q=" +
 input + 
 "&appid=" +
 apiKey +
 "&units=" +
 unit;

 
const response = await axios.get(url);
const temp =  await response.data.main.temp;
const WeatherDescription = response.data.weather[0].description;
const icon = await response.data.weather[0].icon;
const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
setTemp(temp);
setDescription(WeatherDescription);
setIcon(imageUrl);
setInput("");


} catch (error){
  alert('Invalid city name');
 }



}
return (
    <div className="App">
      {temp === "" ? (
      <Inputer input={input} setInput={setInput} findWeather={findWeather}/> 
      ) : (
      <Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>
      )}
    </div>
  );
}

export default App;
