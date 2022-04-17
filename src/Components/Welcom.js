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
export const Welcome = () => {
  const navigate = useNavigate()

  const routeChange = () => {
    navigate('/Confirmation')
  }

  return (
    <div>
        welcom this page 
     </div>
  )
}
