import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	const { userId } = auth();
	return (
		<div className="flex flex-1 flex-row justify-between px-4 py-4 bg-slate-950 text-white">
			<Link
				href="/"
				className="font-bold text-2xl text-green-500 hover:text-green-400 duration-200 "
			>
				Logo
			</Link>
			<div className="flex gap-4">
				<Link
					className="px-4 py-2 rounded-full hover:bg-gray-700 duration-200"
					href="/client"
				>
					Client Page
				</Link>
			</div>
			<div className="flex flex-row gap-4 items-center text-sm">
				{!userId ? (
					<>
						<Link href="/sign-in">Login</Link>
						<Link href="/sign-up">Sign up</Link>
					</>
				) : (
					<>
						<Link href="/profile">Profile</Link>
						<UserButton />
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
