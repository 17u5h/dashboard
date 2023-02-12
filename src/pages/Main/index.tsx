import React from 'react'
import style from './style.module.css'
import Logo from '../../components/Logo'
import UIButton from '../../components/UI/UIButton'
import FilterByOverallTime from '../../components/FilterUsers/FilterByOverallTime'
import InputExcel from '../../components/InputExcel/InputExcel'
import { useUsersStore, useVideoStore } from '../../store/store'
import { distributeUsersInIntervals } from '../../lib/distributeUsersInIntervals'

const Main = () => {
  const users = useUsersStore((state) => state.users)
  const dispatchIncomers = useUsersStore((state) => state.dispatchIncomers)
  const dispatchVideoEndTime = useVideoStore((state) => state.dispatchVideoEndTime)
  const videoStart = useVideoStore((state) => state.videoStart)

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <Logo />
        <UIButton
          onClick={() => {
            distributeUsersInIntervals(users, dispatchIncomers, dispatchVideoEndTime, videoStart)
          }}
        >
          Какая-то нопка
        </UIButton>
      </header>
      <div className={style.container}>
        <FilterByOverallTime users={users} />
      </div>
      <InputExcel />
    </div>
  )
}

export default Main
