import moment from "moment";

export const getFormatedDateAndHour = (timezone: number, date: number) => {
  const timezoneInMinutes = timezone / 60;
  const currDay = moment(date * 1000)
    .utcOffset(timezoneInMinutes)
    .format("L");
  const currTime = moment(date * 1000)
    .utcOffset(timezoneInMinutes)
    .format("HH:mm");

  return `${currDay} - ${currTime}`;
};

export const getFormatedHour = (timezone: number, date: number) => {
  const timezoneInMinutes = timezone / 60;
  const currTime = moment(date * 1000)
    .utcOffset(timezoneInMinutes)
    .format("HH:mm");

  return `${currTime}`;
};

export const getFormatedDate = (timezone: number, date: number) => {
  const weekDays = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const timezoneInMinutes = timezone / 60;
  const currDay = moment(date * 1000)
    .utcOffset(timezoneInMinutes)
    .weekday();

  const findName = weekDays.find((weekday, index) => index === currDay);
  return findName;
};
