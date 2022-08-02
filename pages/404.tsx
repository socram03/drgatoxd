import { Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Error() {
	const router = useRouter();
	useEffect(() => void setTimeout(() => router.push('/'), 1500), [router]);

	return (
		<Flex gap={5} justify="center" align="center" w="100%" h="100vh">
			<Spinner size="md" /> Redirigiendo...
		</Flex>
	);
}
