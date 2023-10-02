import { IDailyData, IHourlyData } from "../api/types";

interface ICurrentWeather {
  data: IHourlyData | IDailyData | undefined;
}

export const CurrentWeather = ({ data }: ICurrentWeather) => {
  const current = data;
  const weatherCode =
    current?.weather[0].icon !== "" ? `${current?.weather[0].icon}` : "01d";

  return (
    <div className="cardCurrentWeather">
      <div className="headerCurrentW">
        <div>
          {/* <div className="currentTemp">{current?.temp.toFixed()}ºC</div>
          <div>Sensación de {current?.feels_like.toFixed()}ºC</div> */}
        </div>
        <div className="iconDescription">
          <div>{current?.weather[0].description}</div>
          <img
            src={require(`../assets/icons/icon_${weatherCode}.png`)}
            className="currentIcon"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
