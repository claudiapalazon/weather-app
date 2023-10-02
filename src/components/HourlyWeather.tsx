import { useEffect, useState } from "react";
import { IDailyData, IHourlyData, IWeatherData } from "../api/types";
import { getFormatedHour } from "../utils/formatDates";
import { CurrentWeather } from "./CurrentWeather";

interface IHourlyWeather {
  data: null | IWeatherData;
}

export const HourlyWeather = ({ data }: IHourlyWeather) => {
  const getWeatherCode = (icon: string) => {
    return icon !== "" ? `${icon}` : "01d";
  };

  const [selectedIndex, setIndex] = useState<number>(0);
  const [dataToShow, setDataToShow] = useState<
    IHourlyData | IDailyData | undefined
  >(data?.hourly[0]);

  useEffect(() => {
    setIndex(0);
    setDataToShow(data?.hourly[0]);
  }, [data]);

  return (
    <div>
      <div className="hourView scroll">
        {data?.hourly
          .filter((hour, index) => index < 25)
          .map((hour, index) => (
            <div
              key={index}
              className={
                index === selectedIndex
                  ? "cardHourView selected"
                  : "cardHourView"
              }
              onClick={() => {
                setIndex(index);
                setDataToShow(data?.hourly[index]);
              }}
            >
              {index === 0
                ? "Ahora"
                : getFormatedHour(data?.timezone_offset, hour.dt)}
              <img
                src={require(`../assets/icons/icon_${getWeatherCode(
                  hour.weather[0].icon
                )}.png`)}
                className="hourlyIcon"
                alt=""
              />
              <div className="hourlyTemp">{hour.temp.toFixed()}ºC</div>
            </div>
          ))}
      </div>
      <CurrentWeather
        data={dataToShow}
        timezone={data?.timezone_offset}
        type={"hourly"}
      />
    </div>
  );
};
