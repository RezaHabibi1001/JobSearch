import React, { useState } from 'react'
import '../Styles/AllSuggestedStyle.css';
import { useNavigate } from 'react-router-dom';


export const AllSuggestedStyle = () => {

  const navigate = useNavigate()
  const routeChange = () => {
    navigate('/AllPosts')
  }

  return (

<div class='all' dir='rtl'>
  <div class="header">
  <ul>
  <li><a href="#contact">تماس با ما</a></li>
  <li onclick = {routeChange} ><a href="#news"> تمام کارها</a></li>
  <li><a class="active" href="#home"> پیشنهاد شده ها</a></li>
</ul>

   </div>
  <div class="row">
    <div class="card">
    <h2 class="tittle">خیاطی صداقت </h2>
    <table>
      <tr><td class='detail'>تایم کاری</td><td>از ۸ صبح تا ۵ عصر</td></tr>
      <tr><td class='detail'>معاش</td><td> ۱۲,۰۰۰</td></tr>
      <tr><td class='detail'>تحصیلات</td><td>لیسانس</td></tr>
      <tr><td class='detail'>جنسیت</td><td> خانم /آقا</td></tr>
      <tr><td class='detail'>آدرس</td><td>درب ملک</td></tr>
      <tr><td class='special' colSpan={2}>  <input className='inputClass' type="button" value="درخواست دادن " /> </td></tr>
    </table>
      </div>
      <div class="card">
    <h2> آرایشگاه سلیقه </h2>
    <table>
      <tr><td class='detail'>تایم کاری</td><td>از ۸ صبح تا ۵ عصر</td></tr>
      <tr><td class='detail'>معاش</td><td> ۱۲,۰۰۰</td></tr>
      <tr><td class='detail'>تحصیلات</td><td>لیسانس</td></tr>
      <tr><td class='detail'>جنسیت</td><td> خانم /آقا</td></tr>
      <tr><td class='detail'>آدرس</td><td>درب ملک</td></tr>
      <tr><td class='special' colSpan={2}>  <input className='inputClass' type="button" value="درخواست دادن " /> </td></tr>
    </table>
      </div>
  </div>
</div>
    )
}
