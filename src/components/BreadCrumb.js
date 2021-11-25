import { Link } from "react-router-dom";

import line_black from "../assets/img/line_black.png";
import Vector_blue_left from "../assets/img/Vector_blue_left.png";

// function Breadcrumb({ breadcrumbs, location: { pathname } }) {
//   console.log(breadcrumbs);
//   return (
//     <div>
//       {breadcrumbs.map((breadcrumb, index) => (
//         <span key={breadcrumb.props.path}>
//           {pathname === breadcrumb.props.path ? (
//             <span>{breadcrumb}</span>
//           ) : (
//             <Link to={breadcrumb.props.path}>{breadcrumb}</Link>
//           )}
//           {index < breadcrumbs.length - 1 && <i> / </i>}
//         </span>
//       ))}
//     </div>
//   );
// }

function Breadcrumb() {
  return <div>
<div className="flex items-center py-4 px-9 lg:px-48">
    <div className="bg-blue-400 w-4 h-4 rounded-full mr-5"></div>
    <Link to="/">
    <div className="text-blue-400 mr-5">首頁</div>
    </Link>
    <img className=" w-8 h-px mr-5" src={line_black}/>
    <div className="bg-blue-400 w-4 h-4 rounded-full mr-5"></div>
    <div className="">最新消息</div>
    </div>
  </div>;
}

export default Breadcrumb;
