import React from 'react'
import style from './style.module.css'

type Props = {
  onClick: () => void
  children: string
}

const UIButton = (props: Props) => {
  return (
    <div className={style.button} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default UIButton
