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
    fontSize: '25px',
    fontWeight: 'bold',
  },
}
export const Profile = () => {
  return (
    <div style={ProfileStyle.div}>
      <br />
      <span style={ProfileStyle.span}>
        Welcome Ahmad you can edit your profile !
      </span>
      <br />
      <br />
      <hr />
      <br />
      <form>
        <table style={ProfileStyle.table}>
          <tr>
            <span>First Name</span>
          </tr>
          <tr>
            <input
              style={ProfileStyle.input}
              type="text"
              name="firstName"
              placeholder=" Enter the first name"
            />
          </tr>
          <tr>
            <span>Last Name</span>
          </tr>
          <tr>
            <input
              style={ProfileStyle.input}
              type="text"
              name="lastName"
              placeholder=" Enter the last name"
            />
          </tr>

          <tr>
            <span>Biography</span>
          </tr>
          <tr>
            <textarea
              style={ProfileStyle.textareaInput}
              name="biography"
              placeholder=" Enter the biography"
            ></textarea>
          </tr>
          <tr>
            <span>Profile Image</span>
          </tr>
          <tr>
            <input type="file" name="image" />
          </tr>
          <tr>
            {' '}
            <br />{' '}
          </tr>
          <tr>
            <input style={ProfileStyle.buttonInput} type="reset" name="image" />
            <input
              style={ProfileStyle.buttonInput}
              type="submit"
              value="Save"
            />
          </tr>
        </table>
      </form>
    </div>
  )
}
