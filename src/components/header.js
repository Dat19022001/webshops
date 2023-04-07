import { Link } from "react-router-dom";

import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import { useState, useContext } from "react";

import { modal } from "../constant/context";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../user/userSlide";

export default function Header() {
  const dispatch = useDispatch();

  let checkLogin = useSelector((state) => state.user.current.payload);

  let isCheckLogin = !!checkLogin;

  const handleLogout = () => {
    dispatch(logout());
  };

  const [open, setOpen] = useState(0);
  const { sl } = useContext(modal);

  const openMenu = () => {
    setOpen(1);
  };

  const closeMenu = () => {
    setOpen(0);
  };

  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__info">
            <ul>
              <li>
                <a href="/" title={"Hệ thống cửa hàng"}>
                  Hệ thống cửa hàng
                </a>
              </li>
              <li>
                <a href="/">0869394765</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header__sub">
        <div className="container">
          <div className="header__content">
            <div className="header__mobile" onClick={openMenu}>
              <AiOutlineMenu />
            </div>
            <div className="header__hotline col-lg-3">
              <a href="/">
                <img src="../assets/images/header/mobile-phone.svg" alt="" />{" "}
                0869394765
              </a>
            </div>
            <div className="header__logo col-lg-3">
              <Link to="/">
                <img
                  src="../assets/images/header/store_1554367871_28.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="header__help col-lg-3">
              <ul>
                <li className="header__cart">
                  <Link to="/cart">
                    <img
                      src="../assets/images/header/shopping-cart.svg"
                      alt=""
                    />
                  </Link>
                  <span className="header__quantity">{sl}</span>
                </li>
                <li className="header__search">
                  <a href="/">
                    <img src="../assets/images/header/search.svg" alt="" />
                  </a>
                </li>
                {isCheckLogin && (
                  <li className="header__account">
                    <a href="/">
                      <img
                        src={`https://ui-avatars.com/api/?background=ff324d&color=fff&name=+${checkLogin.replace(
                          /['"]+/g,
                          ""
                        )}`}
                        style={{ borderRadius: "50%" }}
                        alt=""
                      />
                    </a>
                    <ul>
                      <li>
                        <div
                          className="header__logout"
                          onClick={() => handleLogout()}
                        >
                          <FiLogOut />
                          Đăng xuất
                        </div>
                      </li>
                    </ul>
                  </li>
                )}
                {!isCheckLogin && (
                  <li className="header__account">
                    <a href="/">
                      <img src="../assets/images/header/user.svg" alt="" />
                    </a>
                    <ul>
                      <li>
                        <Link to="user/register">
                          <BsPencilSquare />
                          Đăng ký
                        </Link>
                      </li>
                      <li>
                        <Link to="user/login">
                          <FaLock />
                          Đăng nhập
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <form className="header__tk">
            <input type="search" placeholder="Tìm kiếm sản phẩm...." />
            <span>
              <button>
                <AiOutlineSearch />
              </button>
            </span>
          </form>
        </div>
      </div>

      <div className="container">
        <nav className={`header__menu ${open === 0 ? "" : "active"}`}>
          <ul>
            <li className="header__logo-mobile">
              <div className="header__sub-mobile">
                <div className="header__close" onClick={closeMenu}>
                  <MdClose />
                </div>
                <img
                  src="../assets/images/header/store_1554367871_28.jpg"
                  alt=""
                />
                <div className="header__menu-mobile">
                  <Link to="/user/login" onClick={closeMenu}>
                    <p>Đăng Nhập</p>
                  </Link>
                  <Link to="/user/register" onClick={closeMenu}>
                    <p>Đăng ký</p>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/my_pham" onClick={closeMenu}>
                Dược Mỹ Phẩm
              </Link>
            </li>
            <li>
              <Link to="/trang_diem" onClick={closeMenu}>
                Trang điểm
              </Link>
            </li>
            <li>
              <Link to="/cham_soc" onClick={closeMenu}>
                Chăm sóc
              </Link>
            </li>
            <li>
              <Link to="/lam_dep" onClick={closeMenu}>
                Làm đẹp
              </Link>
            </li>
            <li>
              <Link to="/gioi_thieu" onClick={closeMenu}>
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link to="/lien_he" onClick={closeMenu}>
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
