import { Flex, Heading, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { GithubRepository } from '../typings/interfaces';
import { Icon } from './Icon';

export function Card({ repo }: { repo: GithubRepository }) {
	return (
		<Flex
			transition={'all .1s ease-out'}
			role={'button'}
			gap={3}
			flexDir={'column'}
			bg={useColorModeValue('gray.50', 'gray.800')}
			_hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
			p={3}
			rounded={'lg'}
			as={'a'}
			href={repo.html_url}
			target={'_blank'}
			rel={'noopener noreferrer'}
		>
			<Heading fontSize={'md'} fontWeight={500} _hover={{ textDecoration: 'underline' }}>
				<Icon id={'book-blank'} v={'r'} m={'Right'} />
				{repo.name}
			</Heading>
			<HStack spacing={5}>
				<Text fontSize={'sm'} as={'span'}>
					<Icon id={'star'} v={'s'} pr={'5px'} s={'var(--chakra-fontSizes-xs)'} />
					{repo.stargazers_count}
				</Text>
				<Text fontSize={'sm'} as={'span'}>
					<Icon id={'code-fork'} v={'s'} pr={'5px'} s={'var(--chakra-fontSizes-xs)'} />
					{repo.forks}
				</Text>
			</HStack>
		</Flex>
	);
}
