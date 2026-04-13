import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import List from './Pages/List'
import ApplyForm from './Pages/ApplyForm'
import Layout from './Components/Layout'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsAuthenticated(true);
  }, [])

  if (!isAuthenticated) {
    // Only show login page until authenticated
    return <Login setIsAuthenticated={setIsAuthenticated} />
  }

  return (
    <>
    {/* <button style={{ width:"100px" }} onClick={() => {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    }}>Logout</button> */}

    <div className="container">
    
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/home"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/applyNow" element={<ApplyForm />} />
        <Route path="/list" element={<List />} />
      </Routes>
      </Layout>
    </BrowserRouter>
    
    </div>
    </>
  )
}

export default App