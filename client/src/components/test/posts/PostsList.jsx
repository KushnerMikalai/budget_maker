import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import styles from './PostsList.module.css'

export const PostsList = () => {
    const posts = useSelector(state => state.posts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article className={styles.post} key={post.id}>
            <h3 className={styles.post__title}>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <div className={styles.post__info}>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
            </div>
            <ReactionButtons post={post}/>
            <div className={styles.post__footer}>
                <Link to={`/posts/${post.id}`} className={styles.post__link}>
                    View Post
                </Link>
            </div>
        </article>
    ))

    return (
        <section className={styles.postList}>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
