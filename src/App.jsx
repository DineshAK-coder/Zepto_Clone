import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './Login.jsx'

function App() {
  const [isauthenticated, setIsauthenticated] = useState(false);
  const [cart, modifyCart] = useState([]);
  const addToCart = (product) => modifyCart([...cart,product]);

  <Router>
    {isAuthenticated && <Navbar setIsAuthenticated = {setIsAuthenticated}/>}
    <Routes>
      <Route path = "/login" element = {<Login setIsAuthenticated = {setIsauthenticated}/>}/>
      <Route path = "/products"
      element = {isAuthenticated ? <Products/> : <Navigate to = "/login"/>}/>
      <Route path = "/cart"
      element = {isAuthenticated ? <Cart/> : <Navigate to = "/login"/>}/>
    </Routes>
  </Router>
}
export default App
