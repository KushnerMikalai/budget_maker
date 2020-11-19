import React from 'react'
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'
import Header from './components/common/Header/Header'
import ViewsPages from './components/common/ViewsPages/ViewsPages'

function App() {
  return (
    <div className="App _dark">
      <Header/>
      <ViewsPages/>
      <ScrollToTop/>
    </div>
  )
}

export default App
