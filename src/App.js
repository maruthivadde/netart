import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="bg-container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/manimar/image/upload/v1708963040/1_cankvt.png"
            alt="award-logo"
            className="award-image"
          />
        </div>
        <div className="header-container">
          <img
            src="https://res.cloudinary.com/manimar/image/upload/v1708963119/logo_hul7qz.png"
            alt="logo"
            className="logo-image"
          />
          <h1 className="heading">
            {" "}
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h1>
          <li className="li-heading">
            {" "}
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li className="li-heading">
            {" "}
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
          <img
            src="https://res.cloudinary.com/manimar/image/upload/v1708963064/2_lstacl.png"
            alt="award"
            className="award-img"
          />
          <p className="par-img">
            Government of India has awarded the{" "}
            <span className="par">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <p className="par-p">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </p>
      <img
        src="https://res.cloudinary.com/manimar/image/upload/v1708963093/3_wwq8xr.png"
        alt="missions"
        className="missions-img"
      />
      <p className="par-pp">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr />
      <h2 className="par-ppp">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </h2>
      <p className="par-ppv">
        CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS &
        DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
        BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
        AGRICULTURE & RESIDENTIAL
      </p>
      <div className="footer">
        <div className="container">
          <FaSquarePhone className="call" />
          <p className="color">Toll free 1800 200 1234</p>
        </div>
        <div className="container-m">
          <FaFacebook className="globe" />
          <p className="color">www.facebook.com/cripumps</p>
        </div>
        <div className="container-a">
          <FaGlobe className="globe" />
          <p className="color">www.crigroups.cpm</p>
        </div>
      </div>
    </div>
  );
}

export default App;
