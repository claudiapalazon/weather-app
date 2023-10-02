export interface IHourlyData {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: IWeatherInfo[];
  wind_deg: number;
  wind_speed: number;
  rain?: {
    "1h"?: number;
  };
  snow?: {
    "1h"?: number;
  };
}

export interface IDailyData {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
  uvi: number;
  weather: IWeatherInfo[];
  wind_deg: number;
  wind_speed: number;
  rain?: number;
  snow?: number;
}

interface ICurrentlyData {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: IWeatherInfo[];
  wind_deg: number;
  wind_speed: number;
  rain?: {
    "1h"?: number;
  };
  snow?: {
    "1h"?: number;
  };
}

interface IWeatherInfo {
  description: string;
  icon: string;
}

export interface IWeatherData {
  current: ICurrentlyData;
  daily: IDailyData[];
  hourly: IHourlyData[];
  timezone: string;
  timezone_offset: number;
  locationName: string;
}
