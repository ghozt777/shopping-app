import '../styles/App.css';
import {Home} from '../pages/Home'
import {Address} from '../pages/Address'
import {Routes,Route} from 'react-router-dom'
import {NavBar} from './NavBar'
import {Credentials} from '../pages/Credentials'
import {CreateAccount} from '../pages/CreateAccount'
import {Login} from '../pages/Login'
import {PrivateRoute} from './PrivateRoute'
import {Cart} from '../pages/Cart'
import {Products} from '../pages/Products'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='address' element={<Address />} />
        <Route path='/credentials' element={<Credentials />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Products />} />
        <PrivateRoute path='/Cart' element={<Cart /> } />
      </Routes>
    </div>
  );
}

export default App;
