import {User} from "../types/user";

export const calcDashHeights = (users: User[][]) => {
	return users.map(el => el.length)
}