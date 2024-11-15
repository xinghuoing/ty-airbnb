import React, { memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './components/app-header/App-header'
import Footer from './components/app-footer/AppFooter'

const App = memo(() => {

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname]);

  return (
    <div className="app">
      <Header/>
      <div className="pages">{useRoutes(routes)}</div>
      <Footer/>
    </div>
  );
})

export default App