let apikey="d56f3eec1c33c7626bf97ac2a6454274";
let apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let text=document.querySelector(".search input");

let btn=document.querySelector(".search button");

let weatherIcon=document.querySelector(".weather-icon");
async function chechWeather(city){
    let response=await fetch(apiurl+city+`&appid=${apikey}`);
    let data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";
   
    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        weatherIcon.src="snow.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src="mist.png";
    }
    document.querySelector(".weather").style.display="block";
}   
btn.addEventListener("click",()=>{
    chechWeather(text.value);
})

