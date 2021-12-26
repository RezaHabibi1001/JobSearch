import React from 'react'
let ProfileStyle = {
  div: {
    backgroundColor: '#eeeeee',
    height: '660px',
    textAlign: 'center',
  },
  table: {
    width: '30%',
    height: '300px',
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
  textareaInput: {
    width: '400px',
    minWidth: '400px',
    maxWidth: '400px',
    height: '100px',
    minHeight: '100px',
    maxHeight: '100px',
  },
  span: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
}
export const Profile = () => {
  const successfully = () => {
    document.getElementById('message').innerHTML =
      'Your Profile Successfully Updated ! '
  }
  return (
    <div style={ProfileStyle.div}>
      <br />
      <span
        id="message"
        style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}
      >
        Welcome to your Profile Setting !
      </span>

      <br />
      <br />
      <hr />
      <br />
      <table style={ProfileStyle.table}>
        <tr>
          <span style={ProfileStyle.span}>First Name</span>
        </tr>
        <tr>
          <input
            style={ProfileStyle.input}
            type="text"
            name="name"
            placeholder=" Enter Your First Name"
          />
        </tr>
        <tr>
          <span style={ProfileStyle.span}>Last Name</span>
        </tr>
        <tr>
          <input
            style={ProfileStyle.input}
            type="text"
            name="name"
            placeholder=" Enter Your Last Name"
          />
        </tr>

        <tr>
          <span style={ProfileStyle.span}>Biography</span>
        </tr>
        <tr>
          <textarea
            style={ProfileStyle.textareaInput}
            name="message"
            placeholder=" Enter the message"
          ></textarea>
        </tr>
        <tr>
          <span style={ProfileStyle.span}>Profile Image</span>
        </tr>
        <tr>
          <input
            style={ProfileStyle.input}
            type="file"
            name="image"
            placeholder=" Choose Your Image"
          />
        </tr>
        <tr>
          <input style={ProfileStyle.buttonInput} type="reset" name="reset" />
          <input
            onClick={successfully}
            style={ProfileStyle.buttonInput}
            type="submit"
            name="submit"
            value="Save"
          />
        </tr>
      </table>
    </div>
  )
}
