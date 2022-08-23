import React from "react"
import {useContext} from "react"

import {filterProduct} from"../../src/constant/context"

export default function Siderbar({data}){
  const {changPrice} = useContext(filterProduct)

  return(
    <div className="siderbar">
      <div className="siderbar__menu">
        <h2 className="siderbar__title">
          Lọc sản phẩm
        </h2>
        <div className="siderbar__filter">
          <div className="siderbar__name">
            <span>Giá Sản phẩm</span>
          </div>
          <ul className="siderbar__list">
            <li>
              <span>
                <label>
                  <input type="radio" name="price" onChange={()=> changPrice(0)}/>
                  Tất cả
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="radio" name="price" onChange={()=> changPrice(100000)}/>
                  Dưới 100,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="radio" name="price" onChange={()=> changPrice(200000)}/>
                  Dưới 200,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="radio" name="price"onChange={()=> changPrice(300000)}/>
                  Dưới 300,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="radio" name="price" onChange={()=> changPrice(500000)}/>
                  Dưới 500,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="radio" name="price"onChange={()=> changPrice(1000000)}/>
                  Dưới 1000,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="radio" name="price" onChange={()=> changPrice(2000000)}/>
                  Trên 1,000,000₫
                </label>
              </span>
            </li>
            
          </ul>
        </div>

        <div className="siderbar__hot">
          <div className="siderbar__name1">
            <span>Sản phẩm  bán chạy</span>
          </div>
          <div className="siderbar__body">
            {data.map((item, index)=>(
              <React.Fragment key={index}>
            { item.hot &&
            <div className="siderbar__item" >
                <div className="siderbar__img">
                  <img src={item.img}/>
                </div>
                <div className="siderbar__text">
                  <h3>{item.title}</h3>
                  <div className="siderbar__price">{item.price}₫</div>
                </div>
              </div>
            }
            </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}