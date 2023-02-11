import React from 'react'
import style from './style.module.css'

type Props = {
  onClick: () => void
  children: string
}

const UIButton = ({onClick, children}: Props) => {
  return (
    <div className={style.button} onClick={onClick}>
      {children}
    </div>
  )
}

export default UIButton
