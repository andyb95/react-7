import React from 'react'
import styleHoc from './styleHoc'

const GoodButton = (props) => {
  return <button {...props} >GoodButton</button>
}

export default styleHoc(GoodButton)