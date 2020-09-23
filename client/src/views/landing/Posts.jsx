import React from 'react'
import {AddPostForm} from '../../components/test/posts/AddPostForm';
import {PostsList} from '../../components/test/posts/PostsList';
import styles from './Posts.module.css'

export const Posts = () => {
    return (
        <div className={styles.posts}>
            <PostsList/>
            <AddPostForm/>
        </div>
    )
}
