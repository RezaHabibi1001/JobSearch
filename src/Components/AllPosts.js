import React from 'react'
let AllPostsStyle = {
  div: {
    backgroundColor: '#eeeeee',
    textAlign: 'center',
  },
  table: {
    width: '60%',
    margin: 'auto',
  },
  likeInput: {
    width: '100px',
    height: '30px',
    backgroundColor: 'lightGreen',
    float: 'left',
    borderRadius: '5px',
  },
  disLikeInput: {
    width: '100px',
    height: '30px',
    backgroundColor: '#ff4444',
    float: 'left',
    borderRadius: '5px',
  },
  span: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
}
export const AllPosts = () => {
  return (
    <div style={AllPostsStyle.div}>
      <br />
      <span style={AllPostsStyle.span}>
        Welcome Ahmad you can see resent post !
      </span>
      <br />
      <br />
      <hr />
      <br />
      <form>
        <table style={AllPostsStyle.table}>
          <tr style={{ backgroundColor: '#F1E5ACd0' }}>
            <div style={{ border: '2px solid #cccccc', borderRadius: '10px' }}>
              <img
                style={{ float: 'left' }}
                width="30px"
                src="./whatsapp.png"
              />
              <span
                style={{
                  float: 'left',
                  paddingLeft: '10px',
                  paddingTop: '5px',
                }}
              >
                Reza Habibi
              </span>
              <br />
              <br />
              <img width="100%" src="/reza4.png" alt="Image" />
              <br />
              <br />
              <span>
                The descriotion of the image will come here.The descriotion of
                the image will come hereThe descriotion of the image will come
                hereThe descriotion of the image will come here
              </span>
              <br />
              <hr />
              <table>
                <tr>
                  <td>
                    <input
                      style={AllPostsStyle.likeInput}
                      type="button"
                      name="like"
                      value="Like"
                    />
                  </td>
                  <td>
                    <input
                      style={AllPostsStyle.disLikeInput}
                      type="button"
                      name="like"
                      value="DisLike"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span> 34 </span>
                  </td>
                  <td>
                    <span> 56 </span>
                  </td>
                </tr>
              </table>
            </div>
          </tr>
          <tr style={{ backgroundColor: '#F1E5ACd0' }}>
            <div style={{ border: '2px solid #cccccc', borderRadius: '10px' }}>
              <img
                style={{ float: 'left' }}
                width="30px"
                src="./whatsapp.png"
              />
              <span
                style={{
                  float: 'left',
                  paddingLeft: '10px',
                  paddingTop: '5px',
                }}
              >
                Reza Habibi
              </span>
              <br />
              <br />
              <img width="100%" src="/reza.png" alt="Image" />
              <br />
              <br />
              <span>
                The descriotion of the image will come here.The descriotion of
                the image will come hereThe descriotion of the image will come
                hereThe descriotion of the image will come here
              </span>
              <br />
              <hr />
              <table>
                <tr>
                  <td>
                    <input
                      style={AllPostsStyle.likeInput}
                      type="button"
                      name="like"
                      value="Like"
                    />
                  </td>
                  <td>
                    <input
                      style={AllPostsStyle.disLikeInput}
                      type="button"
                      name="like"
                      value="DisLike"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span> 34 </span>
                  </td>
                  <td>
                    <span> 56 </span>
                  </td>
                </tr>
              </table>
            </div>
          </tr>
        </table>
      </form>
    </div>
  )
}
