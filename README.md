<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Weather Report

A responsive web app to check real-time weather and 5-forecast for any city worldwide. Enter a city name to view current temperature, weather conditions, and forecast with icons. Features error handling, animated UI, and mobile-friendly design. Powered by OpenWeatherMap API. Perfect for learners and weather enthusiasts.

## Features

- **Current Weather:** Instantly see the current temperature, weather condition, and city name.
- **3-Period Forecast:** View the next five forecast periods with temperature, time, and weather icons.
- **Responsive Design:** Works smoothly on desktop, tablet, and mobile devices.
- **Animated UI:** Smooth transitions and visually appealing layout.
- **Error Handling:** User-friendly error messages and fallback visuals for invalid input or network issues.


## Demo

Try it live:
*Add your GitHub Pages or deployment link here*

## How It Works

1. **Enter a City:**
Type the name of any city in the input field.
2. **Submit:**
Click the "Submit" button to fetch weather data.
3. **View Results:**
    - The current weather appears with a large icon, temperature, and city name.
    - The forecast section shows the next five periods with icons and temperatures.
4. **Error Handling:**
If the city is not found or there is a network error, a friendly message and fallback image are shown.

## Tech Stack

- **Frontend:** HTML, CSS (with responsive and animated styles), JavaScript (ES6+)
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)


## Project Structure

```
/assets
  /css
    style.css
    mobilestyle.css
  /js
    script.js
    config.js
  /images
    weather-svgrepo-com.svg
    20064239_6199763.svg
index.html
README.md
```


## Customization

- **API Key:**
Store your OpenWeatherMap API key in `config.js` .
- **Theme:**
Easily change colors in the `:root` section of `style.css`.
- **Forecast Length:**
Adjust the number of forecast periods in `script.js`.


## Usage

1. **Clone the Repo:**

```bash
git clone https://github.com/yourusername/Weather-Report.git
```

2. **Add Your API Key:**
    - Create a `config.js` file in `/assets/js/`:

```js
const API_KEY = "your_openweather_api_key";
```

    - Add `config.js` to `.gitignore`.
3. **Open `index.html` in your browser.**

## Mobile Support

- Fully responsive with dedicated mobile and tablet styles.
- Touch-friendly buttons and inputs.


## Error Handling

- Displays a fallback SVG image and message if the city is not found or there is a network error.
- Resets error state on new search.


## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Credits

- Weather data and icons: [OpenWeatherMap](https://openweathermap.org/)
- Weather SVG: [SVG Repo](https://www.svgrepo.com/)


## Contact

For questions or suggestions, open an issue or contact the maintainer via GitHub.

<div style="text-align: center">⁂</div>

[^1]: index.html

[^2]: mobilestyle.css

[^3]: style.css

[^4]: 20064239_6199763.jpg

[^5]: weather-svgrepo-com.jpg

[^6]: script.js

