import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import {useDispatch} from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit";

import {login} from '../user/userSlide'

import Helmet from "../components/helmet";


export default function Login() {
  const dispatch = useDispatch();

 

  const initialValues = { userName: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({ userName: "", password: "" });

  const [loginError, setLoginError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setFormValues({ ...formValues, [input.name]: input.value });
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    const error = validate(formValues);
    if (name === "userName") {
      setFormError({ ...formError, [name]: error.userName });
    }
    if (name === "password") {
      setFormError({ ...formError, [name]: error.password });
    }
  };
  const validate = (values) => {
    const errors = { userName: "", password: "" };
    if (!values.userName) {
      errors.userName = "Vui lòng nhập UserName!";
    }
    if (!values.password) {
      errors.password = "Vui lòng nhập mật khẩu!";
    }

    return errors;
  };

  const navigate = useNavigate();
 
  //   const params = {
  //     username: formValues.userName,
  //     password: formValues.password,
  //   };

  //   const fetchLogin = async () => {
  //     try {
  //       const res = await authenticateApi.login(params);

      
  //       if (res.data) {
  //         const user = JSON.stringify(res.data);

  //         localStorage.setItem("user", user);
  //         // navigate("/", { replace: true });

  //         alert("Đăng nhập thành công");
  
  //         setLoginError("");
  //       }
  //     } catch (err) {
  //       setLoginError(err.response.data);
  //     }
  //   };

  //   fetchLogin();

  //   console.log(loginError);
  // };
 

  const login1 = () => {
    const params = { 
      email: formValues.email,
      firstName: formValues.firstName,
      lastName:formValues.lastName,
      password:formValues.password,
      username:formValues.userName,
    }

    
    const handleSubmit = async(value)=>{
      
      try{
        const action = login(value);
        const resultAction = await dispatch(action);
        unwrapResult(resultAction);

        alert('Dang nhap thanh cong');
        navigate('/',{ replace : true})
        setLoginError('')
      }
      catch(err){
        setLoginError('Username or password is incorrect')
      }

    }
    handleSubmit(params);
  }

  return (
    <Helmet title="Đăng nhập">
      <div className="container">
        <div className="login">
          <form>
            <ul>
              <li>
                {loginError && <p>{loginError}</p>}
                <input
                  type="text"
                  className="login__email"
                  placeholder="UserName"
                  name="userName"
                  onBlur={(e) => handleBlur(e)}
                  value={formValues.userName}
                  onChange={handleChange}
                />
                {formError.userName && <p>{formError.userName}</p>}
              </li>
              <li>
                <input
                  type="password"
                  className="login__password"
                  placeholder="Mật Khẩu"
                  name="password"
                  onBlur={(e) => handleBlur(e)}
                  value={formValues.password}
                  onChange={handleChange}
                />
                {formError.password && <p>{formError.password}</p>}
              </li>
            </ul>
          </form>
          <div className="login__submit">
            <button
              disabled={
                formValues.userName === "" || formValues.password === ""
              }
              className="login__submit1"
              onClick={() => login1()}
            >
              Đăng Nhập
            </button>
          </div>
          <div className="login__btn">
            <a href="\" className="login__face">
              <FaFacebookF />
              Facebook
            </a>
            <a href="\" className="login__google">
              <FaGoogle />
              Google
            </a>
          </div>
          <p className="login__forget">
            <Link to="user/getpasswork">
              <AiFillQuestionCircle />
              Quên mật khẩu
            </Link>
          </p>
        </div>
      </div>
    </Helmet>
  );
}
