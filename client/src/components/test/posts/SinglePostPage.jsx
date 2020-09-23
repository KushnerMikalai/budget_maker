import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'

export const SinglePostPage = ({ match }) => {
    const { postId } = match.params

    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )

    if (!post) {
        return (
            <section className="container">
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section className="container">
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post__content">{post.content}</p>
                <PostAuthor userId={post.user} />
                <Link to={`/posts/edit_post/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
}
