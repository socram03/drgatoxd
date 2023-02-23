import { Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { VscRepo, VscRepoForked } from 'react-icons/vsc';
import type { Repo } from '@drgato/types';

const langColors = {
	JavaScript: 'yellow.500',
	TypeScript: 'blue.500',
	HTML: 'red.500',
	CSS: 'blue.300',
	Shell: 'green.500',
	Python: 'yellow.300',
	Java: 'red.300',
	Plain: 'gray.300'
};

export function RepoCard({ repo, colorMode }: { repo: Repo; colorMode: 'dark' | 'light' }) {
	return (
		<Stack
			h={'full'}
			rounded={'lg'}
			p={3}
			bg={colorMode == 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50'}
			borderBottomWidth={8}
			borderBottomColor={langColors[repo.language as keyof typeof langColors]}
			justify={'space-between'}
			spacing={5}
		>
			<Stack>
				<Heading display={'inline-flex'} gap={1} as={'span'} fontSize={'xl'} fontWeight={'medium'}>
					{repo.fork ? <VscRepoForked /> : <VscRepo />}
					{repo.name}
				</Heading>
				<Text fontSize={'sm'}>
					{/* eslint-disable-next-line quotes */}
					{repo.description || "This repo doesn't have any description available."}
				</Text>
			</Stack>

			<SimpleGrid columns={3}>
				<Stack spacing={0}>
					<Text fontWeight={'bold'}>Stars</Text>
					<Text fontSize={'sm'}>{repo.stargazers_count}</Text>
				</Stack>
				<Stack spacing={0}>
					<Text fontWeight={'bold'}>Forks</Text>
					<Text fontSize={'sm'}>{repo.forks_count}</Text>
				</Stack>
				<Stack spacing={0}>
					<Text fontWeight={'bold'}>Lang</Text>
					<Text fontSize={'sm'} color={langColors[repo.language as keyof typeof langColors]}>
						{repo.language || 'Unknown'}
					</Text>
				</Stack>
			</SimpleGrid>
		</Stack>
	);
}
