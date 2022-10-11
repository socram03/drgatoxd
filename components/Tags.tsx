import { ScaleFade, Tag, Text } from '@chakra-ui/react';
import { capitalize } from '../lib/util';
import { UserStatus } from '../typings/interfaces';
import { Icon } from './Icon';

export function Tags({ status }: { status: UserStatus }) {
	const badges = [
		<Tag key={1} py={1} px={2} bg={'#5865F2'}>
			<Icon id={'discord'} v={'b'} s={'1rem'} c={'white'} pr={'3px'} pt={'1px'} />
			<Text color={'white'} fontSize={'md'}>
				{status.status == 'dnd' ? 'DND' : capitalize(status.status)}
			</Text>
		</Tag>,
		<Tag key={2} py={1} px={2} bg={'purple.600'}>
			<Icon id={'table-list'} v={'l'} s={'1rem'} c={'white'} pr={'3px'} pt={'1px'} />
			<Text color={'white'} fontSize={'md'}>
				{status.playing || 'No game'}
			</Text>
		</Tag>,
		<Tag key={3} py={1} px={2} bg={'cyan.300'}>
			<Icon id={'code'} v={'r'} s={'1rem'} c={'black'} pr={'3px'} pt={'1px'} />
			<Text color={'black'} fontSize={'md'}>
				{status.vscode || 'No coding'}
			</Text>
		</Tag>,
		<Tag key={4} py={1} px={2} bg={'#57F287'}>
			<Icon id={'spotify'} v={'b'} s={'1rem'} c={'black'} pr={'3px'} pt={'1px'} />
			<Text color={'black'} fontSize={'md'}>
				{status.spotify || 'No music'}
			</Text>
		</Tag>
	];

	return (
		<>
			{badges.map((badge, i) => (
				<ScaleFade in key={i} delay={0.3 + i * 0.05}>
					{badge}
				</ScaleFade>
			))}
		</>
	);
}
