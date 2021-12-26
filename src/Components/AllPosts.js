import React, { useState } from 'react'
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
  let state = {
    name: 'Reza',
    lastName: 'Habibi',
    tittle: `The descriotion of the image will come here.The descriotion of
        the image will come hereThe descriotion of the image will come
        hereThe descriotion of the image will come here`,
    like: 23,
    disLike: 22,
    image: '/reza4.png',
    profileImage: '/whatsapp.png',
  }
  let [count, setCount] = useState(state.like)
  let [deCount, setDeCount] = useState(state.disLike)
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
      <table style={AllPostsStyle.table}>
        <tr style={{ backgroundColor: '#F1E5ACd0' }}>
          <div style={{ border: '2px solid #cccccc', borderRadius: '10px' }}>
            <img
              style={{ float: 'left' }}
              width="30px"
              src={state.profileImage}
            />
            <span
              style={{
                float: 'left',
                paddingLeft: '10px',
                paddingTop: '5px',
              }}
            >
              {state.name}-{state.lastName}
            </span>
            <br />
            <br />
            <img width="100%" src={state.image} alt="Image" />
            <br />
            <br />
            <span>{state.tittle}</span>
            <br />
            <hr />
            <table>
              <tr>
                <td>
                  <input
                    onClick={() => setCount(count + 1)}
                    style={AllPostsStyle.likeInput}
                    type="button"
                    name="like"
                    value="Like"
                  />
                </td>
                <td>
                  <input
                    onClick={() => setDeCount(deCount + 1)}
                    style={AllPostsStyle.disLikeInput}
                    type="button"
                    name="disLike"
                    value="DisLike"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>{count}</span>
                </td>
                <td>
                  <span>{deCount}</span>
                </td>
              </tr>
            </table>
          </div>
        </tr>
        <tr style={{ backgroundColor: '#F1E5ACd0' }}>
          <div style={{ border: '2px solid #cccccc', borderRadius: '10px' }}>
            <img style={{ float: 'left' }} width="30px" src="./whatsapp.png" />
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
              The descriotion of the image will come here.The descriotion of the
              image will come hereThe descriotion of the image will come hereThe
              descriotion of the image will come here
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
    </div>
  )
}
