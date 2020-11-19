import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { fetchPosts, selectPostIds, selectPostById } from './postsSlice'
import styles from './PostsList.module.css'

let PostExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))
    return (
        <article className={styles.post} key={post.id}>
            <h3 className={styles.post__title}>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <div className={styles.post__info}>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
            </div>
            <ReactionButtons post={post} />
            <div className={styles.post__footer}>
                <Link to={`/posts/${post.id}`} className={styles.post__link}>
                    View Post
                </Link>
            </div>
        </article>
    )
}
// TODO remember
// PostExcerpt = React.memo(PostExcerpt)

export const PostsList = () => {
    const dispatch = useDispatch()
    const orderedPostIds = useSelector(selectPostIds)

    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content

    if (postStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (postStatus === 'succeeded') {
        content = orderedPostIds.map(postId => (
            <PostExcerpt key={postId} postId={postId} />
        ))
    } else if (postStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <section className={styles.postList}>
            <h2>Posts</h2>
            {content}
        </section>
    )
}
