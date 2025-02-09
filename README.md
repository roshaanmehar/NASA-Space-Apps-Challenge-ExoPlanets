# NASA Space Apps Challenge - Exoplanet Habitability Project

## Team Members
- Armaghan
- Musab
- Ali
- Shahzaib
- Muhaimin
- Roshaan

## Project Overview
This project was developed for the **NASA Space Apps Challenge** to determine the habitability of exoplanets using data from NASA's Exoplanet Archive. We built a custom algorithm to analyze planetary characteristics and assess their potential to support life. The project includes a backend for data processing and a frontend for visualization, available at: [Exo-Two](https://exo-two.vercel.app/).

## Features
- **Exoplanet Data Processing**: Retrieves and processes exoplanetary data from NASA's archive.
- **Habitability Algorithm**: Uses Earth as a benchmark to compare key planetary features.
- **Automated Data Cleaning**: Removes null values and standardizes data for accurate analysis.
- **Backend & API**: Developed in Python and Node.js to process habitability scores and provide an API.
- **Frontend Visualization**: Interactive UI to explore exoplanets and their habitability ratings.

## Algorithm Development
Our algorithm assesses habitability based on multiple planetary characteristics:
1. **Data Collection**: We extracted exoplanetary data including:
   - Distance from the host star
   - Density
   - Surface temperature
   - Mass and radius
   - Star flux
   - Orbital period and eccentricity
   - Gravity
   - Earth Similarity Index (ESI)
2. **Benchmarking Against Earth**:
   - We defined Earth’s values as the baseline for an ideal habitable planet.
   - Allowed deviations were set based on scientific thresholds.
3. **Scoring System**:
   - Each characteristic was evaluated against Earth’s reference values.
   - A weighted scoring system determined an overall habitability percentage.
4. **Final Habitability Decision**:
   - Planets with scores above a certain threshold were classified as potentially habitable.
   - Additional factors like atmospheric composition, surface water, and magnetic field were considered.

## Technologies Used
### Backend:
- **Python (Pandas, NumPy)** for data analysis and processing.
- **Node.js & Express** for API development.
- **MongoDB** for storing analyzed data.

### Frontend:
- **React.js** for UI development.
- **Chart.js** for data visualization.
- **Tailwind CSS** for styling.

## Installation & Usage
### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/roshaanmehar/NASA-Space-Apps-Challenge-ExoPlanets.git
   cd exoplanet-habitability
   ```
2. Install dependencies:
   ```sh
   pip install pandas numpy
   npm install
   ```
3. Run the backend server:
   ```sh
   python app.py  # For data processing
   node server.js  # For API
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install frontend dependencies:
   ```sh
   npm install
   ```
3. Run the frontend:
   ```sh
   npm start
   ```

## API Endpoints
### Retrieve Exoplanet Data
- **Endpoint:** `GET /planets`
- **Response:**
  ```json
  [
    {
      "name": "EPIC 220674823 b",
      "habitability_score": 27.03,
      "status": "Unhabitable"
    },
    {
      "name": "EPIC 220674823 c",
      "habitability_score": 23.52,
      "status": "Unhabitable"
    }
  ]
  ```
## Website UI
#### This is what the website's home page looks like:
<img src="https://github.com/roshaanmehar/NASA-Space-Apps-Challenge-ExoPlanets/blob/main/homepagenasa.png" width="500">

#### This is an info slide, that should come up as you scroll down.
<img src="https://github.com/roshaanmehar/NASA-Space-Apps-Challenge-ExoPlanets/blob/main/infopage.png" width="500">

#### This is the planet carousel/search bar, that lets you explore the planets.
<img src="https://github.com/roshaanmehar/NASA-Space-Apps-Challenge-ExoPlanets/blob/main/exoplanetsearcher.png" width="500">

#### This is an integrated gemini chatbot that will answer your queries regarding exoplanets.
<img src="https://github.com/roshaanmehar/NASA-Space-Apps-Challenge-ExoPlanets/blob/main/geminichatbot.png" width="500">

## Future Enhancements
- Incorporate AI/ML for advanced habitability predictions.
- Expand database with real-time exoplanet discoveries.
- Improve UI with 3D visualizations of exoplanets.

## License
This project is open-source and available for future research and development.

