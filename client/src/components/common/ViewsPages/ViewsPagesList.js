import AppLayout from '../../layouts/AppLayout/AppLayout'
import SiteLayout from '../../layouts/SiteLayout/SiteLayout'

import Dashboard from '../../../views/app/Dashboard'

import Login from '../../../views/site/Login'
import Signup from '../../../views/site/Signup'
import Main from '../../../views/site/Main'

export default [
    {
        layout: AppLayout,
        subRoutes:[
            {
                path: '/dashboard',
                component: Dashboard,
            },
        ]
    },
    {
        layout: SiteLayout,
        subRoutes:[
            {
                path: '/login',
                component: Login
            },
            {
                path: '/signup',
                component: Signup
            },
            {
                exact: true,
                path: '/',
                component: Main,
            },
        ]
    }
]
