
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById('button')
    
        btn.addEventListener("click",async () => {

        const apiKey = ""; // Replace with your API key
        const city = document.getElementById("cityInput").value;
        if (!city) {
            alert("Please enter a city name");
            return;
        }
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod !== 200) {
            
                document.getEementById("result").innerHTML = `<p>${data.message}</p>`;
                return;
            }
            
            document.getElementById("result").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    });
        

        

})

