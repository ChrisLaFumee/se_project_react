import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" alt="Logo" src={logo} />
      <p className="header__date-and-location">
        {currentDate} {weatherData.city}
      </p>

      <ToggleSwitch />

      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>

      <div className="header__user-container">
        <p className="header__username">Terrance Tagegne</p>
        <img src={avatar} alt="Terrance Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
