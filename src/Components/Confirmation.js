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
      <form>
        <table style={ConfirmationStyle.table}>
          <tr>
            <span>Verification Code: </span>
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
              style={ConfirmationStyle.buttonInput}
              type="submit"
              name="submit"
            />
          </tr>
        </table>
      </form>
    </div>
  )
}
