/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IWeatherData } from "./types";

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

interface IFetchWeather {
  data: null | IWeatherData;
  loading: boolean;
  error: boolean;
}

const FetchWeatherData = async (location: string): Promise<IFetchWeather> => {
  let data = null;
  let loading = true;
  let error = false;

  if (!apiKey?.trim()) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "OpenWeather API key missing. Crea un archivo .env en la raíz con: REACT_APP_OPENWEATHER_API_KEY=tu_api_key"
      );
    }
    return { data: null, loading: false, error: true };
  }

  try {
    const urlGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&appid=${apiKey}`;
    const getDataLocation = await fetch(urlGeo);
    let dataLocation = await getDataLocation.json();
    if (dataLocation?.length) {
      const urlWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${dataLocation[0].lat}&lon=${dataLocation[0].lon}&units=metric&appid=${apiKey}&lang=es&`;
      const getWeatherData = await fetch(urlWeather);
      const weatherData = await getWeatherData.json();
      data = { ...weatherData, locationName: location };
      localStorage.setItem("weatherData", JSON.stringify(data));
    }
  } catch {
    error = true;
  } finally {
    loading = false;
  }

  return { data, loading, error };
};

export const useWeather = (
  locationName: string,
  refreshData: boolean,
  setData: (data: null | IWeatherData) => void,
  setShowModal: (showModal: boolean) => void
) => {
  const [isLoading, setLoading] = useState<boolean>(
    locationName !== "" ? true : false
  );
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    if (locationName !== "") {
      (async () => {
        const weatherFetch = await FetchWeatherData(locationName);
        if (weatherFetch.data !== null) {
          let search = 0;
          const localModalSearchNumber =
            localStorage.getItem("showModalNumber");
          if (localModalSearchNumber)
            search = parseInt(localModalSearchNumber) + 1;
          localStorage.setItem("showModalNumber", search.toString());
          if (search > 5) setShowModal(true);
          setData(weatherFetch.data);
        }
        setLoading(weatherFetch.loading);
        setError(weatherFetch.error);
      })();
    }
  }, [locationName, refreshData]);

  return {
    isLoading,
    error,
  };
};
