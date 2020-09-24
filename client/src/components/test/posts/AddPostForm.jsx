import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import styles from './AddPostForm.module.css'
import { addNewPost } from './postsSlice'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const canSave =
        [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                const resultAction = await dispatch(
                    addNewPost({ title, content, user: userId })
                )
                unwrapResult(resultAction)
                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post: ', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section className={styles.sectionForm}>
            <form className={styles.form}>
                <h2>Add a New Post</h2>
                {addRequestStatus === 'pending' ?
                    <div>Creating...</div> :
                    <div>
                        <div>
                            <label htmlFor="postTitle">Post Title:</label>
                            <input
                                type="text"
                                id="postTitle"
                                name="postTitle"
                                value={title}
                                onChange={onTitleChanged}
                            />
                        </div>
                        <div>
                            <label htmlFor="postAuthor">Author:</label>
                            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                                <option value="" />
                                {usersOptions}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="postContent">Content:</label>
                            <textarea
                                id="postContent"
                                name="postContent"
                                value={content}
                                onChange={onContentChanged}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={onSavePostClicked}
                            disabled={!canSave}
                        >
                            Save Post
                        </button>
                    </div>
                }
            </form>
        </section>
    )
}
