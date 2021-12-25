import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Head } from './Components/Head'
import { Content } from './Components/Content'
import { CreatePost } from './Components/CreatePost'
import { AllPosts } from './Components/AllPosts'
import { Profile } from './Components/Profile'
import { Login } from './Components/Login'
import { Confirmation } from './Components/Confirmation'
import { Register } from './Components/Register'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Head />
              <Login />
            </Fragment>
          }
        />

        <Route
          path="/CreatePost"
          element={
            <Fragment>
              <Head />
              <CreatePost />
            </Fragment>
          }
        />

        <Route
          path="/Login"
          element={
            <Fragment>
              <Head />
              <Login />
            </Fragment>
          }
        />
        <Route
          path="/AllPosts"
          element={
            <Fragment>
              <Head />
              <AllPosts />
            </Fragment>
          }
        />
        <Route
          path="/Profile"
          element={
            <Fragment>
              <Head />
              <Profile />
            </Fragment>
          }
        />
        <Route
          path="/Confirmation"
          element={
            <Fragment>
              <Head />
              <Confirmation />
            </Fragment>
          }
        />
        <Route
          path="/Register"
          element={
            <Fragment>
              <Head />
              <Register />
            </Fragment>
          }
        />
        <Route
          path="/Content"
          element={
            <Fragment>
              <Head />
              <Content />
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
