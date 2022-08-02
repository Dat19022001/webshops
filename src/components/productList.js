import React, { useState } from 'react'
import {Link} from "react-router-dom"

import ProductCard from "./productCard"

export default function Product_List({data}){
  const [selectOption, setSelectOption] = useState(0);
  const [product,setProduct] = useState(data[0].product);
  const [path,setPath] = useState(data[0].path);

  const handleSelected = (item, index) => {
    setSelectOption(index)
    setProduct(item.product)
    setPath(item.path);
  }
  return(
    <div className="hot">
      <div className="container">
        <h2 className="hot__title">Sản phẩm nổi bật</h2>
      </div>
      <div className="hot__content">
          <ul className="hot__menu">
            {data.map((item,index) =>(
              <li key={index} className={`${index === selectOption ? 'active' : ''}`} onClick={() => handleSelected(item, index)}>
                <div>
                  <span>{item.Name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="hot__body">
            {product.map((item, index) =>(
              <ProductCard key={index} data={item}/>
            ))}
          </div>
          <div className="hot__btn">
            <Link to={`/${path}`}>Xem Thêm</Link>
          </div>
        </div>
    </div>
  )
}