import { Flex, Image, Spinner } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Error() {
	const router = useRouter();
	useEffect(() => void setTimeout(() => router.push('/'), 3000), [router]);

	return (
		<div>
			<Head>
				<title>404 - drgato</title>
				<link rel="icon" href="/404-cat.png" />
			</Head>
			<Flex gap={5} flexDir="column" justify="center" align="center" w="100%" h="100vh">
				<Flex align="center" gap={5}>
					<Spinner size="md" /> Oh, you&apos;re lost. Don&apos;t worry, I&apos;ll take you back to
					the home page.
				</Flex>
				<Image minW="280px" maxH="400px" src="/404.jfif" alt="404 cat, from http.cat" />
			</Flex>
		</div>
	);
}
