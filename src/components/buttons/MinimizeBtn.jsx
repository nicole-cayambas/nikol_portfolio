import React from 'react'
import BaseButton from './BaseButton'

const MinimizeButton = ({styles = {}, ...props}) => {
    
  return (
    <BaseButton styles={{...styles, backgroundColor: "var(--yellow)"}} {...props}/>
  )
}

export default MinimizeButton