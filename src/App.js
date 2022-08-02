import {Routes,Route} from 'react-router-dom'
import { data_Product } from './data/Home';

import Home from "./pages/home";
import Product from "./pages/product";
import Lam_dep from './pages/lam_dep';
import Gioi_thieu from './pages/gioi_thieu';
import Lien_he from './pages/lien_he';
import Login from './pages/login';
import Register from './pages/resgister';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="main">
      <Routes>
          <Route path="/" element={<Home/>}/>
          {data_Product.map((item, index)=>(
            <Route 
              key={index}
              path={item.path}
              element={<Product path={item.path} listproduct={item.product} brumb={item.title}/>} />
          ))}
          <Route path="/lam_dep" element={<Lam_dep/>}/>
          <Route path="/gioi_thieu" element={<Gioi_thieu/>}/>
          <Route path="/lien_he" element={<Lien_he/>}/>
          <Route path="user">
            <Route index={true} element={<NotFound/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </Route>
        </Routes> 
    </div>
  );
}

export default App;
