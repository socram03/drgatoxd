import { ScaleFade, Tag, Text } from '@chakra-ui/react';
import { capitalize } from '../lib/util';
import { UserStatus } from '../typings/interfaces';
import { Icon } from './Icon';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Tags({ status }: { status: UserStatus }) {
	const [track, setTrack] = useState<string | null>(null);

	useEffect(() => {
		axios.get('/api/now-playing').then(res => {
			setTrack(res.data.name);
			console.log(res.data);
		});
	}, []);

	return (
		<>
			{[
				<Tag key={1} py={1} px={2} bg={'#5865F2'}>
					<Icon id={'discord'} v={'b'} s={'1rem'} c={'white'} pr={'3px'} pt={'1px'} />
					<Text color={'white'} fontSize={'md'}>
						{status.status == 'dnd' ? 'dnd' : capitalize(status.status)}
					</Text>
				</Tag>,
				<Tag key={2} py={1} px={2} bg={'purple.600'}>
					<Icon id={'table-list'} v={'l'} s={'1rem'} c={'white'} pr={'3px'} pt={'1px'} />
					<Text color={'white'} fontSize={'md'}>
						{status.playing || 'Not playing'}
					</Text>
				</Tag>,
				<Tag key={3} py={1} px={2} bg={'cyan.300'}>
					<Icon id={'code'} v={'r'} s={'1rem'} c={'black'} pr={'3px'} pt={'1px'} />
					<Text color={'black'} fontSize={'md'}>
						{status.vscode || 'Not coding'}
					</Text>
				</Tag>,
				<Tag key={4} py={1} px={2} bg={'#57F287'}>
					<Icon id={'spotify'} v={'b'} s={'1rem'} c={'black'} pr={'3px'} pt={'1px'} />
					<Text color={'black'} fontSize={'md'}>
						{track || 'No music'}
					</Text>
				</Tag>
			].map((badge, i) => (
				<ScaleFade in key={i} delay={0.3 + i * 0.05}>
					{badge}
				</ScaleFade>
			))}
		</>
	);
}
