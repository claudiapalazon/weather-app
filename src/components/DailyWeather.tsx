import { useState } from "react";
import { IDailyData, IHourlyData, IWeatherData } from "../api/types";
import { getFormatedDate } from "../utils/formatDates";
import { CurrentWeather } from "./CurrentWeather";

interface IDailyWeather {
  data: null | IWeatherData;
}

export const DailyWeather = ({ data }: IDailyWeather) => {
  const getWeatherCode = (icon: string) => {
    return icon !== "" ? `${icon}` : "01d";
  };

  const [selectedIndex, setIndex] = useState<number>(0);

  const [dataToShow, setDataToShow] = useState<
    IHourlyData | IDailyData | undefined
  >(data?.daily[0]);

  return (
    <div>
      <div className="dailyView scroll">
        {data?.daily
          .filter((day, index) => index < 25)
          .map((day, index) => (
            <div
              key={index}
              className={
                index === selectedIndex
                  ? "cardHourView selected"
                  : "cardHourView"
              }
              onClick={() => {
                setIndex(index);
                setDataToShow(data?.daily[index]);
              }}
            >
              <div className="weekDay">
                {index === 0
                  ? "Hoy"
                  : getFormatedDate(data?.timezone_offset, day.dt)}
              </div>
              <div className="dayView">
                <img
                  src={require(`../assets/icons/icon_${getWeatherCode(
                    day.weather[0].icon
                  )}.png`)}
                  className="hourlyIcon"
                  alt=""
                />
                <div className="tempView">
                  <div>Máx: {day.temp.max.toFixed()}ºC</div>
                  <div>Min: {day.temp.min.toFixed()}ºC</div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <CurrentWeather
        data={dataToShow}
        timezone={data?.timezone_offset}
        type={"daily"}
      />
    </div>
  );
};
