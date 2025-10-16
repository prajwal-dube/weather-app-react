# 🌤️ Weather App (React + Vite + Material UI)

A simple, elegant, and responsive Weather Application built using React, Vite, and Material UI.  
The app fetches live weather data from the OpenWeatherMap API and displays it in a user-friendly interface with dynamic styling and visuals.

---

# 🚀 Project Overview

This Weather App was created as a hands-on learning project to revise and apply core **React concepts** such as:
- Components & JSX
- Props and State
- useState() and useEffect() hooks
- Conditional Rendering
- Event Handling
- API Fetching (Asynchronous JavaScript)
- Component-based Styling and Material UI integration
- Dynamic component updates and state-based re-rendering

---

## ⚙️ Tech Stack

 Technology and  Purpose 
**React (with Vite)** : Frontend framework for building UI components 
**Material UI (MUI)** : For pre-styled UI components like Cards, Buttons, Typography 
**OpenWeatherMap API** : To fetch real-time weather data 
**Unsplash** : For fetching dynamic background images based on weather 
**JavaScript (ES6+)** : Core language used for logic and event handling 
**CSS Modules** : For styling individual components 

---

## 🌐 API Details

**API Used:** [OpenWeatherMap Current Weather Data API]   (https://openweathermap.org/current)

- **Base URL:** `https://api.openweathermap.org/data/2.5/weather`
- **Parameters used:**
    1. City name (entered by user)
    2. Your personal API key
    3. To display temperature in Celsius

Example API Call:
```js
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric


API Features:

Provides current temperature, humidity, wind speed, and condition (like clear, cloudy, rainy)

Used with async and await to handle asynchronous fetch calls

Responses are handled using JSON parsing



🧠 Key React Concepts Revised
1️⃣ Components and JSX

Each UI section (like InfoBox, WeatherApp, etc.) was created as a separate component.

JSX allowed mixing HTML and JavaScript together.

Fragments (<> </>) were used to group elements without adding extra DOM nodes.

2️⃣ Props

Data was passed between components using props.

Parent component (App.jsx) sent data to child components (like InfoBox.jsx).

3️⃣ State

Managed dynamic data using the useState() hook.

Example: Storing weather info or user input (city name).

4️⃣ useEffect Hook

Automatically triggered re-fetching of API data when the user input (city name) changed.

Demonstrated side effects and dependency arrays.

5️⃣ Conditional Rendering

Displayed UI only when valid weather data was fetched.

Example: Showing “Loading…” or “City not found” when appropriate.

6️⃣ Event Handling

Used onClick, onChange events for button clicks and input fields.

7️⃣ Dynamic Styling

Weather cards changed background images based on conditions (sunny, cloudy, rainy).

Integrated Unsplash image URLs dynamically.

8️⃣ Material UI Components Used

Card, CardContent, Typography, Button, TextField

Icons from MUI Icons

Example: ☀️ Sunny, ☁️ Cloud, 🌧️ Rainy



weather-app-react/
│
├── src/
│   ├── components/
│   │   ├── InfoBox.jsx        → Displays weather information
│   │   ├── WeatherApp.jsx     → Handles API call and user input
│   │   ├── WeatherApp.css     → Styles for WeatherApp component
│   │   ├── InfoBox.css        → Styles for InfoBox component
│   │
│   ├── App.jsx                → Main parent component
│   ├── App.css
│   ├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

