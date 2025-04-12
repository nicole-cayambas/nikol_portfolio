import React from 'react'
import BaseButton from './BaseButton'

const CloseButton = ({styles = {}, ...props}) => {
    
  return (
    <BaseButton styles={{...styles, backgroundColor: "var(--red)"}} {...props} />
  )
}

export default CloseButton