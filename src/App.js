
import { useState} from 'react';


import {modal} from './constant/context'

import Modal from './components/modal';
import Header from "./components/header";

import Page  from './pages/index'



function App() {
  
  const [cart,setCart] = useState([])
  const [products,setProduct] = useState(' ')

  const handleSetProduct = (product) =>{
    setProduct(product)
  }

  const handleRemoveProduct = () =>{
    setProduct(' ')
  }

  const addtoCart = (id,title,quantity,img,price)=>{
    const sp = {
      id:id,
      title:title,
      quantity:quantity,
      img:img,
      price:price,
    }
    const sp1= cart.filter(item=>item.id===id)
    if(sp1.length===0){
      setCart(prev=>{
        const newCart=[...prev,sp]
        return newCart;
      })
    }else{
      cart.forEach((item)=>{
        if(item.id === id){
          item.quantity +=1;
        }
      })
    }
    alert("Thêm vào giỏ hàng thành công");
  }
  let sl = cart.length;

  const deleteCart = (id) =>{
    const carts = cart.filter((item)=>  item.id !== id)
    setCart(carts)
  }
  
  return (
    <div className="main">
      <modal.Provider value = {{products,handleSetProduct,handleRemoveProduct,cart,addtoCart,sl,deleteCart}}>
        <Header/>
        <Page/>
        <Modal/>
      </modal.Provider>
    </div>
  );
}

export default App;
