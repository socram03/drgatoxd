import {
	Button,
	Heading,
	Input,
	Link,
	Menu,
	MenuButton,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
	SimpleGrid,
	Spinner,
	Stack,
	Text,
	useBoolean,
	useColorMode
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Page } from '@drgato/components/Page';
import type { GraphqlRepo } from '../types';
import { RepoCard } from '@drgato/components/Repos';
import { Scale } from '@drgato/components/Transition';
import axios from 'axios';
import links from '@drgato/config/links.json';
import reposName from '@drgato/config/repos.json'

export default function Repos() {
	const sortMethods = {
		asc: (a: GraphqlRepo, b: GraphqlRepo) => a.name.localeCompare(b.name),
		desc: (a: GraphqlRepo, b: GraphqlRepo) => b.name.localeCompare(a.name),
		stars: (a: GraphqlRepo, b: GraphqlRepo) => b.stargazerCount - a.stargazerCount,
		forks: (a: GraphqlRepo, b: GraphqlRepo) => b.forkCount - a.forkCount,
		updated: (a: GraphqlRepo, b: GraphqlRepo) =>
			new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
	};

	const { colorMode } = useColorMode();
	const [repos, setRepos] = useState<GraphqlRepo[]>([]);
	const [search, setSearch] = useState<string>('');
	const [fetching, { on, off }] = useBoolean();
	const [sort, setSort] = useState<keyof typeof sortMethods>('asc');

	useEffect(() => {
		const repos = localStorage.getItem('repos');
		const reposExpiry = localStorage.getItem('repos_expiry');

		if (repos && reposExpiry && new Date().getTime() < parseInt(reposExpiry, 10)) {
			setRepos(JSON.parse(repos));
		} else {
			on();
			const queryAlts: string[] = ['name', 'description', 'url', 'stargazerCount', 'id', 'forkCount', 'primaryLanguage { name }', 'updatedAt'];
			const queries = reposName.map((r, i) => { const [owner, name] = r.split('/'); return `repo${i}: repository(owner: "${owner}", name: "${name}") { ${queryAlts.join(' ')}  }`; })
			const graphqlQuery = `{ ${queries.join(' ')} }`;
			axios
				.post('https://api.github.com/graphql', JSON.stringify({ query: graphqlQuery }), {
					headers: {
						'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
					}
				})
				.then(res => {
					setRepos(res.data.data);
					localStorage.setItem('repos', JSON.stringify(res.data.data));
					localStorage.setItem('repos_expiry', `${new Date().getTime() + 1000 * 60 * 60}`);
				})
				.catch(err => console.error(err))
				.finally(off);
		}
	}, [off, on]);

	return (
		<Page maxW={'container.lg'}>
			<Stack textAlign={{ base: 'center', lg: 'left' }}>
				<Heading
					as={'h1'}
					fontFamily={'"Bebas Neue"'}
					fontWeight={'normal'}
					fontSize={'5xl'}
					lineHeight={'1'}
				>
					Repositories
				</Heading>

				<Text fontSize={'sm'}>
					Check{' '}
					<Link isExternal href={links.github}>
						@socram03
					</Link>{' '}
					on GitHub for more.
				</Text>
			</Stack>

			<Stack direction={'row'}>
				<Input
					variant={'filled'}
					placeholder={'Search for a repository'}
					value={search}
					focusBorderColor={'cashmere.500'}
					onChange={e => setSearch(e.target.value)}
				/>
				<Menu closeOnSelect={false}>
					<MenuButton minW={'max-content'} as={Button} colorScheme={'orange'} variant={'ghost'}>
						Sort
					</MenuButton>
					<MenuList minWidth={'240px'} bg={colorMode == 'dark' ? 'thunder.800' : 'thunder.100'}>
						<MenuOptionGroup
							defaultValue={'asc'}
							title={'Sort'}
							type={'radio'}
							onChange={type => setSort(type as keyof typeof sortMethods)}
						>
							<MenuItemOption
								bg={'transparent'}
								_hover={{ bg: colorMode == 'dark' ? 'thunder.700' : 'thunder.200' }}
								value={'asc'}
							>
								Ascending
							</MenuItemOption>
							<MenuItemOption
								bg={'transparent'}
								_hover={{ bg: colorMode == 'dark' ? 'thunder.700' : 'thunder.200' }}
								value={'desc'}
							>
								Descending
							</MenuItemOption>
							<MenuItemOption
								bg={'transparent'}
								_hover={{ bg: colorMode == 'dark' ? 'thunder.700' : 'thunder.200' }}
								value={'stars'}
							>
								Stars
							</MenuItemOption>
							<MenuItemOption
								bg={'transparent'}
								_hover={{ bg: colorMode == 'dark' ? 'thunder.700' : 'thunder.200' }}
								value={'forks'}
							>
								Forks
							</MenuItemOption>
							<MenuItemOption
								bg={'transparent'}
								_hover={{ bg: colorMode == 'dark' ? 'thunder.700' : 'thunder.200' }}
								value={'updated'}
							>
								Updated
							</MenuItemOption>
						</MenuOptionGroup>
					</MenuList>
				</Menu>
			</Stack>

			<SimpleGrid minChildWidth={'240px'} gap={5}>
				{Object.values(repos)
					.filter(repo => repo.name.toLowerCase().includes(search.toLowerCase()))
					.sort(sortMethods[sort])
					.map((repo, i) => (
						<Scale delay={i * 0.05} in key={repo.id}>
							<RepoCard repo={repo} colorMode={colorMode} />
						</Scale>
					))}
				{fetching && <Spinner />}
				{!repos.length && !fetching && <Text>No repositories found. Please try again later.</Text>}
			</SimpleGrid>
		</Page>
	);
}
