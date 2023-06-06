const API_KEY = "fb65f6df21dc678aa3f3a37948ca155d";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function getWeatherByCity(city = ""){
    try {
        const response = await fetch(`${BASE_URL}${city}&appid=${API_KEY}`)
        if(response.status === 404) throw new Error("[Service]: Problems with Weather Api");
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error)
        
    }
}