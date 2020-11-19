import React from 'react'
import { useTranslation } from 'react-i18next'

function Dashboard() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <h1>{t('titles.dashboard')}</h1>
        </div>
    )
}

export default Dashboard
