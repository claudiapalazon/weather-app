import { useState } from "react";
import ArrowRight from "../assets/icons/arrow-right.svg";

interface ISearchProps {
  changeLocation: (location: string) => void;
}

export const SearchBar = ({ changeLocation }: ISearchProps) => {
  const [inputValue, setDataInput] = useState<string>("");

  return (
    <div className="form-wrapper cf">
      <div className="pulse-circle"></div>
      <input
        onChange={(e) => {
          setDataInput(e.currentTarget.value);
        }}
        type="text"
        placeholder="Busca una ciudad"
      ></input>
      <button
        onClick={() => {
          changeLocation(inputValue);
        }}
      >
        <img src={ArrowRight} alt="" />
      </button>
    </div>
  );
};
