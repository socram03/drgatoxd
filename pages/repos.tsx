import { Flex, Input, ScaleFade, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Heading1 } from '../components/Headings';
import { PageContainer } from '../components/PageContainer';
import { GithubRepository } from '../typings/interfaces';

const About: NextPage = () => {
	const [repos, setRepos] = useState<GithubRepository[]>([]);
	const [query, search] = useState<string>('');

	// hehe i forgot to change function name
	const loadCat = () => {
		axios
			.get('https://api.github.com/users/drgatoxd/repos')
			.then(({ data }) => {
				setRepos(data);
			})
			.catch(() => undefined);
	};

	useEffect(() => {
		if (repos.length) return;
		loadCat();
	}, [repos]);

	return (
		<PageContainer>
			{/** Title */}
			<Heading1>My repos</Heading1>
			<Text as={'p'} fontSize={'lg'} maxW={'860px'}>
				Do you want to see my GitHub profile?{' '}
				<Text
					fontWeight={600}
					color={'orange.500'}
					target={'_blank'}
					rel={'noopener noreferrer'}
					as={'a'}
					href={'https://github.com/drgatoxd'}
				>
					Click here.
				</Text>
			</Text>

			{/** Repos Grid */}
			<Flex flexDir={'column'} gap={5}>
				<Input
					placeholder={
						repos.length ? `Try ${repos[~~(Math.random() * repos.length)]?.full_name}` : 'Search...'
					}
					value={query}
					onChange={e => search(e.target.value.toLowerCase())}
					variant={'unstyled'}
					p={2}
					transition={'.2s ease'}
					_focus={{
						borderColor: 'purple.500 !important'
					}}
					border={'2px solid var(--chakra-colors-gray-500) !important'}
				/>
				<SimpleGrid minChildWidth={'240px'} gap={5}>
					{!repos.length && (
						<Flex justify={'center'} gap={5}>
							<Spinner /> Loading cool stuff...
						</Flex>
					)}
					{!repos.filter(r => r.full_name.includes(query.toLowerCase())).length && query && (
						<Text>No results.</Text>
					)}
					{repos
						.filter(r => r.full_name.includes(query.toLowerCase()))
						.sort((a, b) => b.stargazers_count - a.stargazers_count)
						.map((repo, i) => (
							<ScaleFade key={repo.id} in delay={0.1 + i * 0.02}>
								<Card repo={repo} />
							</ScaleFade>
						))}
				</SimpleGrid>
			</Flex>

			{/** The footer */}
			<Footer />
		</PageContainer>
	);
};

export default About;
