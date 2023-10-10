import { IDailyData, IHourlyData } from "../api/types";
import windIcon from "../assets/icons/wind.svg";
import rainIcon from "../assets/icons/rain.svg";
import cloudIcon from "../assets/icons/cloud.svg";
import uviIcon from "../assets/icons/uv.svg";
import visibilityIcon from "../assets/icons/visibility.svg";
import preassureIcon from "../assets/icons/preassure.svg";
import humidityIcon from "../assets/icons/humidity.svg";
import dewIcon from "../assets/icons/dew_point.svg";
import sunsetIcon from "../assets/icons/sunset.svg";
import sunriseIcon from "../assets/icons/sunrise.svg";
import { getFormatedHour } from "../utils/formatDates";

interface ICurrentWeather {
  data: IHourlyData | IDailyData | undefined;
  timezone: number | undefined;
  type: string;
}

// This is the card that appears in hourly view and daily view with weather information
export const CurrentWeather = ({ data, timezone, type }: ICurrentWeather) => {
  const weatherCode =
    data?.weather[0].icon !== "" ? `${data?.weather[0].icon}` : "01d";

  const getTemp = (temp: any, type?: string) => {
    if (type) {
      return temp[type].toFixed();
    } else {
      return temp.toFixed();
    }
  };

  const getDataRainSnow = (data: any, rainSnow: string, type?: string) => {
    const name = rainSnow === "rain" ? "Lluvia" : "Nieve";
    if (type === "hourly") {
      if (data?.[rainSnow] && data?.[rainSnow]["1h"]) {
        return `- ${name}: ${data?.[rainSnow]["1h"]}mm`;
      }
    } else {
      if (data?.[rainSnow]) {
        return `- ${name}: ${data?.[rainSnow]}mm`;
      }
    }
  };

  const getMoonData = (moonPhase: number) => {
    const moon_phases = [
      { name: "Luna Llena", icon: 1 },
      { name: "Menguante", icon: 2 },
      { name: "Luna Nueva", icon: 3 },
      { name: "Creciente", icon: 4 },
    ];
    const moon =
      moonPhase > 0 && moonPhase < 0.5
        ? moon_phases[3]
        : moonPhase === 0.5
        ? moon_phases[0]
        : moonPhase > 0.5 && moonPhase < 1
        ? moon_phases[1]
        : moon_phases[2];
    return moon;
  };

  return (
    <div className="cardCurrentWeather">
      <div className="headerCurrentW">
        {type === "hourly" ? (
          <div>
            <div className="currentTemp">{getTemp(data?.temp)}ºC</div>
            <div>Sensación de {getTemp(data?.feels_like)}ºC</div>
          </div>
        ) : (
          <div className="maxMindiv">
            <div>
              Máx
              <div className="maxminTemp">{getTemp(data?.temp, "max")}ºC</div>
            </div>
            <div className="marginMin">
              Min
              <div className="maxminTemp">{getTemp(data?.temp, "min")}ºC</div>
            </div>
          </div>
        )}

        <div className="iconDescription">
          <div>{data?.weather[0].description}</div>
          <img
            src={require(`../assets/icons/icon_${weatherCode}.png`)}
            className="currentIcon"
            alt=""
          />
        </div>
      </div>
      <div className="cardSingleData">
        <div className="elements">
          <img className="iconElement" src={rainIcon} alt="" />
          Precipitaciones: {data?.pop ? (data?.pop * 100).toFixed() : 0}%{" "}
          {getDataRainSnow(data, "rain", type)}{" "}
          {getDataRainSnow(data, "snow", type)}
        </div>
        <div className="elements">
          <img className="iconElement" src={windIcon} alt="" />
          Viento: - Dirección: {data?.wind_deg}º - Velocidad:{" "}
          {data?.wind_speed.toFixed()}m/s
        </div>
        <div className="elements">
          <img className="iconElement" src={cloudIcon} alt="" />
          Nubes: {data?.clouds}%
        </div>
        <div className="elements">
          <img className="iconElement" src={uviIcon} alt="" />
          Uvi: {data?.uvi}
        </div>
        {type === "hourly" ? (
          <div className="elements">
            <img className="iconElement" src={visibilityIcon} alt="" />
            Visibilidad: {data?.visibility ? data?.visibility / 1000 : 0}km
          </div>
        ) : null}
        <div className="elements">
          <img className="iconElement" src={preassureIcon} alt="" />
          Presión: {data?.pressure}hPa
        </div>
        <div className="elements">
          <img className="iconElement" src={humidityIcon} alt="" />
          Humedad: {data?.humidity}%
        </div>
        <div className="elements">
          <img className="iconElement" src={dewIcon} alt="" />
          Punto de rocío: {data?.dew_point.toFixed()}ºC
        </div>
        {type === "daily" ? (
          <>
            <div className="elements">
              <img className="iconElement" src={sunriseIcon} alt="" />
              Amanecer:{" "}
              {data?.sunrise && timezone
                ? getFormatedHour(timezone, data?.sunrise)
                : null}
            </div>
            <div className="elements">
              <img className="iconElement" src={sunsetIcon} alt="" />
              Atardecer:{" "}
              {data?.sunset && timezone
                ? getFormatedHour(timezone, data?.sunset)
                : null}
            </div>
            <div className="elements">
              <img
                className="iconElement"
                src={require(`../assets/icons/moon_${
                  data?.moon_phase ? getMoonData(data?.moon_phase).icon : 3
                }.svg`)}
                alt=""
              />
              Fase Lunar:{" "}
              {data?.moon_phase
                ? getMoonData(data?.moon_phase).name
                : "Luna Nueva"}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
