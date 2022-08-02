import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Text,
	VStack,
	ScaleFade,
	Spinner,
	Tooltip,
	Badge,
	Progress
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '../components/Icon';
import Head from 'next/head';
import Link from 'next/link';
import { langColors } from '../theme';
import { getPercentagesFromArray } from '../lib/functions';

export default function Repos() {
	const [repos, setRepos] = useState<GithubRepository[]>([]);
	const [percents, setPercents] = useState<{ [k: string]: number }>({});

	useEffect(() => {
		axios.get('https://api.github.com/users/drgatoxd/repos').then(({ data }) => {
			axios.get('https://api.github.com/orgs/masternico-bot/repos').then(({ data: mnRepos }) => {
				const repos = data.concat(mnRepos);
				setPercents(
					getPercentagesFromArray(repos.map((r: GithubRepository) => r.language || 'Plain'))
				);
				setRepos(repos);
			});
		});
	});

	return (
		<div>
			<Head>
				<title>Repositories - drgato</title>
				<link rel="icon" href="/cat.png" />
			</Head>
			<Flex flexDir="column" minH="100vh" w="100%" pt="100px" px={5}>
				<Container maxW="container.md">
					<Flex align="center" justify="space-between" flexDir={['column-reverse', 'row']}>
						<Heading fontWeight="black" as="h2">
							My repos
						</Heading>
						<Heading color="gray.400" fontSize="md" fontWeight="semibold" as="a" href="/api/github">
							@drgatoxd
						</Heading>
					</Flex>
					<ScaleFade in>
						<VStack my={4} align="left">
							{Object.keys(percents).map((k, i) => (
								<Flex
									flexDir={['column', 'row']}
									align={['left', 'center']}
									rowGap={2}
									columnGap={5}
									key={i}
								>
									<Text w="100%">
										{k} -{' '}
										<Text color="gray.400" as="span">
											{~~percents[k]}%
										</Text>
									</Text>
									<Progress
										rounded="xl"
										colorScheme={langColors[k as GithubRepository['language']] || 'teal'}
										size="sm"
										w="100%"
										value={percents[k]}
									/>
								</Flex>
							))}
						</VStack>
					</ScaleFade>
					<VStack my={5}>
						{repos.length < 1 && <Spinner size="lg" />}
						{repos
							.sort((a, b) => b.stargazers_count - a.stargazers_count)
							.map((repo, i) => (
								<ScaleFade style={{ width: '100%' }} key={repo.id} in delay={i / 25}>
									<Box p={5} w="100%" borderWidth="1px" rounded="lg">
										<Flex justify="space-between" gap={3} flexDir={['column-reverse', 'row']}>
											<Heading className="link" fontSize="md" fontWeight="semibold" as="h3">
												<Tooltip bg="black" color="white" rounded="xl" label={repo.full_name}>
													{repo.fork ? (
														<span>
															<Icon id="code-fork" type="light" m="Right" />
														</span>
													) : (
														<span>
															<Icon id="book-blank" type="light" m="Right" />
														</span>
													)}
												</Tooltip>
												<Link href={repo.html_url}>{repo.name}</Link>
											</Heading>
											<HStack fontSize="sm" color="gray.400">
												<Text>
													<Icon id="star" type="light" />
													{' ' + repo.stargazers_count.toString()}
												</Text>
												<Text>
													<Icon id="code-fork" type="light" />
													{' ' + repo.forks.toString()}
												</Text>
											</HStack>
										</Flex>
										<Text color="whiteAlpha.600">{repo.description}</Text>
										<Flex mt="2" gap={2} align="center">
											<Badge pt=".15rem" colorScheme={langColors[repo.language] || 'teal'}>
												{repo.language || 'Plain'}
											</Badge>
											<Text fontSize="xs" color="gray.400">
												Updated at {isoDateToCalendarString(repo.updated_at)}
											</Text>
										</Flex>
									</Box>
								</ScaleFade>
							))}
					</VStack>
				</Container>
			</Flex>
		</div>
	);
}

interface GithubRepository {
	owner: { type: 'User' | 'Organization'; login: string };
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	html_url: string;
	description: string;
	fork: boolean;
	url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	homepage: string | null;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: 'TypeScript' | 'JavaScript' | 'CSS'; // que flojera agregar todos los lenguajes xd
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	forks_count: number;
	mirror_url: string | null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: string | null;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: string[];
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
	parent?: {
		id: number;
		node_id: string;
		name: string;
		full_name: string;
		private: boolean;
	};
}

function isoDateToCalendarString(date: string) {
	const d = new Date(date);
	return `${padNum(d.getDate())}/${padNum(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function padNum(num: number) {
	return num < 10 ? '0' + num : num;
}
