import { Link, Outlet } from "react-router-dom";

interface IMenu {
  dayOrWeakly: string;
  setDataMenu: (dayOrWeakly: string) => void;
}

export const MenuDayHour = ({ dayOrWeakly, setDataMenu }: IMenu) => {
  return (
    <>
      <nav className="menuButtons">
        <Link
          className={
            dayOrWeakly === "hour" ? "menuOption selected" : "menuOption"
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
            dayOrWeakly === "weakly"
              ? "menuOption hourOption selected"
              : "menuOption hourOption"
          }
          onClick={() => {
            setDataMenu("weakly");
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
