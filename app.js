async function fetchdata() {
    let api = fetch("https://api.weatherapi.com/v1/current.json?key=68b34a3e26044f6093132907250501&q=karachi&aqi=no");

    let res = await api;
    let data = await res.json();
    console.log(data);

    
    const parent = document.getElementById("parent");
    
    parent.innerHTML = 
    `
    <div class="child cssanimation fadeInTop">
    <h2><span class="key">Country:</span> <span class="value"> ${data.location.country}.</span></h2>
    <h2><span class="key">Region:</span> <span class="value">${data.location.region}.</span></h2>
    <h2><span class="key">Location:</span> <span class="value">${data.location.name}.</span></h2>
    <h2><span class="key">Temperature:</span> <span class="value">${data.current.temp_c}°C.</span></h2>
    <h2><span class="key">Wind:</span> <span class="value">${data.current.wind_kph} km/h.</span></h2>
    <h2><span class="key">Wind-Chill:</span> <span class="value">${data.current.windchill_c} °C.</span></h2>
    <h2><span class="key">Humidity:</span> <span class="value">${data.current.humidity}%.</span></h2>
    </div>   
    `
    
}



