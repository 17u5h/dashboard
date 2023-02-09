import {create} from "zustand";
import {Interval} from "../types/user";

type UsersState = {
	username: string
	timeStart: string
	timeEnd: string
	intervals: Interval[]
}

const useUsersStore = create<UsersState>((set) => {

})