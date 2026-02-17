import { IWeatherData } from "../api/types";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { getFormatedDateAndHour } from "../utils/formatDates";
import { MenuDayHour } from "../components/MenuDayHour";
import RefreshIconLight from "../assets/icons/refresh.svg";
import RefreshIconDark from "../assets/icons/refresh-dark.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

interface IWeatherView {
  data: null | IWeatherData;
  refreshData: boolean;
  setData: (data: null | IWeatherData) => void;
  setShowModal: (showModal: boolean) => void;
  dayOrWeekly: string;
  setDataMenu: (dayOrWeekly: string) => void;
  changeLocationHandler: (location: string) => void;
  currentLocationName: string;
}

// This is the page that shows when we have data
export const WeatherView = ({
  data,
  refreshData,
  setData,
  dayOrWeekly,
  setShowModal,
  setDataMenu,
  changeLocationHandler,
  currentLocationName,
}: IWeatherView) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {data ? (
        <div className="generalWeatherView">
          <div className="header">
            <div className="divCurrentLocationBasic">
              <div className="divNameRefresh">
                <div className="locationName">{data.locationName}</div>
                <button
                  className={
                    window.innerWidth < 768
                      ? "button-refresh single-button"
                      : "button-refresh"
                  }
                  onClick={() => {
                    changeLocationHandler(data.locationName);
                  }}
                >
                  {window.innerWidth < 768 ? (
                    <img
                      className="iconRefresh"
                      src={
                        theme === "light" ? RefreshIconLight : RefreshIconDark
                      }
                      alt=""
                    />
                  ) : (
                    "Actualizar"
                  )}
                </button>
              </div>

              <div className="locationDate">
                {getFormatedDateAndHour(
                  data?.timezone_offset,
                  data.current?.dt
                )}
              </div>
            </div>

            <Home
              setData={setData}
              refreshData={refreshData}
              setShowModal={setShowModal}
              changeLocationHandler={changeLocationHandler}
              currentLocationName={currentLocationName}
              fromWeather={true}
            />
          </div>
          <MenuDayHour dayOrWeekly={dayOrWeekly} setDataMenu={setDataMenu} />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};
