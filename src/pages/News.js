import BreadCrumb from '../components/BreadCrumb';
import { flattenRoutes, getBreadcrumbs} from '../utils/Handleroute'
import { routes } from '../utils/routes';
export default function News({ route, ...rest }) {
    const { location } = rest
    let breadcrumbs = getBreadcrumbs({flattenRoutes: flattenRoutes(routes), location})
    return (
        <>
            <BreadCrumb breadcrumbs={breadcrumbs} location={location} />
            <div>最新消息</div>
        </>
    )
}