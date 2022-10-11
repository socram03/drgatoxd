import { SlideFade, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ContactCard } from '../components/ContactCard';
import { Footer } from '../components/Footer';
import { Heading1 } from '../components/Headings';
import { PageContainer } from '../components/PageContainer';
import { links } from '../lib/constants';

const ContactPage: NextPage = () => {
	return (
		<PageContainer>
			<Head>
				<title>Contact - drgato.me</title>
			</Head>

			<Heading1>Contact me!</Heading1>
			<Text>
				You can contact me through my different social networks, or by sending me an email.
			</Text>

			<Stack direction={'column'} spacing={5}>
				{links.map((link, i) => (
					<SlideFade key={i} in delay={0.1 + i * 0.1}>
						<ContactCard name={link.name} href={link.href} icon={link.icon} color={link.color} />
					</SlideFade>
				))}
			</Stack>

			<Footer />
		</PageContainer>
	);
};

export default ContactPage;
