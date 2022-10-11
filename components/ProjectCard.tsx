import {
	Button,
	Flex,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react';
import { Project } from '../typings/interfaces';
import { LanguageIcon } from './LanguageIcon';

export const ProjectCard = ({ project }: { project: Project }) => {
	const { colorMode } = useColorMode();
	const { onOpen, onClose, isOpen } = useDisclosure();

	return (
		<>
			<Stack
				role={'button'}
				onClick={onOpen}
				_hover={{
					bg: colorMode == 'dark' ? 'gray.700' : 'gray.100'
				}}
				minW={'240px'}
				minH={'100px'}
				p={5}
				bg={colorMode == 'dark' ? 'gray.800' : 'gray.50'}
				transition={'.2s cubic-bezier(0.08, 0.52, 0.52, 1)'}
				rounded={'xl'}
				direction={'row'}
				align={'center'}
				spacing={5}
			>
				<Flex
					align={'center'}
					justify={'center'}
					rounded={'xl'}
					w={'52px'}
					h={'52px'}
					bg={colorMode == 'dark' ? 'gray.700' : 'gray.50'}
					color={'white'}
					p={2}
				>
					<Image
						rounded={project.imageRound ? '2xl' : undefined}
						w={'64px'}
						src={project.image}
						alt={project.name}
					/>
				</Flex>
				<Stack direction={'column'} spacing={0} maxW={'65%'}>
					<Heading as={'span'} fontSize={'lg'}>
						{project.name}
					</Heading>
					<Text fontSize={'md'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>
						{project.description}
					</Text>
				</Stack>
			</Stack>
			<ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export const ProjectModal = ({
	project,
	isOpen,
	onClose
}: {
	project: Project;
	isOpen: boolean;
	onClose: () => void;
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered size={['full', 'lg', 'xl', '4xl']}>
			<ModalOverlay bg="blackAlpha.500" />
			<ModalContent bg={useColorModeValue('#fff', 'gray.800')}>
				<ModalHeader gap={3} display={'flex'} alignItems={'center'}>
					<Image
						rounded={project.imageRound ? 'lg' : undefined}
						w={'32px'}
						alt={project.name}
						src={project.image}
					/>
					<Heading as={'span'} fontSize={'xl'}>
						{project.name}
					</Heading>
				</ModalHeader>
				<ModalCloseButton />

				<ModalBody display={'flex'} flexDir={'column'} gap={5} fontSize={'md'}>
					<Text>{project.longDescription || project.description}</Text>
					<Text>
						I am{' '}
						{project.role == 'Owner' ? (
							<>
								<Text as={'span'} color={'orange.500'}>
									the owner
								</Text>{' '}
								of
							</>
						) : (
							<>
								<Text as={'span'} color={'orange.500'}>
									an contributor
								</Text>{' '}
								on
							</>
						)}{' '}
						this project.
					</Text>
					<Stack direction={'column'}>
						<Heading fontSize={'xl'} as={'h3'}>
							Technologies
						</Heading>
						<Stack flexWrap={'wrap'} direction={'row'} spacing={0} gap={5}>
							{project.technologies.map(tech => (
								<LanguageIcon size={'9'} key={tech.id} name={tech.name} id={tech.id} />
							))}
						</Stack>
					</Stack>
				</ModalBody>

				<ModalFooter fontSize={'md'} borderTopWidth={'1px'} mt={5} justifyContent={'start'} gap={3}>
					Links:
					{project.links.map(link => (
						<Button
							fontSize={'sm'}
							variant={'link'}
							as={'a'}
							href={link.href}
							key={link.name}
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							{link.name}
						</Button>
					))}
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
