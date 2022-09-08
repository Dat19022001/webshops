import Helmet from "../components/helmet";

import { unwrapResult } from "@reduxjs/toolkit";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import { useDispatch } from "react-redux";

import { isValidEmail} from '../constant/validate'
import {register} from '../user/userSlide'





export default function Register(){
  const initialValues = {userName:'', email: '',password: '',lastName:'',firstName:''};
  const [formValues,setFormValues] = useState(initialValues);
  const [formError,setFormError] = useState({userName:'', email: '',password: '',lastName:'',firstName:''});
  const [registerError,setRegisterError] = useState('')

  const handleChange = ({currentTarget: input}) => {
    setFormValues({...formValues,[input.name]: input.value})
  }

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const resgister = () => {
    const params = { 
      email: formValues.email,
      firstName: formValues.firstName,
      lastName:formValues.lastName,
      password:formValues.password,
      username:formValues.userName,
    }

    
    const handleSubmit = async(value)=>{
      
      try{
        const action = register(value);
        const resultAction = await dispatch(action);
        const user = unwrapResult(resultAction);
        alert(user.message)
        setRegisterError("")
        navigate('/user/login',{replace : true})
      }
      catch(err){
        setRegisterError("Username is already taken")
      }

    }
    handleSubmit(params);
  }

  const handleBlur = (e) => {
    const name = e.target.name;
    const error = validate(formValues);
    if (name === 'email'){
      setFormError({...formError, [name] : error.email});
    }
    if (name === 'userName'){
      setFormError({...formError, [name] : error.userName});
    }
    if (name === 'lastName'){
      setFormError({...formError, [name] : error.lastName});
    }
    if (name === 'password'){
      setFormError({...formError, [name] : error.password});
    }
    if (name === 'firstName'){
      setFormError({...formError, [name] : error.firstName});
    }
  }
  const validate = (values) => {
    const errors = {}
    if(!values.email){
        errors.email = "Vui lòng nhập email!"
    }
    else if(!isValidEmail(values.email)){
        errors.email = "Vui lòng nhập đúng email!"
    }
    if(!values.password){
        errors.password = "Vui lòng nhập mật khẩu!"
    }
    if(!values.lastName){
      errors.lastName = "Vui lòng nhập LastName ";
    }
    if(!values.userName){
      errors.userName = "Vui lòng nhập UserName";
    }
    if(!values.firstName){
      errors.firstName = "Vui lòng nhập FirstName";
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
              {registerError && <p>{registerError}</p> }
                <input type="text" className="register__sdt" placeholder="FirstName"
                   name="firstName" onBlur={(e) => handleBlur(e)}
                   value={formValues.firstName} onChange={handleChange}
                />
                {formError.firstName && <p>{formError.firstName}</p>}
              </li>
              <li>
                <input type="text" className="register__sdt" placeholder="LastName"
                   name="lastName" onBlur={(e) => handleBlur(e)}
                   value={formValues.lastName} onChange={handleChange}
                />
                {formError.lastName && <p>{formError.lastName}</p>}
              </li>
              <li>
                <input type="text" className="register__hvt" placeholder="UserName"
                 name="userName" onBlur={(e) => handleBlur(e)}
                 value={formValues.userName} onChange={handleChange}
                />
                {formError.userName && <p>{formError.userName}</p>}
              </li>
              <li>
                <input type="text" className="register__email" placeholder="Email"
                   name="email" onBlur={(e) => handleBlur(e)}
                   value={formValues.email} onChange={handleChange}
                />
                {formError.email && <p>{formError.email}</p>}
              </li>
              <li>
                <input type="password" className="register__password" placeholder="Password"
                   name="password" onBlur={(e) => handleBlur(e)}
                   value={formValues.password} onChange={handleChange}
                />
                {formError.password && <p>{formError.password}</p>}
              </li>
              
              
            </ul>
          </form>
          <div className="login__submit">
            <button 
              disabled = {formValues.userName==='' || formValues.password==='' || formValues.firstName==='' || formValues.lastName==='' || formValues.email===''} 
              className="login__submit1" onClick={()=> resgister()} >Đăng Ký</button>
          </div>
        </div>
      </div>
    </Helmet>
  )
}