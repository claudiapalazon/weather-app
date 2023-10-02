/* eslint-disable react-hooks/exhaustive-deps */
import "./styles/app.scss";
import { Routes, Route, useNavigate } from "react-router-dom";

import ThemeProvider from "./theme/ThemeProvider";
import { Home } from "./pages/Home";
import { WeatherView } from "./pages/WeatherView";
import { useEffect, useState } from "react";
import { IWeatherData } from "./api/types";
import { ThemeSetter } from "./theme/ThemeSetter";
import { NotFound } from "./pages/NotFound";
import { HourlyWeather } from "./components/HourlyWeather";
import { DailyWeather } from "./components/DailyWeather";
import { ModalSubscription } from "./components/ModalSubscription";

function App() {
  const navigate = useNavigate();
  const [dayOrWeakly, setDataMenu] = useState<string>("hour");

  // Show subscribe Modal Settings
  const showModalLocal = localStorage.getItem("showModalNumber");
  const [showModal, setShowModal] = useState(
    showModalLocal && parseInt(showModalLocal) > 5 ? true : false
  );

  // Set weather data
  const localStorageWeather = JSON.parse(localStorage.getItem("weatherData")!);
  const [data, setData] = useState<IWeatherData | null>(
    localStorageWeather ? localStorageWeather : null
  );

  // Set the location input search
  const [currentLocationName, setCurrentLocationName] = useState<string>("");
  const [refreshData, setRefreshData] = useState<boolean>(false);

  const changeLocationHandler = (location: string) => {
    setCurrentLocationName(location);
    setRefreshData(!refreshData);
  };

  // When we have in localStorage some city data, we redirect to the page
  useEffect(() => {
    if (data !== null) {
      navigate(`/location/hourly`);
      setDataMenu("hour");
    }
  }, [data]);

  return (
    <ThemeProvider>
      <div className="app">
        {/* ThemeSetter is englobing the app because we need it for change the theme */}
        {showModal ? <ModalSubscription setShowModal={setShowModal} /> : null}
        <ThemeSetter />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <Home
                setData={setData}
                refreshData={refreshData}
                setShowModal={setShowModal}
                changeLocationHandler={changeLocationHandler}
                currentLocationName={currentLocationName}
              />
            }
          />

          <Route
            path="/location"
            element={
              <WeatherView
                data={data}
                refreshData={refreshData}
                setData={setData}
                setShowModal={setShowModal}
                dayOrWeakly={dayOrWeakly}
                setDataMenu={setDataMenu}
                changeLocationHandler={changeLocationHandler}
                currentLocationName={currentLocationName}
              />
            }
          >
            <Route path="hourly" element={<HourlyWeather data={data} />} />
            <Route path="daily" element={<DailyWeather data={data} />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
