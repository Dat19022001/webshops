import {RegEmail,RegPassword} from './regex'

export const isValidEmail = (value) =>{
  return RegEmail.test(value);
}

export const isValidPassword = (value) =>{
  return RegPassword.test(value);
}

export const isValidLength = (value,length) =>{
  if(value.trim().length >= length){
    return true;
  }
  return false;
}

export const chuyenVND = (num) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num)

