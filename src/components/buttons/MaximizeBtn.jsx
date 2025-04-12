import React from 'react'
import BaseButton from './BaseButton'

const MaximizeButton = ({styles = {}, ...props}) => {
    
  return (
    <BaseButton styles={{...styles, backgroundColor: "var(--mint)"}} {...props}/>
  )
}

export default MaximizeButton