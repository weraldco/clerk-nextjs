import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="flex flex-1 flex-col justify-center items-center h-full">
			<SignUp />
		</div>
	);
}
