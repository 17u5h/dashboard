import React from 'react'
import style from './style.module.css'

type Props = {
  onClick: () => void
  children: string
  majorButton: boolean
}

const UIButton = ({ onClick, children, majorButton }: Props) => {
  const backgroundColor = majorButton ? style.majorButton : style.minorButton

  return (
    <div className={backgroundColor} onClick={onClick}>
      {children}
    </div>
  )
}

export default UIButton
