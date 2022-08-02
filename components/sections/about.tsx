import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	List,
	ListItem,
	Text
} from '@chakra-ui/react';
import { GitIcon } from '../Icon';
import { socials } from '../../socials';
import { capitalize } from '../../pages';

export const About = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	return (
		<Drawer isOpen={isOpen} onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent bg="#121212">
				<DrawerHeader>👋 About Me</DrawerHeader>
				<DrawerCloseButton />
				<DrawerBody display={'flex'} flexDir="column" gap={5}>
					<Text color="gray.300">
						Hi, I&apos;m Mathías Gómez (aka drgato), an average developer from Peru.
					</Text>
					<Text color="gray.300">
						I started learning to code in 2020 creating Discord bots with Node.
					</Text>
					<Text color="gray.300">
						I&apos;m currently learning new frameworks and languages like TypeScript, React, and
						Next.js.
					</Text>
					<Text color="gray.300">Do you wanna know more about me? You can find me on:</Text>
					<List
						display="flex"
						gap={5}
						flexDir="column"
						borderLeft="2px solid #dadfe9"
						pl={2}
						pt={2}
					>
						{socials.map(([id, href], i) => (
							<ListItem key={i} className="skill-hover" display="flex" alignItems="center">
								<GitIcon />
								<a target="_blank" rel="noreferrer" href={href}>
									<span className="link">{capitalize(id)}</span>
								</a>
							</ListItem>
						))}
					</List>
				</DrawerBody>
				<DrawerFooter>
					<Button mr={3} onClick={onClose}>
						Close
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
