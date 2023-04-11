import { RiShoppingBasketLine } from "react-icons/ri";
import { FaExpandAlt } from "react-icons/fa";
import { useContext } from "react";
import { chuyenVND } from "../constant/validate";
import { modal } from "../constant/context";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setProductId, setCheck } from "../product/productDetail";
export default function ProductCard({ data }) {
  let { img, title, price } = data;
  const dispatch = useDispatch();
  const { addtoCart } = useContext(modal);
  const openModal = () => {
    dispatch(setProductId(data.id));
    dispatch(setCheck(true));
  };

  return (
    <div className="card">
      <div className="card__body">
        <div className="card__img">
          <div onClick={() => openModal()}>
            <img src={img} alt="" />
          </div>
        </div>
        <div className="card__text">
          <h3 className="card__title">
            <Link to="">
              <span>{title}</span>
            </Link>
          </h3>
          <div className="card__price">
            <span>{chuyenVND(price)} </span>
          </div>
          <div className="card__icon">
            <div 
              className="card__cart card__a"
              onClick={() => addtoCart(data.id, title, 1, img, price)}
            >
              <RiShoppingBasketLine />
            </div>
            <div className="card__expand card__a">
              <FaExpandAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
