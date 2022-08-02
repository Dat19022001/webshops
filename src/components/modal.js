import {MdClose} from "react-icons/md"

import { useState } from "react"

export default function Modal(){
  const [number,setNumber] = useState(1);

  const plus = () =>{
    setNumber(number + 1);
  }

  const minus = () =>{
    setNumber(number -1 )
  }
  return(
    <div className="modal">
      <div className="modal__bg">
        <div className="modal__cart">
          <div className="modal__exit">
            <MdClose/>
          </div>
          <div className="modal__img">
            <img src="https://img.cdn.vncdn.io/nvn/ncdn/store1/45233/ps/20190402/d3_183x274.jpg"/>
          </div>
          <div className="modal__text">
            <div className="modal__title">
              <h1>Serum bảo vệ da, chống tia UV</h1>
              <span>Tình trạng:
                <strong>Còn hàng</strong>
              </span>
            </div>
            <div className="modal__des">
              <span>Đánh giá sản phẩm:</span>
              <p>- Hàng hoá chất lượng cao.</p>
              <p>- Chiết khấu 100% từ các sản phẩm tự nhiên</p>
            </div>
            <div className="modal__price">2,990,000₫</div>
            <form className="modal__form">
              <div className="modal__quantity">
                <input type="button" value="-" className="modal__btn" onClick={minus}/>
                <input type="text" name="quantity" value={`${number}`} min="1" max="100" className="modal__sl"/>
                <input type="button" value="+" className="modal__btn" onClick={plus}/>
              </div>
              <div className="modal__button">
                <button type="submit">Thêm vào giỏ hàng</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}