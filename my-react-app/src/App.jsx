import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'

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
   
    <button onClick={() => {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    }}>Logout</button>

    <div className="container">
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> | 
        <Link to="/about"> About</Link> | 
        <Link to="/contact"> Contact</Link>
      </nav>
      <Routes>
        <Route path="/home"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, amet nobis. Voluptate dolor, placeat blanditiis repudiandae sint omnis deserunt eius reprehenderit aperiam repellat perferendis distinctio voluptatum fugit, eveniet totam sapiente?
    </p>
    </>
  )
}

export default App