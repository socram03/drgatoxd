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
import { skillStats } from '../../skills';

export const Skills = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	return (
		<Drawer isOpen={isOpen} onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent bg="#121212">
				<DrawerHeader>🤯 My Skills</DrawerHeader>
				<DrawerCloseButton />
				<DrawerBody display={'flex'} flexDir="column" gap={5}>
					<Text color="gray.300">
						I have a passion for learning new things and I am always looking for new ways to improve
						my skills.
					</Text>
					<List
						display="flex"
						gap={5}
						flexDir="column"
						borderLeft="2px solid #dadfe9"
						pl={2}
						pt={2}
					>
						{/** @ts-ignore */}
						{Object.keys(skillStats).map((skill: keyof typeof skillStats) => (
							<ListItem className="skill-hover" display="flex" alignItems="center" key={skill}>
								<GitIcon />
								<span>
									{skill}{' '}
									<Text as={'span'} color="gray.400">
										- {skillStats[skill]}%
									</Text>
								</span>
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
