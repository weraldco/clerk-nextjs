import { UserProfile } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const ProfilePage = async () => {
	const { userId } = await auth();
	const user = await currentUser();
	if (!userId) redirect('/');
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<h1>{user?.username}</h1>
			<UserProfile />
		</div>
	);
};

export default ProfilePage;
