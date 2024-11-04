import Image from 'next/image';

export default function LoadingState() {
	return (
		<div className="flex h-screen justify-center items-center">
			<Image
				src="/logo.svg"
				alt="logo"
				width={120}
				height={120}
				priority
				className="animate-pulse duration-700"
			/>
		</div>
	);
}
