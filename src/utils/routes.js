import Home from '../pages/Home';
import News from '../pages/News';
import NewsDetail from '../components/News/NewDetail';
import BusSearch from '../pages/BusSearch';
import RouteSearch from '../pages/RouteSearch';
import { renderRoutes } from "react-router-config";
import { Redirect } from 'react-router';
const num = 1;

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    breadcrumb: 'Home'
  },
  {
    path: '/news/:page',
    component: News,
    exact: true,
    breadcrumb: 'News',
    routes: [
      {
        path: '/news/detail/:newsid',
        component: NewsDetail,
        exact: true,
        breadcrumb: 'Newsid'
      },
    ]
  },
  {
    path: '/bussearch',
    component: BusSearch,
    exact: true,
    breadcrumb: 'BusSearch',
  },
  {
    path: '/bussearch/route/:routename',
    component: RouteSearch,
    exact: true,
    breadcrumb: 'RouteSearch'
  },




];

export default (
  <div>
    {renderRoutes(routes)}
  </div>
)