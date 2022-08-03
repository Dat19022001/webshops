import React from "react"

export default function Siderbar({data}){
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
                  <input type="checkbox"/>
                  Dưới 100,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="checkbox"/>
                  Từ 100,000₫ - 200,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="checkbox"/>
                  Từ 200,000₫ - 300,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="checkbox"/>
                  Từ 300,000₫ - 500,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="checkbox"/>
                  Từ 500,000₫ - 1,000,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input type="checkbox"/>
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