# Weather App

## Setup

1. Clone the repository:
  ```bash
  git clone https://github.com/aaaaliii/weather-app.git
  ```
2. Navigate to the project directory:
  ```bash
  cd weather-app
  ```
3. Install dependencies:
  ```bash
  npm install
  ```
4. Start the development server:
  ```bash
  npm start
  ```

## API Usage

This app uses the OpenWeatherMap API to fetch weather data. You need to sign up on [OpenWeatherMap](https://openweathermap.org/) to get an API key.

### Example API Request

To get the current weather for a city:
```
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

## Features

- **5-Day Forecast**: View a 5-day weather forecast.
- **Search Functionality**: Search for weather information by city name.
- **Dark Mode**: Enable users to toggle between dark and light mode.