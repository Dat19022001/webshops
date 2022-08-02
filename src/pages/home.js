import React from 'react';

import Baner from "../components/baner";
import ProductList from "../components/productList";
import ProductHot from "../components/productHot";
import Info from "../components/info";
import Helmet from "../components/helmet";

import { data_Banner,data_Product_list, data_Product_hot } from '../data/Home';

export default function Home(){
  return(
    <Helmet title="Home">
      <Baner data={data_Banner}/>
      <ProductList data={data_Product_list}/>
      <Info/>
      <ProductHot data={data_Product_hot}/>
    </Helmet>  
  )
}