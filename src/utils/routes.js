export const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    breadcrumb: "Home",
  },
  {
    name: "News",
    path: "/news/:page",
    exact: true,
    breadcrumb: "News",
  },
  {
    name: "NewsDetail",
    path: "/news/detail/:newsid",
    exact: true,
    breadcrumb: "NewsDetail",
  },
  {
    path: "/bussearch",
    breadcrumb: "BusSearch",
    sidebarRoutes: [
      {
        name:"BusSearchBar",
        path: "/bussearch",
        exact: true,
        routes:[
          {
            name:"RouteSearch",
            path: "/bussearch/route",
            exact: true,
          },
          {
            name:"StopSearch",
            path: "/bussearch/stop",
            exact: true,
          },
        ]
      },
      {
        name:"RouteResultInfo",
        path: "/bussearch/route/:city/:routename",
        exact: true,
      },
      {
        name:"RouteResultFare",
        path: "/bussearch/route/:routeuid/detail",
        exact: true,
      },
    ],
    mapRoutes: [
      {
        name:"RouteMap",
        path: "/bussearch/route",
        exact: false,
      },
      {
        name:"StopMap",
        path: "/bussearch/stop",
        exact: false,
      },
    ],
  },
  {
    name: "PlanSearch",
    path: "/plansearch",
    exact: true,
    routes: [
      {
        name:"PlanResult",
        path: "/plansearch/result",
        exact: true,
      },
      {
        name:"PlanDetail",
        path: "/plansearch/detail",
        exact: true,
      },
    ],
  },
];
