const weatherbox=document.querySelector('.weather-box');
const container =document.querySelector('.container');
const search_box =document.querySelector('.search-box');
const input_box =document.querySelector('.input-box');
const searchbtn =document.getElementById('searchbtn');
const weather_img =document.querySelector('.weather-img');
const temperature =document.querySelector('.temperature');
const description =document.querySelector('.description');
const humidity =document.getElementById('humidity');
const wind =document.getElementById('wind_speed');
const weather_details=document.querySelector('.weather-details');
const location_not_found=document.querySelector('.location_not_found');
 async function checkweather(city)
{
const api_key="2969afe5f860042b0ba3aab197c55207";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
const weather_data = await fetch(`${url}`).then(response => response.json());

if(weather_data.cod==`404`)
{
    container.style.height='430px';
    weatherbox.classList.remove('active');
    weather_details.classList.remove('active');
    location_not_found.classList.add('active');
    return;
}
container.style.height='555px';
weatherbox.classList.add('active');
weather_details.classList.add('active');
location_not_found.classList.remove('active');
// console.log(weather_data);
temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
description.innerHTML =`${weather_data.weather[0].description}`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
wind.innerHTML=`${weather_data.wind.speed}Km/H`;

switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src="images/cloud.png";
    break;
    case 'Clear':
        weather_img.src="images/clear.png";
    break;
    case 'Mist':
        weather_img.src="images/mist.png";
    break;
    case 'Haze':
        weather_img.src="images/rain.png";
    break;
    case 'Snow':
        weather_img.src="images/Snow.png";
    break;
    case 'Rain':
        weather_img.src="images/rain.png";
    break;

}





} 




searchbtn.addEventListener('click',() =>{
checkweather(input_box.value);



});