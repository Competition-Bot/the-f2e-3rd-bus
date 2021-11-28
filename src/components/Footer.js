import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative flex md:items-center items-start justify-between md:flex-row flex-col md:px-10 px-8 py-6 bg-blue-400">
      <div className="grid gap-4">
        <h1 className="text-white font-medium">Take a bus! 全台等公車</h1>
        <div className="text-sm text-white">© 2021 Take a bus.</div>
      </div>
      <div className="grid gap-4 grid-flow-col auto-cols-max md:mt-0 mt-10">
        <Link className="font-medium text-white" to="/news">
          最新消息
        </Link>
        <Link className="font-medium text-white" to="/bussearch">
          公車動態
        </Link>
        <Link className="font-medium text-white" to="/plansearch">
          乘車規劃
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
