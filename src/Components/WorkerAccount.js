import React from 'react'
import { useNavigate } from 'react-router-dom'



export const WorkerAccount = () => {

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

    <label for="name">نام</label>
    <input type="text" placeholder="نام  خود را وارد کنید " name="name" required />
    
    <label for="lastname">تخلص</label>
    <input type="text" placeholder="تخلص  خود را وارد کنید " name="lastname" required />
    
    <label for="age">سن</label>
    <input type="number" name="age" required />
    
    <label for="job">شغل</label>
    <select name="job" class="jobSelect">
      <option>آرایشگر</option>
      <option>خیاط</option>
      <option>رنگمال</option>
      <option>نجار</option>
      <option>گچ کار</option>
    </select>    
    
    <label for="gender">جنسیت</label>
    <select name="gender" class="jobSelect">
      <option>آقا</option>
      <option>خانم</option>
    </select>    
    
    <label for="experiance">تجربه کاری</label>
    <select name="experiance" class="jobSelect">
      <option>یک سال </option>
      <option>دوسال</option>
      <option>سه سال</option>
      <option>تجربه کاری ندارم</option>
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
