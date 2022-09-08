import {Routes,Route} from 'react-router-dom'

import { data_Product } from '../data/Home';

import Home from "./home";
import Product from "./product";
import LamDep from './lam_dep';
import GioiThieu from './gioi_thieu';
import LienHe from './lien_he';
import Login from './login';
import Register from './resgister';
import NotFound from '../components/NotFound';
import Cart from '../components/cart';

export default function IndexPage(){

  

  return (
    <Routes>
          <Route path="/" element={<Home/>}/>
          {data_Product.map((item, index)=>(
            <Route 
              key={index}
              path={item.path}
              element={<Product path={item.path} listproduct={item.product} brumb={item.title}/>} />
          ))}
          <Route path="/lam_dep" element={<LamDep/>}/>
          <Route path="/gioi_thieu" element={<GioiThieu/>}/>
          <Route path="/lien_he" element={<LienHe/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="user">
            <Route index={true} element={<NotFound/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </Route>
        </Routes> 
  )
}