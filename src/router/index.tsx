import Loadable from 'react-loadable';
import createBrowserHistory from 'history/createBrowserHistory';
import Loading from '../components/Loading';

const BasicLayout = Loadable({loader: () => import('../layouts/BasicLayout'),loading: Loading});
const Error404 = Loadable({loader: () => import('../pages/errorPage/Error404'),loading: Loading});

export const history = createBrowserHistory();

export const routes = [
    {
        path:'/',
        redirect:'/basicLayout'
    },
    {
        path:'/basicLayout',
        component: BasicLayout
    },
    {
        path:'/error404',
        component: Error404
    },
]
