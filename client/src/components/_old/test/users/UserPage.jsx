import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { selectUserById } from './usersSlice'
import { selectPostsByUser } from '../posts/postsSlice'

export const UserPage = ({ match }) => {
    const { userId } = match.params
    const history = useHistory()

    const user = useSelector(state => selectUserById(state, userId))

    const postsForUser = useSelector(state => selectPostsByUser(state, userId))

    const postTitles = postsForUser.map(post => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    ))

    useEffect(() => {
        if (!user) {
            history.push('/users')
        }
    })

    return (
        <section>
            {user && <h2>{user.name}</h2>}
            <ul>{postTitles}</ul>
        </section>
    )
}
