import {MdClose} from "react-icons/md"

import { useState,useContext,useEffect} from "react"

import {modal} from '../constant/context'

import {chuyenVND} from '../constant/validate'

export default function Modal(){
  const [number,setNumber] = useState(1);

  const plus = () =>{
    setNumber(number + 1);
  }

  const minus = () =>{
    setNumber(number -1 )
  }
 

  var {products,handleRemoveProduct,addtoCart} = useContext(modal)

  useEffect(() =>{
    setNumber(1)
  },[products])

  const closeModal = () =>{
    handleRemoveProduct()
  }
  return(
    <div className={`modal ${products === ' ' ? ' ' : 'active'}`}>
      <div className="modal__bg">
        <div className="modal__cart">
          <div className="modal__exit" onClick={() =>closeModal()}>
            <MdClose/>
          </div>
          <div className="modal__img">
            <img src={products.imgs} alt="nước hoa"/>
          </div>
          <div className="modal__text">
            <div className="modal__title">
              <h1>{products.title}</h1>
              <span>Tình trạng:
                <strong>Còn hàng</strong>
              </span>
            </div>
            <div className="modal__des">
              <span>Đánh giá sản phẩm:</span>
              <p>- Hàng hoá chất lượng cao.</p>
              <p>- Chiết khấu 100% từ các sản phẩm tự nhiên</p>
            </div>
            <div className="modal__price">{chuyenVND(products.price)}</div>
            <form className="modal__form">
              <div className="modal__quantity">
                <input type="button" value="-" className="modal__btn" onClick={()=>minus()}/>
                <input type="text" name="quantity" value={`${number}`} min="1" max="100" className="modal__sl"/>
                <input type="button" value="+" className="modal__btn" onClick={()=>plus()}/>
              </div>
              <div className="modal__button">
                <div className="modal__button1" 
                onClick={() => {
                  addtoCart(products.id,products.title,number,products.imgs,products.price)
                  closeModal()
                  }} >
                  Thêm vào giỏ hàng</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}