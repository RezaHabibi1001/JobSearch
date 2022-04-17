import React from 'react'
import { useNavigate } from 'react-router-dom'



export const EmployerAccount = () => {

  const navigate = useNavigate()
  const routeChange = () => {
    navigate('/AllPosts')
  }
  
  return (
<div dir='rtl'>

  <div className="container">
    <h1 class="formHeader">برای ایجاد حساب کاربری فورم را پرنمایید</h1>
    <hr />
    <br />
  <form onSubmit={routeChange}>

    <label for="name">نام دوکان</label>
    <input type="text" placeholder="نام  خود را وارد کنید " name="name" required />
    
    <label for="lastname">موقعیت</label>
    <input type="text" placeholder="تخلص  خود را وارد کنید " name="lastname" required />
    
    <label for="phone">شماره تماس</label>
    <input type="text" placeholder='شماره تماس خود را وارد نمایید' name="phone" required />
    
    <label for="job"> نوعیت شغل</label>
    <select name="job" class="jobSelect">
      <option>آرایشگری</option>
      <option>خیاطی</option>
      <option>رنگمالی</option>
      <option>نجاری</option>
      <option>گچ کاری</option>
    </select>    
    
    <label for="email">ایمیل</label>
    <input type="email" placeholder="  ایمیل تان را وارد کنید " name="email" required /> 
    
    <label for="psw">رمز عبور</label>
    <input type="password" placeholder="رمز عبور تان را وارد کنید " name="psw" required />
    
    <label for="remember">مرا به خاطر بسپار &nbsp;  </label>
    <input type="checkbox" checked="checked" name="remember" />      
    
    <button type="submit" class="button"> ثبت نام </button>
    <br />
    <br />
</form>
  </div>
    </div>
    )
}
