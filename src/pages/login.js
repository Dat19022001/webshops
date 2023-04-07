import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Helmet from "../components/helmet";
import { loginRequest } from "../services/authService";
import { useDispatch } from "react-redux";
import { insertUser } from "../user/userSlide";

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

  const login1 = () => {
    const params = {
      UserName: formValues.userName,
      Password: formValues.password,
    };
    loginRequest(
      params,
      (res) => {
        if (res.data.status === "Failed") {
          setLoginError(res.data.message);
        }
        if (res.data.status === "Success") {
          setLoginError("");
          const user = JSON.stringify(res.data.UserName);
          localStorage.setItem("user", user);
          dispatch(insertUser(user))
          alert("Dang nhap thanh cong");
          navigate("/", { replace: true });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
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
