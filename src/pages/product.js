import { useState,useEffect} from "react";

import { useSelector,useDispatch } from "react-redux";

import {Pagination} from 'antd'

import {filterProduct} from '../../src/constant/context'
import { resetState } from "../product/productSlide";

import 'antd/dist/antd.css';


import Helmet from "../components/helmet";
import Paths from "../components/path";
import ProductCard from "../components/productCard";
import Siderbar from "../components/siderbar";


export default function Product({path,listproduct,brumb}){
  const dispatch = useDispatch();
  useEffect(()=>{
    setProduct(listproduct);
    setPageNumber(1)
    dispatch(resetState())
    // eslint-disable-next-line
  },[listproduct]);
  const keyProduct= useSelector(state => state.product.payload)
  
 
  console.log(keyProduct);
  const isKeyProduct = !!keyProduct;
  

  const [valuePrice,setValuePrice] = useState(0);

  const changPrice = (seclected)=>{
    setValuePrice(seclected)
  }

 
  
  const [products, setProduct] = useState(listproduct)
  const [pageNumber,setPageNumber] = useState(1);
  const productPage = 6
  const pageVisit = (pageNumber-1) * productPage

  var productss=[];
  if(valuePrice === 2000000){
    productss = products.filter(product => product.price > 1000000)
  }
  else if(valuePrice === 0){
    productss = products
  }
  else{
    productss = products.filter(product => product.price < valuePrice)
  }
  

  if(isKeyProduct){
    productss = products.filter(product => product.title.toLowerCase().includes(keyProduct.trim().toLowerCase()));
  }

  const displayProduct = productss.slice(pageVisit,pageVisit+productPage).map((product,index)=>{

    return<ProductCard key={index} data={product}/>
  })


  const changePage = (title) =>{
    setPageNumber(title)
    
  }

  const crumbs = [
    {
      title: brumb,
      href: path,
    }
  ]
  return(
    <Helmet title={brumb}>
      <filterProduct.Provider value={{changPrice}}>
        <Paths crumbs ={crumbs} />
        
        <div className="container content">
          <Siderbar data={listproduct}/>
          <div className="content__list">
            <div className="content__title">
              <h1>{brumb}</h1>
            </div>
            <div className="content__product">
              {displayProduct}
            </div>
            {productss.length !==0 
              ?
              <div className="content__pagination">
                <Pagination
                current={pageNumber}
                defaultCurrent={1}
                pageSize={productPage}
                total={productss.length}
                onChange={(title) => changePage(title)}
                /> 
              </div>
              :<span className="content__error"> KHÔNG CÓ SẢN PHẨM </span>
            }
          </div>
        </div>
      </filterProduct.Provider>
    </Helmet>
  )
}