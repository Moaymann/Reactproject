import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Singlep } from './pages/Singlep';
import { Login } from './pages/Login';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
     <Route path='/' element={<Login/>}/>
    <Route path='products' element={<Products/>}/>
    <Route path='products/:id' element={<Singlep/>}/>
    <Route path='cart' element={<Cart/>}/>
     </Routes>
    
     
     
    </div>
  );
}

export default App;
