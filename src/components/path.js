import { Link } from "react-router-dom"



export default function Breadcrumb ({crumbs}){
  return(
    <div className="container">
      <div className="breadcrumb">
        <ul className="breadcrumb__menu">
          <li className="breadcrumb__item">
            <Link to="/">
              Trang Chủ
            </Link>
          </li>
          {crumbs.map((item, index) =>{
            if(index < crumbs.length - 1){
              return (
                <li className="breadcrumb__item" key={index}>
                  <Link to={item.href}>
                    {item.title}
                  </Link>
                </li>
              )
            }
            else{
              return(
                <li className="breadcrumb__item active" key={index}>
                  <span>{item.title}</span>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}