import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://api.openweathermap.org/data/2.5/weather`;

export const getWeather = async (city, country)=>{
    try{
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
        return response.data
    } catch(err){
        console.log("Error while calling the api ",err.message)
        return err.response
    }
}