import { NavLink } from "react-router-dom";

import line_black from "../assets/img/line_black.png";
//import Vector_blue_left from "../assets/img/Vector_blue_left.png";

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

// function Breadcrumb() {
//   return <div>
// <div className="flex items-center py-4 px-9 lg:px-48">
//     <div className="bg-blue-400 w-4 h-4 rounded-full mr-5"></div>
//     <Link to="/">
//     <div className="text-blue-400 mr-5">首頁</div>
//     </Link>
//     <img className=" w-8 h-px mr-5" src={line_black}/>
//     <div className="bg-blue-400 w-4 h-4 rounded-full mr-5"></div>
//     <div className="">最新消息</div>
//     </div>
//   </div>;
// }

// export default Breadcrumb;

import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import React from "react";

const userNamesById = { 1: "John" };

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);

// define custom breadcrumbs for certain routes.
// breadcumbs can be components or strings.
const routes = [
  { path: "/users/:userId", breadcrumb: DynamicUserBreadcrumb },
  { path: "/", breadcrumb: "首頁" },
  { path: "/news", breadcrumb: "最新消息" },
  { path: "/newsdetail/:newsid", breadcrumb: "最新消息內容" },
];

// map, render, and wrap your breadcrumb components however you want.
const Breadcrumbs = ({ breadcrumbs }) => (
  <div className="flex items-center px-12 py-5 lg:px-48">
    {breadcrumbs.map(({ match, breadcrumb }, idx) => (
      <span className="flex items-center group" key={match.url}>
        <div className="bg-blue-400  group-hover:bg-opacity-75 w-3.5 h-3.5 rounded-full mr-2.5"></div>
        <NavLink
          className="text-blue-400 group-hover:text-opacity-75 mr-5"
          to={match.url}
        >
          {breadcrumb}
        </NavLink>
        {idx === 1 ? null : <img className=" w-8 h-px mr-5" src={line_black} alt="-"/>}
      </span>
    ))}
  </div>
);

export default withBreadcrumbs(routes, { disableDefaults: true })(Breadcrumbs);

// const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
//   <div className="bg-red-100 px-12 py-5 lg:px-48">

//     <div className="">
//     <React.Fragment>
//       {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
//     </React.Fragment>

//     </div>

//   </div>
// ));

// export default withBreadcrumbs()(Breadcrumbs);
