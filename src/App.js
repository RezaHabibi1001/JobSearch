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
import { AllFriends } from './Components/AllFriends'
import { EmptyHeader } from './Components/EmptyHeader'
import { FindFriend } from './Components/FindFriend'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <EmptyHeader />
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
              <EmptyHeader />
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
              <EmptyHeader />
              <Confirmation />
            </Fragment>
          }
        />
        <Route
          path="/Register"
          element={
            <Fragment>
              <EmptyHeader />
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
        <Route
          path="/AllFriends"
          element={
            <Fragment>
              <Head />
              <AllFriends />
            </Fragment>
          }
        />
        <Route
          path="/FindFriend"
          element={
            <Fragment>
              <Head />
              <FindFriend />
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
