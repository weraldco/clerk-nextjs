'use client';

import { useUser } from '@clerk/nextjs';

const ClientPage = () => {
	const { isLoaded, isSignedIn, user } = useUser();
	if (!isSignedIn || !isLoaded) {
		return null;
	}
	return (
		<div>
			<p>Hello, {user.firstName} welcome to Clerk </p>
		</div>
	);
};

export default ClientPage;
