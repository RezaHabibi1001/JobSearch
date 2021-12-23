import React from 'react'
let RegisterStyle = {
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
    fontSize: '25px',
    fontWeight: 'bold',
  },
}
export const Register = () => {
  return (
    <div style={RegisterStyle.div}>
      <br />
      <span style={RegisterStyle.span}>
        Welcome Dear User, You Can Create an Account !
      </span>
      <br />
      <hr />
      <br />
      <form>
        <table style={RegisterStyle.table}>
          <tr>
            <span>First Name</span>
          </tr>
          <tr>
            <input
              style={RegisterStyle.input}
              type="text"
              name="name"
              placeholder=" Enter Your First Name"
            />
          </tr>
          <tr>
            <span>Last Name</span>
          </tr>
          <tr>
            <input
              style={RegisterStyle.input}
              type="text"
              name="name"
              placeholder=" Enter Your Last Name"
            />
          </tr>
          <tr>
            <span>Email</span>
          </tr>
          <tr>
            <input
              style={RegisterStyle.input}
              type="email"
              name="name"
              placeholder=" Enter Your email Address"
            />
          </tr>
          <tr>
            <span>BirthDay</span>
          </tr>
          <tr>
            <input
              style={RegisterStyle.input}
              type="date"
              name="date"
              placeholder=" Select Your BirthDay"
            />
          </tr>
          <tr>
            <span>Country</span>
          </tr>
          <tr>
            <select style={RegisterStyle.input}>
              <option>Afghanistan</option>
              <option>Iran</option>
              <option>China</option>
              <option>Pakistan</option>
            </select>
          </tr>
          <tr>
            <span>Biography</span>
          </tr>
          <tr>
            <textarea
              style={RegisterStyle.textareaInput}
              name="message"
              placeholder=" Enter the message"
            ></textarea>
          </tr>
          <tr>
            <span>Profile Image</span>
          </tr>
          <tr>
            <input
              style={RegisterStyle.input}
              type="file"
              name="image"
              placeholder=" Choose Your Image"
            />
          </tr>
          <tr>
            <input
              style={RegisterStyle.buttonInput}
              type="reset"
              name="reset"
            />
            <input
              style={RegisterStyle.buttonInput}
              type="submit"
              name="submit"
              value="Save"
            />
          </tr>
        </table>
      </form>
    </div>
  )
}
