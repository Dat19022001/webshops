
import {FaGoogle,FaFacebookF} from 'react-icons/fa';
import {AiFillQuestionCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { useState} from 'react';

import { isValidPassword} from '../constant/validate'

import Helmet from "../components/helmet";

export default function Login(){

  const initialValues = {userName: '',password: ''};
  const [formValues,setFormValues] = useState(initialValues);
  const [formError,setFormError] = useState({userName:'',password:''});

  const handleChange = ({currentTarget: input}) => {
    setFormValues({...formValues,[input.name]: input.value})
  }

  const handleBlur = (e) => {
    const name = e.target.name;
    const error = validate(formValues);
    if (name === 'userName'){
      setFormError({...formError, [name] : error.userName});
    }
    if (name === 'password'){
      setFormError({...formError, [name] : error.password});
    }
  }
  const validate = (values) => {
    const errors = { userName: "", password: ""}
    if(!values.userName){
        errors.userName = "Vui lòng nhập UserName!"
    }
    if(!values.password){
        errors.password = "Vui lòng nhập mật khẩu!"
    }
    else if(!isValidPassword(values.password)){
        errors.password = "Mật khẩu ít nhất 6 ký tự!"

    }
    
    return errors
  }

  

  return(
    <Helmet title="Đăng nhập">
      <div className="container">
        <div className="login">
          <form>
            <ul>
              <li>
                <input type="text" className="login__email" placeholder="UserName" 
                  name="userName" onBlur={(e) => handleBlur(e)}
                  value={formValues.userName} onChange={handleChange}
                />
                {formError.userName && <p>{formError.userName}</p>}
              </li>
              <li>
                <input type="password" className="login__password" placeholder="Mật Khẩu"
                  name="password" onBlur={(e) => handleBlur(e)}
                  value={formValues.password} onChange={handleChange}
                />
                {formError.password && <p>{formError.password}</p>}
              </li>
              <li className="login__submit">
                <input type="submit" className="login__submit1" value="Đăng Nhập"/>
              </li>
            </ul>
          </form>
          <div className="login__btn">
            <a class="login__face">
              <FaFacebookF/>
              Facebook
            </a>
            <a class="login__google">
              <FaGoogle/>
              Google
            </a>
          </div>
          <p className="login__forget">
            <Link to="user/getpasswork">
              <AiFillQuestionCircle/>
                Quên mật khẩu
            </Link>
          </p>
        </div>
      </div>
    </Helmet>
  )
}