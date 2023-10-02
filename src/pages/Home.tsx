import { SearchBar } from "../components/SearchBar";
import { useWeather } from "../api/weather";
import { IWeatherData } from "../api/types";

interface IHomeData {
  setData: (data: null | IWeatherData) => void;
  refreshData: boolean;
  setShowModal: (showModal: boolean) => void;
  changeLocationHandler: (location: string) => void;
  currentLocationName: string;
  fromWeather?: boolean;
}

export const Home = ({
  setData,
  refreshData,
  setShowModal,
  changeLocationHandler,
  currentLocationName,
  fromWeather,
}: IHomeData) => {
  //This line is the one who get the fetch data of OpenWeatherMap with the location name. It returns loading or error
  const { isLoading, error } = useWeather(
    currentLocationName,
    refreshData,
    setData,
    setShowModal
  );
  return (
    <div className={!fromWeather ? "home" : ""}>
      <div className={!fromWeather ? "titleSearchDiv" : ""}>
        {!fromWeather ? <p className="homeTitle">El Tiempo</p> : ""}

        <SearchBar changeLocation={changeLocationHandler} />
        <div className="emptyText">
          {isLoading ? "Buscando..." : ""}
          {error ? "Sin coincidencias en la búsqueda" : ""}
        </div>
      </div>
    </div>
  );
};
