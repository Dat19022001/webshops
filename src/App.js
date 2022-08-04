
import { useState} from 'react';


import {modal} from './constant/context'

import Modal from './components/modal';

import Page  from './pages/index'



function App() {

  const [products,setProduct] = useState(' ')

  const handleSetProduct = (product) =>{
    setProduct(product)
  }

  const handleRemoveProduct = () =>{
    setProduct(' ')
  }
  
  return (
    <div className="main">
      <modal.Provider value = {{products,handleSetProduct,handleRemoveProduct}}>
        <Page/>
        <Modal/>
      </modal.Provider>
    </div>
  );
}

export default App;
