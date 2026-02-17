import { Link, Outlet } from "react-router-dom";

interface IMenu {
  dayOrWeekly: string;
  setDataMenu: (dayOrWeekly: string) => void;
}

export const MenuDayHour = ({ dayOrWeekly, setDataMenu }: IMenu) => {
  return (
    <>
      <nav className="menuButtons">
        <Link
          className={
            dayOrWeekly === "hour" ? "menuOption selected" : "menuOption"
          }
          onClick={() => {
            setDataMenu("hour");
          }}
          to="hourly"
        >
          Por horas
        </Link>
        <Link
          className={
            dayOrWeekly === "weekly"
              ? "menuOption hourOption selected"
              : "menuOption hourOption"
          }
          onClick={() => {
            setDataMenu("weekly");
          }}
          to="daily"
        >
          Por días
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
