import React, {useState} from 'react';
import style from './style.module.css'
import PlayButtonIcon from "./PlayButton";
import {useVideoStore} from "../../store/store";

const Video = () => {
	const {videoLink, timeToRewind} = useVideoStore(({videoLink, timeToRewind}) => ({videoLink, timeToRewind}))
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
					src={`${videoLink}?t=${timeToRewind}`}
					allowFullScreen

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