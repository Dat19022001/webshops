import {AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom"
import {chuyenVND} from "../constant/validate"

import Helmet from "./helmet"
import Paths from "./path"

import {useContext} from "react"

import React from "react"

import {modal} from '../constant/context'
export default function Cart(){
  const{cart,deleteCart,plusProduct,minusProduct} = useContext(modal)
  
  let total = 0
  const crumbs = [
    {
      title: "Cart",
      href: "cart",
    }
  ]
  return (
    <Helmet title="Cart">
      <Paths crumbs ={crumbs} />
      <div className="cart container">
        <h1 className="cart__title">Giỏ hàng của bạn </h1>
        <div className="cart__menu">
          <div className="cart__img cart__item">
            <span>Ảnh sản phẩm</span>
          </div> 
          <div className="cart__name cart__item">
            <span>Tên Sản Phẩm</span>
          </div>
          <div className="cart__price cart__item">
            <span>Đơn giá</span>
          </div>
          <div className="cart__quantity cart__item">
            <span>Số lượng</span>
          </div>
          <div className="cart__total cart__item">
            <span>Thành tiền</span>
          </div>
          <div className="cart__delete cart__item">
            <span>Xoá</span>
          </div>
        </div>
        <div className="cart__body">
          {cart.length!==0 ?
            cart.map((item,index) =>{
              total = total + (item.quantity*item.price)
              return(
                <div className="cart__body1" key={index}>
                  <div className="cart__img cart__item2">
                    <a href="#"><img src={item.img} alt=""/></a>
                  </div> 
                  <div className="cart__name cart__item2">
                    <strong>{item.title}</strong>
                  </div>
                  <div className="cart__price cart__item2">
                    <strong>{chuyenVND(item.price)}</strong>
                  </div>
                  <div className="cart__quantity cart__item2">
                    <strong>
                        <input type="button" value="-" className="modal__btn" onClick={() => minusProduct(item.id)} />
                        <input type="text" name="quantity" value={item.quantity} min="1" max="100" className="modal__sl"/>
                        <input type="button" value="+" className="modal__btn"  onClick={()=> plusProduct(item.id)} />
                    </strong>
                  </div>
                  <div className="cart__total cart__item2">
                    <strong>{chuyenVND(item.price*item.quantity)}</strong>
                  </div>
                  <div className="cart__delete cart__item2">
                    <strong onClick={() => deleteCart(item.id)}><AiOutlineClose/></strong>
                  </div>
                </div>
              )})
            :<span className="content__error"> KHÔNG CÓ SẢN PHẨM </span> 
        }
        </div>
        <div className="cart__sum">
          <span>Tổng tiền:</span>
          <strong>{chuyenVND(total)}</strong>
          <div className="cart__btn">
            <div className="modal__button cart__button">
              <button type="text"><Link to="/">Tiếp tục mua hàng</Link></button>
            </div>
            <div className="modal__button">
              <button type="text">Thanh Toán</button>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  )
}