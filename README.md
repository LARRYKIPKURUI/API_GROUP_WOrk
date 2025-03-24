# Weather API Website

## Overview
This project is a simple weather website that fetches and displays weather data using a Weather API. It is built using HTML, CSS, and JavaScript, with Postman used for testing the API.

## Features
- Fetches real-time weather data based on user input (e.g., city name)
- Displays temperature, weather conditions, humidity, and wind speed
- User-friendly UI with basic styling
- Error handling for invalid city names or API errors

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling for the website
- **JavaScript**: Fetching and displaying API data
- **Weather API**: Provides real-time weather data
- **Postman**: Used for API testing

## Setup & Usage
### Prerequisites
- A web browser (Chrome, Firefox, etc.)
- Internet connection
- API key from a weather service provider (Open Weather)

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/LARRYKIPKURUI/weather-api-website.git
   ```
2. Navigate to the project folder:
   ```bash
   cd weather-api-website
   ```
3. Open `index.html` in a web browser.
4. Enter a city name in the input field and get the weather details.

## API Usage
- The project uses a Weather API to fetch weather details.
- Replace `YOUR_API_KEY` in the JavaScript file with your actual API key.
- API Endpoint Example:
  ```
  https://api.openweathermap.org/data/2.5/weather?q=cityname&appid=YOUR_API_KEY&units=metric
  ```

## Testing with Postman
1. Open Postman and create a new request.
2. Select `GET` as the request method.
3. Enter the API endpoint with a valid city name and API key.
4. Click `Send` and check the JSON response.

## Future Improvements
- Add geolocation support to fetch user’s location automatically.
- Improve UI with better styling and animations.
- Display a 5-day weather forecast.



