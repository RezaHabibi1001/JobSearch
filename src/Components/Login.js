import { useNavigate } from 'react-router-dom'
import React from 'react'

import '../Styles/WorkerAccount.css';

export const Login = () => {

  const navigate = useNavigate()
  const routeChange = () => {
    navigate('/AllSuggested')
  }
  const EmployeeAccount = () => {
    navigate('/WorkerAccount')
  }
  const EmployerAccount = () => {
    navigate('/EmployerAccount')
  }
  
  return (
    <div dir='rtl'>
      <h2> به اپلیکشن کار خوش آمدید</h2>
      <div className="imgcontainer">
      <img src="JobLogo.webp" width="200px" alt="Avatar" classNameName="avatar" />
  </div>

  <div className="container">
  <form onSubmit={routeChange}>
    <label for="uname">ایمیل کاربری</label>
    <input type="email" placeholder="ایمیل کاربری خود را وارد کنید " name="uname" required />
    <label for="psw">رمز عبور</label>
    <input type="password" placeholder="رمز عبور تان را وارد کنید " name="psw" required />
    <label for="remember">مرا به خاطر بسپار &nbsp;  </label>
    <input type="checkbox" checked="checked" name="remember" />      
    <button type="submit" class="button">ورود به عنوان استخدام شونده</button>
    <button type="submit" class="button">ورود به عنوان استخدام کننده</button>
    <br />
    <br />
        <button type="button"class ="accountButton" onClick={EmployeeAccount}>ایجاد حساب  استخدام شونده</button>
    <button type="button"class ="accountButton" onClick={EmployerAccount}> ایجاد حساب  استخدام کننده</button>
</form>
  </div>
    </div>
  )
}
