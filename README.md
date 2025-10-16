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
