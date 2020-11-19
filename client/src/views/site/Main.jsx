import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {selectUser, selectLoadingProfile} from '../../store/slices/userSlice'

function Main() {
    const { t } = useTranslation()
    const history = useHistory();
    const user = useSelector(selectUser)
    const loadingProfile = useSelector(selectLoadingProfile)

    useEffect(() => {
        if (user.profile) {
            history.push('/dashboard');
        }
    }, [user, history])

    return (
        <div className="container">
            {/* TODO convert to component loading-page */}
            {loadingProfile && <div className="loading-page">Loading...</div>}

            <h1>{t('welcome')}</h1>
        </div>
    )
}

export default Main
