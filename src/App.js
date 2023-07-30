import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Auction'
import Reports from './Pages/Reports'
import Navigation from './Components/Navigation'

const App = () => {
  useEffect(() => {
    document.body.classList.add(
      'hold-transition',
      'sidebar-collapse',
      'sidebar-mini'
    );
  }, []);
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/reports" exact element={<Reports />} />
        </Routes>
      </Navigation>
    </BrowserRouter>

  )
}

export default App