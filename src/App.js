import './App.css';

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"

// Hooks
import { useAuth } from "./hooks/useAuth"

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from "./pages/Home/Home"
import Produtos from './pages/Produtos/Produtos';
import Clients from './pages/Clients/Clients';
import RegisterProduct from './pages/RegisterProduct/RegisterProduct';
import RegisterClient from './pages/RegisterClient/RegisterClient';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ClientDetails from './pages/ClientDetails/ClientDetails';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import SearchClient from './pages/SearchClient/Search';
import EditProduct from './pages/EditProduct/EditProduct';

function App() {
  const { auth, loading } = useAuth()

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      
     <div className="app">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route 
            path='/'
            element={<Home />}  
          />
          <Route 
            path='/loginManager' 
            element={!auth ? <Login /> : <Navigate to="/"/>}/>
          <Route 
            path='/product' 
            element={<Produtos />}/>
          <Route 
            path='/clients' 
            element={auth ? <Clients /> : <Navigate to="/loginManager"/>}/> 
          <Route 
            path='/registerclient' 
            element={auth ? <RegisterClient /> : <Navigate to="/loginManager"/>}/>
          <Route 
            path='/registerproduct' 
            element={auth ? <RegisterProduct /> : <Navigate to="/loginManager"/>}/>
          <Route 
            path='/productdetails/:id' 
            element={<ProductDetails />}/>
          <Route 
            path='/clientdetails/:id' 
            element={auth ? <ClientDetails /> : <Navigate to="/loginManager"/>}/>
            <Route 
            path='/editproduct/:id' 
            element={auth ? <EditProduct /> : <Navigate to="/loginManager"/>}/>
          <Route 
            path='/search'
            element={<Search />}
          />
          <Route 
            path='/searchclient'
            element={<SearchClient />}
          />
        </Routes>
        
      </BrowserRouter>
    </div>   
       <Footer />  
    </div>

  );
}

export default App;
