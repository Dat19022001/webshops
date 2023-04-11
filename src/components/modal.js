import {MdClose} from "react-icons/md"
import { useState,useContext,useEffect} from "react"
import {modal} from '../constant/context'
import {chuyenVND} from '../constant/validate'
import { getProductDetail } from "../services/product";
import { useDispatch, useSelector } from "react-redux";
import { setCheck } from "../product/productDetail";


export default function Modal(){
  const [number,setNumber] = useState(1);
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.detail.productId.payload)
  const check = useSelector((state) => state.detail.check.payload);
  const plus = () =>{
    setNumber(number + 1);
  }
  const minus = () =>{
    setNumber(number -1 )
  }
 
  var {addtoCart} = useContext(modal)

  const [item,setItem] = useState({}) 

  useEffect(() =>{
    setNumber(1)
    const detail = () =>{
      const params = {
        id:productId,
      }
      getProductDetail(
        params,
        (res) =>{
          setItem(res.data.data[0])
        },
        (err)=>{
          console.log(err)
        }
      )
    }
    detail()
  },[productId])
  const closeModal = () =>{
    dispatch(setCheck(false))
  }
  return(
    <div className={`modal ${check === true ? 'active' : ''}`}>
      <div className="modal__bg">
        <div className="modal__cart">
          <div className="modal__exit" onClick={() =>closeModal()}>
            <MdClose/>
          </div>
          <div className="modal__img">
            <img src={item.img} alt="nước hoa"/>
          </div>
          <div className="modal__text">
            <div className="modal__title">
              <h1>{item.title}</h1>
              <span>Category:
                <strong>{item.category}</strong>
              </span>
            </div>
            <div className="modal__des">
              <span>Đánh giá sản phẩm:</span>
              <p>- {item.des}</p>
            </div>
            <div className="modal__price">{chuyenVND(item.price)}</div>
            <form className="modal__form">
              <div className="modal__quantity">
                <input type="button" value="-" className="modal__btn" onClick={()=>minus()}/>
                <input type="text" name="quantity" value={`${number}`} min="1" max="100" className="modal__sl"/>
                <input type="button" value="+" className="modal__btn" onClick={()=>plus()}/>
              </div>
              <div className="modal__button">
                <div className="modal__button1" 
                onClick={() => {
                  addtoCart(item.id,item.title,number,item.img,item.price)
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