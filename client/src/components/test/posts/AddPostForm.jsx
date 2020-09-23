import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {postAdded} from './postsSlice'
import styles from './AddPostForm.module.css'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId))
            setTitle('')
            setContent('')
            setUserId('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section className={styles.sectionForm}>
            <form className={styles.form}>
                <h2>Add a New Post</h2>
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
                        <option value=""/>
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
            </form>
        </section>
    )
}
