import {RiShoppingBasketLine} from"react-icons/ri";
import {FaExpandAlt} from"react-icons/fa";

import { useContext} from 'react';

import {modal} from '../constant/context'
export default function ProductCard({data}){
  let {img,title,price} = data;

  const {handleSetProduct,addtoCart} = useContext(modal)

  const product = {
    imgs: img,
    title: title,
    price: price,
  }

  const openModal = (product) =>{
    handleSetProduct(product)
  }


    return(
      <div className="card">
        <div className="card__body">
          <div className="card__img">
            <div onClick={() =>openModal(product)} ><img src={img} alt=""/></div>
          </div>
          <div className="card__text">
            <h3 className="card__title">
              <a href="#"><span>{title}</span></a>
            </h3>
            <div className="card__price"><span>{price} ₫</span></div>
            <div className="card__icon">
              <a className="card__cart" onClick={() => addtoCart(data.id,title,1,img,price)}><RiShoppingBasketLine/></a>
              <a className="card__expand"><FaExpandAlt/></a>
            </div>
          </div>
        </div>
      </div>
    )
}