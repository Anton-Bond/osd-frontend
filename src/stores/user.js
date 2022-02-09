import { writable } from "svelte/store";

export const user = writable(null);

export const checkAuthStatus = async () => {
	const error = !sessionStorage.getItem('token');

	return await new Promise((res, rej) => setTimeout(error ? rej : res({ name: 'JD'}), 1000));
};
