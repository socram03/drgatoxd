import { Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { Skills } from './sections/skills';
import { About } from './sections/about';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
	const { isOpen: isSkillsOpen, onOpen: onSkillsOpen, onClose: onSkillsClose } = useDisclosure();
	const { isOpen: isAboutOpen, onOpen: onAboutOpen, onClose: onAboutClose } = useDisclosure();
	const router = useRouter();

	return (
		<>
			<Flex
				borderBottomWidth="1px"
				backdropFilter="blur(10px)"
				p={5}
				zIndex={999}
				justify="space-around"
				align="center"
				position="fixed"
				top={0}
				w="100%"
				minH="60px"
			>
				<Heading
					onClick={() => onAboutOpen()}
					className="link link-under"
					fontSize="lg"
					fontWeight="semibold"
					as="span"
				>
					About
				</Heading>
				<Link href={router.pathname == '/' ? '/repos' : '/'}>
					<Heading className="link link-under" fontSize="lg" fontWeight="semibold" as="span">
						{router.pathname == '/' ? 'Repos' : 'Home'}
					</Heading>
				</Link>
				<Heading
					onClick={() => onSkillsOpen()}
					className="link link-under"
					fontSize="lg"
					fontWeight="semibold"
					as="span"
				>
					Skills
				</Heading>
			</Flex>
			<Skills isOpen={isSkillsOpen} onClose={onSkillsClose} />
			<About isOpen={isAboutOpen} onClose={onAboutClose} />
		</>
	);
};
