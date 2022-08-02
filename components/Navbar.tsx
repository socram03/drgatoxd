import { Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { Skills } from './sections/skills';
import { About } from './sections/about';

export const Navbar = () => {
	const { isOpen: isSkillsOpen, onOpen: onSkillsOpen, onClose: onSkillsClose } = useDisclosure();
	const { isOpen: isAboutOpen, onOpen: onAboutOpen, onClose: onAboutClose } = useDisclosure();

	return (
		<>
			<Flex p={5} zIndex={999} justify="space-around" position="fixed" top={0} w="100%" minH="75px">
				<Heading
					onClick={() => onAboutOpen()}
					className="link link-under"
					fontSize="lg"
					fontWeight="semibold"
					as="span"
				>
					About
				</Heading>
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
