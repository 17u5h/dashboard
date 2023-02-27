import React from 'react';
import style from './style.module.css'
import {useVideoStore} from "../../store/store";


const InputVideo = () => {
	const {dispatchVideoLink} = useVideoStore(({dispatchVideoLink}) => ({dispatchVideoLink}))

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const link = event.target.value.replace('watch?v=', 'embed/').trim()
		dispatchVideoLink(link)
	}

	return (
		<div className={style.inputContainer}>
			<input className={style.inputVideo} placeholder='Вставьте ссылку youtube (не обязательно)' onChange={inputHandler}/>
			<button className={style.inputButton}>Прикрепить</button>
		</div>
	);
};

export default InputVideo;