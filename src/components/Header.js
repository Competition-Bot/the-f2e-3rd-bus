import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="" alt="logo" />
        <h1>Take a bus! 全台等公車</h1>
      </Link>
      <div className="flex">
        <Link to="/news">最新消息</Link>
        <Link to="/bussearch">公車動態</Link>
        <Link to="/plansearch">乘車規劃</Link>
      </div>
    </header>
  );
}

export default Header;
