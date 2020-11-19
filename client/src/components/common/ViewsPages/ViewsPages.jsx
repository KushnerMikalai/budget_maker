import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ViewsPagesList from './ViewsPagesList'

function ViewsPages() {
    return (
        <Switch>
            {ViewsPagesList.map((route,i)=>
                <Route
                    key={i}
                    exact={ route.subRoutes.some(r=>r.exact) }
                    path={ route.subRoutes.map(r=>r.path) }
                >
                    <route.layout>
                        {route.subRoutes.map((subRoute,i)=>
                            <Route
                                key={i}
                                {...subRoute}
                            />
                        )}
                    </route.layout>
                </Route>
            )}
        </Switch>
    )
}

export default ViewsPages
