import React from 'react'
import Header from './components/common/Header/Header'
import ViewsPages from './components/common/ViewsPages/ViewsPages'
import styles from './App.module.css'

function App() {
    return (
        <div className={`${styles.app} _dark`}>
            <Header/>
            <ViewsPages/>
        </div>
    )
}

export default App
