import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/icon/menu.svg";
import { ReactComponent as CloseIcon } from "../assets/icon/close.svg";

function Header() {
  const [show, setshow] = useState(false);

  const _HndleClickBtn = (type = "toggle") => {
    if (type === "hide") setshow(false);
    else setshow(!show);
  };

  return (
    <header className="relative flex items-center justify-between md:px-10 px-8 h-header shadow-header z-50">
      <Link
        to="/"
        className="grid grid-flow-col auto-cols-max gap-3 items-center"
        onClick={() => _HndleClickBtn("hide")}
      >
        <img src={logo} alt="logo" />
        <h1>Take a bus! 全台等公車</h1>
      </Link>
      <div
        className="md:hidden relative flex justify-center w-6"
        onClick={_HndleClickBtn}
      >
        <div className={!show ? "block" : "hidden"}>
          <MenuIcon />
        </div>
        <div className={show ? "block" : "hidden"}>
          <CloseIcon />
        </div>
      </div>
      <div
        className={`md:grid grid-flow-col auto-cols-max gap-x-10 md:static absolute bg-white bottom-0 left-0 md:justify-end justify-center md:transform-none transform translate-y-full md:pt-0 md:pb-0 pt-2 pb-4 w-full md:shadow-none shadow-header ${
          show ? "grid" : "hidden"
        }`}
      >
        <Link
          className="font-medium hover:text-blue-400"
          to="/news"
          onClick={() => _HndleClickBtn("hide")}
        >
          最新消息
        </Link>
        <Link
          className="font-medium hover:text-blue-400"
          to="/bussearch"
          onClick={() => _HndleClickBtn("hide")}
        >
          公車動態
        </Link>
        <Link
          className="font-medium hover:text-blue-400"
          to="/plansearch"
          onClick={() => _HndleClickBtn("hide")}
        >
          乘車規劃
        </Link>
      </div>
    </header>
  );
}

export default Header;
