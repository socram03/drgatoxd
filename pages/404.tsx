import { Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Heading1 } from '../components/Headings';
import { PageContainer } from '../components/PageContainer';

const NotFound: NextPage = () => {
	return (
		<PageContainer>
			<Heading1>Coming soon...</Heading1>
			<Text>This page is not available yet, but it probably will be soon!</Text>
		</PageContainer>
	);
};

export default NotFound;
