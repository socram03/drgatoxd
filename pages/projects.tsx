import { SlideFade, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Heading1 } from '../components/Headings';
import { PageContainer } from '../components/PageContainer';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../lib/constants';

const ProjectsPage: NextPage = () => {
	return (
		<PageContainer>
			<Head>
				<title>Projects - drgato.me</title>
			</Head>

			<Heading1>Projects</Heading1>
			<Text>This is a list of projects I&apos;ve worked on.</Text>

			{/** Project List */}
			<Stack direction={'column'} spacing={5}>
				{projects.map((pr, i) => (
					<SlideFade in delay={i * 0.1 * 0.2} key={i}>
						<ProjectCard project={pr} />
					</SlideFade>
				))}
			</Stack>
			<Footer />
		</PageContainer>
	);
};

export default ProjectsPage;
