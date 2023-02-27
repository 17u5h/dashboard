import React, {useState} from 'react';
import style from './style.module.css'
import PlayButtonIcon from "./PlayButton";
import {useVideoStore} from "../../store/store";

const Video = () => {
	const {videoLink} = useVideoStore(({videoLink}) => ({videoLink}))
	const [play, setPlay] = useState(false);

	const playHandler = () => {
		setPlay(true);
	};

	if (play) {
		return (
			<div className={style.container}>
				<iframe
					width="600"
					height="350"
					src={videoLink}
				></iframe>
			</div>
		);
	}

	return (
		<div className={style.container}>
			<div className={style.imageWrapper} onClick={playHandler}>
				<div className={style.playButton} >
					<PlayButtonIcon />
				</div>
			</div>
		</div>
	);
};

export default Video;