/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { connect } from '@/db';
import User from '@/modals/user.modal';

export async function createUser(user: any) {
	try {
		//Connect to the db first
		await connect();

		const newUser = await User.create(user);
		return JSON.parse(JSON.stringify(newUser));
	} catch (error) {
		console.error(error);
	}
}
