import { useNavigate } from 'react-router-dom'
import React from 'react'
let LoginStyle = {
  div: {
    backgroundColor: '#eeeeee',
    height: '660px',
    textAlign: 'center',
  },
  table: {
    width: '30%',
    height: '200px',
    margin: 'auto',
    textAlign: 'left',
  },
  input: {
    width: '400px',
    height: '40px',
  },
  buttonInput: {
    width: '200px',
    height: '40px',
  },
  span: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
}
export const Login = () => {
  const navigate = useNavigate()

  const routeChange = () => {
    navigate('/Confirmation')
  }

  return (
    <div style={LoginStyle.div}>
      <br />
      <span style={LoginStyle.span}>Welcome to the job search application</span>
      <br />
      <br />
      <hr />
      <br />
      <table style={LoginStyle.table}>
        <tr>
          <span></span>
        </tr>
        <tr>
          <input
            style={LoginStyle.input}
            type="email"
            name="email"
            placeholder=" Enter your Email"
          />
        </tr>
        <tr>
          <input style={LoginStyle.buttonInput} type="reset" name="image" />
          <input
            onClick={routeChange}
            style={LoginStyle.buttonInput}
            type="submit"
            name="submit"
          />
        </tr>
      </table>
    </div>
  )
}
