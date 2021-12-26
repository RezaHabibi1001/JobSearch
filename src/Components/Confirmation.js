import { useNavigate } from 'react-router-dom'
import React from 'react'
let ConfirmationStyle = {
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
export const Confirmation = () => {
  const navigate = useNavigate()

  const routeChange = () => {
    navigate('/Register')
  }
  return (
    <div style={ConfirmationStyle.div}>
      <br />
      <span style={ConfirmationStyle.span}>
        Please Enter The Verification Code !
      </span>
      <br />
      <br />
      <hr />
      <br />
      <table style={ConfirmationStyle.table}>
        <tr>
          <span>
            We have sent a Verification Code to your Email, please Enter that
            code in the below Box{' '}
          </span>
        </tr>
        <tr>
          <input
            style={ConfirmationStyle.input}
            type="text"
            name="verification"
            placeholder="Enter the verification Code "
          />
        </tr>
        <tr>
          <input
            onClick={routeChange}
            style={ConfirmationStyle.buttonInput}
            type="submit"
            name="submit"
          />
        </tr>
      </table>
    </div>
  )
}
