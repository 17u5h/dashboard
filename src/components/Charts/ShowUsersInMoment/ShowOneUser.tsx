import React, {useState} from 'react';
import style from './style.module.css'
import {User} from "../../../types/user";
import secToOutputTimeConverter from "../../../lib/secToOutputTimeConverter";

type Props = {
	className: string
	el: User
}

const ShowOneUser = ({className, el}: Props) => {
	const [showDetails, setShowDetails] = useState<boolean>(false)

	return (
		<div className={className} onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
			<div>{el.username},</div>
			<div>провел: {secToOutputTimeConverter(el.intervals[0].till - el.intervals[0].from)}</div>
			{showDetails && <div className={style.details}>{el.email} {el.tel} {el.IP}</div>}
		</div>
	);
};

export default ShowOneUser;