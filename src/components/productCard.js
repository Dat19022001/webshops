import {RiShoppingBasketLine} from"react-icons/ri";
import {FaExpandAlt} from"react-icons/fa";
export default function ProductCard({data}){
  let {img,title,price} = data;
  return(
    <div className="card">
      <div className="card__body">
        <div className="card__img">
          <a href="#"><img src={img}/></a>
        </div>
        <div className="card__text">
          <h3 className="card__title">
            <a href="#"><span>{title}</span></a>
          </h3>
          <div className="card__price"><span>{price} ₫</span></div>
          <div className="card__icon">
            <a className="card__cart"><RiShoppingBasketLine/></a>
            <a className="card__expand"><FaExpandAlt/></a>
          </div>
        </div>
      </div>
    </div>
  )
}