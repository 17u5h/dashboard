import {create} from "zustand";
import {User} from "../types/user";
import {UsersState} from "../types/store";


const useUsersStore = create<UsersState>((set) => ({
	users: [],
	dispatchUser: (user: User) => set(state => ({
			users: [
				...state.users,
				user
			]
		}
	))
}))

export default useUsersStore