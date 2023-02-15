import React from 'react';
import style from './style.module.css'

type Props = {
	height: number
	isIncoming: boolean
}

const Dash = (props: Props) => {
	const styleCustom = props.isIncoming ? {height: `${props.height * 10}px`, backgroundColor: '#7af5cb'} : {height: `${props.height * 10}px`, backgroundColor: '#dc6080'}

	return (
		<div className={style.dash} style={styleCustom}/>
	);
};

export default Dash;