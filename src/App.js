import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Head } from './Components/Head'
import { Content } from './Components/Content'
import { WorkerAccount } from './Components/WorkerAccount'
import { AllSuggestedStyle } from './Components/AllSuggested'
import { Profile } from './Components/Profile'
import { Login } from './Components/Login.js'
import { Register } from './Components/Register'
import { AllPosts } from './Components/AllPosts'
import { EmptyHeader } from './Components/EmptyHeader'
import { FindFriend } from './Components/FindFriend'
import { Welcome } from './Components/Welcom'
import { EmployerAccount } from './Components/EmployerAccount'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Login />
            </Fragment>
          }
        />
        <Route
          path="/WorkerAccount"
          element={
            <Fragment>
              <WorkerAccount />
            </Fragment>
          }
        />
        <Route
          path="/EmployerAccount"
          element={
            <Fragment>
              <EmployerAccount />
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
          path="/AllSuggested"
          element={
            <Fragment>
              <AllSuggestedStyle />
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
          path="/AllPosts"
          element={
            <Fragment>
              <AllPosts />
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
