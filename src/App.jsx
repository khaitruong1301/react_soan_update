import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Header from './pages/Header'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Search from './pages/Search'
import HomeLayout from './Layout/HomeLayout'
import ProductLayout from './Layout/ProductLayout'
import ProductList from './pages/Products/ProductList'

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path='' element={<HomeLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="detail" >
            <Route path=':id' element={<ProductDetail />}></Route>
          </Route>
          {/* <Route path='*' element={<Navigate to={'/'} />}></Route> */}
        </Route>
      </Routes>
      <Routes>
          <Route path='product-management' element={<ProductLayout />}>
            <Route index element={<ProductList />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App


