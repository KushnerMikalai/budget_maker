import React, { useEffect } from 'react'
import { selectLogin } from '../../../store/slices/userSlice'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function AppLayout(props) {
    const history = useHistory();
    const isLogin = useSelector(selectLogin)

    useEffect(() => {
        if (!isLogin) {
            history.push('/');
        }
    }, [isLogin, history])

    return (
        <div className={'app'}>
            {props.children}
        </div>
    )
}
