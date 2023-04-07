import Helmet from "../components/helmet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { isValidEmail } from "../constant/validate";
import { registerRequest } from "../services/authService";
export default function Register() {
  const initialValues = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    address: "",
    mobile: "",
    ConfirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({
    address: "",
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    mobile: "",
    ConfirmPassword: "",
  });
  const [registerError, setRegisterError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setFormValues({ ...formValues, [input.name]: input.value });
  };

  const navigate = useNavigate();

  const register = () => {
    const params = {
      FirstName: formValues.firstName,
      LastName: formValues.lastName,
      EmailId: formValues.email,
      MobileNumber: formValues.mobile,
      Password: formValues.password,
      ConfirmPassword: formValues.ConfirmPassword,
      Address: formValues.address,
    };
    registerRequest(
      params,
      (res) => {
        if (res.data.status === "Failed") {
          setRegisterError(res.data.message);
        }
        if (res.data.status === "Success") {
          setRegisterError("");
          navigate("/user/login", { replace: true });
        }
      },
      (err) => {
        console.log("ko thanh cong");
      }
    );
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    const error = validate(formValues);
    if (name === "email") {
      setFormError({ ...formError, [name]: error.email });
    }
    if (name === "userName") {
      setFormError({ ...formError, [name]: error.address });
    }
    if (name === "lastName") {
      setFormError({ ...formError, [name]: error.lastName });
    }
    if (name === "password") {
      setFormError({ ...formError, [name]: error.password });
    }
    if (name === "firstName") {
      setFormError({ ...formError, [name]: error.firstName });
    }
    if (name === "mobile") {
      setFormError({ ...formError, [name]: error.mobile });
    }
    if (name === "ConfirmPassword") {
      setFormError({ ...formError, [name]: error.ConfirmPassword });
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Vui lòng nhập email!";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Vui lòng nhập đúng email!";
    }
    if (!values.password) {
      errors.password = "Vui lòng nhập mật khẩu!";
    }
    if (!values.lastName) {
      errors.lastName = "Vui lòng nhập LastName ";
    }
    if (!values.address) {
      errors.userName = "Vui lòng nhập Address";
    }
    if (!values.firstName) {
      errors.firstName = "Vui lòng nhập FirstName";
    }
    if (!values.mobile) {
      errors.mobile = "Vui lòng nhập Mobile Phone";
    }
    return errors;
  };
  return (
    <Helmet title="Đăng Ký">
      <div className="container">
        <div className="login">
          <form>
            <ul>
              <li>
                {registerError && <p>{registerError}</p>}
                <input
                  type="text"
                  className="register__sdt"
                  placeholder="FirstName"
                  name="firstName"
                  onBlur={(e) => handleBlur(e)}
                  value={formValues.firstName}
                  onChange={handleChange}
                />
                {formError.firstName && <p>{formError.firstName}</p>}
              </li>
              <li>
                <input
                  type="text"
                  className="register__sdt"
                  placeholder="LastName"
                  name="lastName"
                  onBlur={(e) => handleBlur(e)}
                  value={formValues.lastName}
                  onChange={handleChange}
                />
                {formError.lastName && <p>{formError.lastName}</p>}
              </li>
              <li>
                <input
                  type="text"
                  className="register__email"
                  placeholder="Email"
                  name="email"
                  onBlur={(e) => handleBlur(e)}
                  value={formValues.email}
                  onChange={handleChange}
                />
                {formError.email && <p>{formError.email}</p>}
              </li>
              <li>
                <input
                  type="password"
                  className="register__password"
                  placeholder="Password"
                  name="password"
                  onBlur={(e) => handleBlur(e)}
                  value={formValues.password}
                  onChange={handleChange}
                />
                {formError.password && <p>{formError.password}</p>}
              </li>
              <li>
                <input
                  type="password"
                  className="register__hvt"
                  placeholder="ConfirmPassword"
                  name="ConfirmPassword"
                  onBlur={(e) => handleBlur(e)}
                  value={formValues.ConfirmPassword}
                  onChange={handleChange}
                />
                {formError.ConfirmPassword && (
                  <p>{formError.ConfirmPassword}</p>
                )}
              </li>
              <li>
                <input
                  type="text"
                  className="register__hvt"
                  placeholder="Address"
                  name="address"
                  onBlur={(e) => handleBlur(e)}
                  value={formValues.address}
                  onChange={handleChange}
                />
                {formError.address && <p>{formError.address}</p>}
              </li>
              <li>
                <input
                  type="text"
                  className="register__hvt"
                  placeholder="MobileNumber"
                  name="mobile"
                  onBlur={(e) => handleBlur(e)}
                  value={formValues.mobile}
                  onChange={handleChange}
                />
                {formError.mobile && <p>{formError.mobile}</p>}
              </li>
            </ul>
          </form>
          <div className="login__submit">
            <button
              disabled={
                formValues.address === "" ||
                formValues.password === "" ||
                formValues.firstName === "" ||
                formValues.lastName === "" ||
                formValues.email === "" ||
                formValues.mobile === "" ||
                formValues.ConfirmPassword === ""
              }
              className="login__submit1"
              onClick={() => register()}
            >
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
