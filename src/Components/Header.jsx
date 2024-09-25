import IFMGA from '../../public/Logo/IFMGA.png';
import NZMGA from '../../public/Logo/NZMGA.png';
import { useState } from 'react';
import iceaxe from '../../public/Logo/icons/ice-axe.png';
import ski from '../../public/Logo/icons/alpine.png';
import mountain from '../../public/Logo/icons/mountain.png';
import question from '../../public/Logo/icons/question.png';
import email from '../../public/Logo/icons/mail.png';
import whatsapp from '../../public/Logo/icons/whatsapp.png';
import { Link } from 'react-router-dom';
import { GiWorld } from 'react-icons/gi';

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  function toggle() {
    setDropdown((preState) => !preState);
  }

  function onClick() {
    setDropdown(false);
  }

  return (
    <header>
      <div className="flex bg-dark-blue text-font-blue items-center p-5  justify-around">
        <Link to="/">
          <div>
            <h1 className="text-xl md:text-3xl lg:text-4xl">
              <strong>
                Petrouchka <br />
                Steiner-Grierson
              </strong>
            </h1>
            <h2 className="text-sm md:text-xl lg:text-2x">IFMGA Mountain & Ski Guide</h2>
          </div>
        </Link>
        <img className="w-auto h-20 lg:h-24" src={IFMGA} alt="IFMGA Logo" />
        <img className="hidden sm:block sm:w-auto h-20 lg:h-24" src={NZMGA} alt="NZMGA logo" />
        <button className="sm: text-2xl" onClick={toggle}>
          ☰
        </button>
      </div>
      {dropdown && (
        <nav className="text-lg cursor-pointer, font-semibold shadow-xl rounded-b-lg transition-transform transform scale-100 duration-400 ease-in-out">
          <ul>
            <Link to="/">
              <li onClick={onClick} className="block py-4 px-4 hover:bg-gray-100 ">
                <img src={mountain} alt="mountain icon" className="h-8 inline-block mr-2"></img>Home
              </li>
            </Link>
            <li onClick={onClick} className="block py-4 px-4 hover:bg-gray-100 ">
              <img src={iceaxe} alt="ice axe icon" className="h-8 inline-block mr-2"></img>
              Mountaineering & Climbing
            </li>
            <hr />
            <li onClick={onClick} className="block py-4 px-4 hover:bg-gray-100 ">
              <img src={ski} alt="skiing icon" className="h-8 inline-block mr-2" />
              Ski Touring
            </li>
            <hr />
            <li onClick={onClick} className="block py-4 px-4 hover:bg-gray-100">
              <GiWorld className="text-3xl inline-block mr-2" />
              Overseas & Expeditions
            </li>
            <hr />
            <li onClick={onClick} className="block py-4 px-4 hover:bg-gray-100 ">
              <img src={question} alt="question icon" className="h-8 inline-block mr-2"></img>
              FAQ
            </li>
            <hr />
            <Link to="/contact">
              <li onClick={onClick} className="block py-4 px-4 hover:bg-gray-100 text-center">
                <button className=" bg-green-300 pr-4 pl-4 pt-1 pb-1 rounded-md">
                  <img src={email} alt="email icon" className="h-8 inline-block mr-2"></img>
                  Contact
                  <img src={whatsapp} alt="whatsapp icon" className="h-8 inline ml-2"></img>
                </button>
              </li>
            </Link>
            <hr />
          </ul>
        </nav>
      )}
    </header>
  );
}
