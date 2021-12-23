import React from 'react'
let CreatePostStyle = {
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
export const CreatePost = () => {
  return (
    <div style={CreatePostStyle.div}>
      <br />
      <span style={CreatePostStyle.span}>
        Welcome Ahmad you can create a new post!
      </span>
      <br />
      <br />
      <hr />
      <br />
      <form>
        <table style={CreatePostStyle.table}>
          <tr>
            <span>Tittle</span>
          </tr>
          <tr>
            <input
              style={CreatePostStyle.input}
              type="text"
              name="tittle"
              placeholder=" Enter the tittle"
            />
          </tr>
          <tr>
            <span>Message</span>
          </tr>
          <tr>
            <textarea
              style={CreatePostStyle.textareaInput}
              name="message"
              placeholder=" Enter the message"
            ></textarea>
          </tr>
          <tr>
            <span>Image</span>
          </tr>
          <tr>
            <input type="file" name="image" />
          </tr>
          <tr>
            {' '}
            <br />{' '}
          </tr>
          <tr>
            <input
              style={CreatePostStyle.buttonInput}
              type="reset"
              name="image"
            />
            <input
              style={CreatePostStyle.buttonInput}
              type="submit"
              name="submit"
            />
          </tr>
        </table>
      </form>
    </div>
  )
}
