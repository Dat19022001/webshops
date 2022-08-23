import { useState,useEffect} from "react";
import ReactPaginate from "react-paginate";

import {filterProduct} from '../../src/constant/context'


import Helmet from "../components/helmet";
import Paths from "../components/path";
import ProductCard from "../components/productCard";
import Siderbar from "../components/siderbar";


export default function Product({path,listproduct,brumb}){

  useEffect(()=>{
    setProduct(listproduct);
    setPageNumber(0)
  },[listproduct]);

  const [valuePrice,setValuePrice] = useState(0);

  const changPrice = (seclected)=>{
    setValuePrice(seclected)
  }

 
  
  const [products, setProduct] = useState(listproduct)
  const [pageNumber,setPageNumber] = useState(0);
  const productPage = 6
  const pageVisit = pageNumber * productPage

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


  const displayProduct = productss.slice(pageVisit,pageVisit+productPage).map((product,index)=>{

    return<ProductCard key={index} data={product}/>
  })

  const pageCount = Math.ceil(productss.length/productPage)

  const changePage = ({selected}) =>{
    setPageNumber(selected)
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
            <ReactPaginate
                previousLabel = {"PREVIOUS"}
                nextLabel = {"NEXT"}
                pageCount = {pageCount}
                onPageChange={changePage}
                containerClassName = {"content__btn"}
                previousClassName = {"content__pre"}
                nextClassName = {"content__next"}
                disabledClassName = {"content__disabled"}
                activeClassName ={"content__active"}
              /> 
              :<span className="content__error"> KHÔNG CÓ SẢN PHẨM </span>
            }
          </div>
        </div>
      </filterProduct.Provider>
    </Helmet>
  )
}