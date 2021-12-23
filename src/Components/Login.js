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
  return (
    <div style={LoginStyle.div}>
      <br />
      <span style={LoginStyle.span}>Welcome To Login Form !</span>
      <br />
      <br />
      <hr />
      <br />
      <form>
        <table style={LoginStyle.table}>
          <tr>
            <span>Enter Your Email</span>
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
            <input style={LoginStyle.buttonInput} type="submit" name="submit" />
          </tr>
        </table>
      </form>
    </div>
  )
}
