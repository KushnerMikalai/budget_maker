import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// REDUX
import { useSelector } from 'react-redux'
import { selectUser } from './components/test/users/userSlice'

// API
// import api from './utils/api/api'

// PAGES
import Main from './views/landing/main'
import { Posts } from './views/landing/Posts'
import { UsersList } from './components/test/users/UsersList'
import { UserPage } from './components/test/users/UserPage'
import { NotificationsList } from './components/test/notifications/NotificationsList'

import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'
import Header from './components/common/Header/Header'
import FilterableProductTable from './components/test/ThinkingInReact/FilterableProductTable'

import { SinglePostPage } from './components/test/posts/SinglePostPage'
import { EditPostForm } from './components/test/posts/EditPostForm'

const menu = [
    { href: '/', name: 'home', target: null, route: true },
    { href: '/posts', name: 'posts', target: null, route: true },
    { href: '/users', name: 'users', target: null, route: true },
    { href: '/table', name: 'table', target: null, route: true },
    { href: 'google.com', name: 'google', target: '_blunk' },
    { href: 'https://github.com/KushnerMikalai', name: 'github', target: '_blunk' },
]

function App() {
    const user = useSelector(selectUser)

    useEffect(() => {
        async function fetchTodos() {
            // TODO get info app
            // const res = await api.get({
            //     url: 'https://jsonplaceholder.typicode.com/todos/1'
            // })
            // console.log(res, 'res');
        }
        if (user.token) {
            fetchTodos()
        }
    });

    return (
        <div className="App">
            <Header items={menu} />
            {/* <Calculator /> */}
            {/* <TestForm /> */}
            {/* <Clock /> */}
            {user.name}
            {user.token}
            <Switch>
                <Route path="/table">
                    <FilterableProductTable />
                </Route>
                <Route exact path="/notifications" component={NotificationsList} />
                <Route exact path="/users" component={UsersList} />
                <Route exact path="/users/:userId" component={UserPage} />
                <Route exact path="/posts/:postId" component={SinglePostPage} />
                <Route exact path="/posts/edit_post/:postId" component={EditPostForm} />
                <Route path="/posts">
                    <Posts />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
                <Redirect to="/" />
            </Switch>
            <ScrollToTop />
        </div>
    )
}

export default App
