import Helmet from "../components/helmet";

import {useState} from 'react';

import { isValidEmail, isValidPassword} from '../constant/validate'



export default function Register(){
  const initialValues = {fullName:'', email: '',password: '',phone: ''};
  const [formValues,setFormValues] = useState(initialValues);
  const [formError,setFormError] = useState({fullName:'', email: '',password: '',phone: ''});

  const handleChange = ({currentTarget: input}) => {
    setFormValues({...formValues,[input.name]: input.value})
  }

  const handleBlur = (e) => {
    const name = e.target.name;
    const error = validate(formValues);
    if (name === 'email'){
      setFormError({...formError, [name] : error.email});
    }
    if (name === 'fullName'){
      setFormError({...formError, [name] : error.fullName});
    }
    if (name === 'phone'){
      setFormError({...formError, [name] : error.phone});
    }
    if (name === 'password'){
      setFormError({...formError, [name] : error.password});
    }
  }
  const validate = (values) => {
    const errors = { email: "", password: ""}
    if(!values.email){
        errors.email = "Vui lòng nhập email!"
    }
    else if(!isValidEmail(values.email)){
        errors.email = "Vui lòng nhập đúng email!"
    }
    if(!values.password){
        errors.password = "Vui lòng nhập mật khẩu!"
    }
    else if(!isValidPassword(values.password)){
        errors.password = "Mật khẩu ít nhất 6 ký tự!"

    }
    if(!values.phone){
      errors.phone = "Vui lòng nhập số điện thoại";
    }
    if(!values.fullName){
      errors.fullName = "Vui lòng nhập họ và tên";
    }
    return errors
  }
  return(
    <Helmet title="Đăng Ký">
      <div className="container">
        <div className="login">
          <form>
            <ul>
              <li>
                <input type="text" className="register__hvt" placeholder="Họ và tên"
                 name="fullName" onBlur={(e) => handleBlur(e)}
                 value={formValues.fullName} onChange={handleChange}
                />
                {formError.fullName && <p>{formError.fullName}</p>}
              </li>
              <li>
                <input type="text" className="register__email" placeholder="Email"
                   name="email" onBlur={(e) => handleBlur(e)}
                   value={formValues.email} onChange={handleChange}
                />
                {formError.email && <p>{formError.email}</p>}
              </li>
              <li>
                <input type="password" className="register__password" placeholder="Mật Khẩu"
                   name="password" onBlur={(e) => handleBlur(e)}
                   value={formValues.password} onChange={handleChange}
                />
                {formError.password && <p>{formError.password}</p>}
              </li>
              <li>
                <input type="text" className="register__sdt" placeholder="Số Điện Thoại"
                   name="phone" onBlur={(e) => handleBlur(e)}
                   value={formValues.phone} onChange={handleChange}
                />
                {formError.phone && <p>{formError.phone}</p>}
              </li>
              <li className="login__submit">
                <input type="submit" className="login__submit1" value="Đăng Ký"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </Helmet>
  )
}