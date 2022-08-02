import {Link} from 'react-router-dom';

import {BsPencilSquare} from "react-icons/bs"

import {FaLock} from "react-icons/fa"

export default function header(){
  return(
      <div className="header">
        <div className="header__top">
          <div className="container">
            <div className="header__info">
              <ul>
                <li>
                  <a href="#" title={"Hệ thống cửa hàng"}>Hệ thống cửa hàng</a>
                </li>
                <li>
                  <a href="#">0869394765</a>
                </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="header__sub">
          <div className="container">
            <div className="header__content">
              <div className="header__hotline col-lg-3">
                <a href="#"><img src="../assets/images/header/mobile-phone.svg"/> 0869394765</a>
              </div>
              <div className="header__logo col-lg-3">
                <Link to="/"><img src="../assets/images/header/store_1554367871_28.jpg"/></Link>
              </div>
              <div className="header__help col-lg-3">
                <ul>
                  <li className="header__cart">
                    <a><img src="../assets/images/header/shopping-cart.svg"/></a>
                    <span className="header__quantity">0</span>
                  </li>
                  <li className="header__search"><a><img src="../assets/images/header/search.svg"/></a></li>
                  <li className="header__account">
                    <a><img src="../assets/images/header/user.svg"/></a>
                    <ul>
                      <li>
                        <Link to="user/register">
                          <BsPencilSquare/>
                          Đăng ký
                        </Link>
                      </li>
                      <li>
                        <Link to="user/login">
                          <FaLock/>
                          Đăng nhập
                          </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="header__menu">
          <div className="container">
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/my_pham">Dược Mỹ Phẩm</Link></li>
              <li><Link to="/trang_diem">Trang điểm</Link></li>
              <li><Link to="/cham_soc">Chăm sóc</Link></li>
              <li><Link to="/lam_dep">Làm đẹp</Link></li>
              <li><Link to="/gioi_thieu">Giới thiệu</Link></li>
              <li><Link to="/lien_he">Liên hệ</Link></li>
            </ul>
          </div>
        </nav>
        
        
      </div>
  )
}