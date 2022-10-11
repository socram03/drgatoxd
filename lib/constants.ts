import { Project } from '../typings/interfaces';

export const links = [
	{
		name: 'Discord',
		href: 'https://discord.gg/Z4wj6gYyvE',
		icon: 'discord',
		color: '#5865F2'
	},
	{
		name: 'GitHub',
		href: 'https://github.com/drgatoxd',
		icon: 'github',
		color: '#333'
	},
	{
		name: 'YouTube',
		href: 'https://www.youtube.com/channel/UCHY3_scfbXSPc5B9SLgqPKQ',
		icon: 'youtube',
		color: '#eb4034'
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/drgato_785/',
		icon: 'instagram',
		color: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);'
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/drgatoxd',
		icon: 'twitter',
		color: '#1DA1F2'
	}
];

export const navlinks = [
	{
		name: 'About',
		href: '/about'
	},
	{
		name: 'Projects',
		href: '/projects'
	},
	{
		name: 'Repos',
		href: '/repos'
	},
	{
		name: 'Contact',
		href: '/contact'
	}
];

export const skills = [
	{
		name: 'HTML',
		icon: 'html'
	},
	{
		name: 'CSS',
		icon: 'css'
	},
	{
		name: 'Sass',
		icon: 'sass'
	},
	{
		name: 'JavaScript',
		icon: 'js'
	},
	{
		name: 'CoffeeScript',
		icon: 'coffeescript'
	},
	{
		name: 'TypeScript',
		icon: 'ts'
	},
	{
		name: 'MongoDB',
		icon: 'mongo'
	},
	{
		name: 'NodeJS',
		icon: 'nodejs'
	},
	{
		name: 'React',
		icon: 'react'
	},
	{
		name: 'Next.js',
		icon: 'nextjs'
	},
	{
		name: 'Express.js',
		icon: 'express'
	},
	{
		name: 'Pug/Jade',
		icon: 'pug'
	},
	{
		name: 'Git',
		icon: 'git'
	}
];

export const hometags = [
	'🧠 Learning Next.js and React.',
	'🇵🇪 I want a .pe domain.',
	'📺 Ocasional streamer on YouTube.',
	'🧑‍💻 Programming Meong, a Discord bot.',
	'🌙 Loving dark mode since 2019.'
];

export const projects: Project[] = [
	{
		name: 'Meong',
		description: 'A music Discord bot made with discord.js and TypeScript.',
		longDescription:
			'Meong is a powerful music bot made with discord.js, TypeScript and Lavalink server. It has a lot of features like music, moderation, fun, and more.',
		role: 'Owner',
		image:
			'https://cdn.discordapp.com/avatars/960194722947813386/0f15c6f78f04e2776d6f7b81b064f3a2.png?size=4096',
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/drgatoxd/meong-bot/'
			},
			{
				name: 'Invite',
				href: 'https://discord.com/oauth2/authorize?client_id=960194722947813386&scope=bot+applications.commands&permissions=8'
			}
		],
		technologies: [
			{
				name: 'TypeScript',
				id: 'ts'
			},
			{
				name: 'Discord.js',
				id: 'discord'
			},
			{
				name: 'MongoDB',
				id: 'mongo'
			},
			{
				name: 'NodeJS',
				id: 'nodejs'
			},
			{
				name: 'Azure',
				id: 'azure'
			}
		]
	},
	{
		name: 'Master Nico',
		description: 'A multipurpose Discord bot made with discord.js.',
		longDescription:
			'Master Nico will give your users the best experience with the features you need: autoroles, giveaways, welcome, Twitch alerts, fun and much more.',
		role: 'Contributor',
		image:
			'https://cdn.discordapp.com/avatars/928357222617055372/4c0d2d97be9b3048f0b26cf0e45a42fb.png?size=4096',
		imageRound: true,
		links: [
			{
				name: 'Website',
				href: 'https://masternico.tk/'
			},
			{
				name: 'Invite',
				href: 'https://discord.com/oauth2/authorize?client_id=960194722947813386&scope=bot+applications.commands&permissions=8'
			}
		],
		technologies: [
			{
				name: 'JavaScript',
				id: 'js'
			},
			{
				name: 'Discord.js',
				id: 'discord'
			},
			{
				name: 'MongoDB',
				id: 'mongo'
			},
			{
				name: 'NodeJS',
				id: 'nodejs'
			},
			{
				name: 'React',
				id: 'react'
			},
			{
				name: 'Next.js',
				id: 'nextjs'
			},
			{
				name: 'Vercel',
				id: 'vercel'
			}
		]
	},
	{
		name: 'PubertLand Botlist',
		description: 'A Discord bot list made with Next.js and TypeScript.',
		longDescription: 'The best Discord bot list where you can find the best bots for your server.',
		role: 'Owner',
		image: 'https://images.emojiterra.com/google/android-10/512px/1f431.png',
		links: [
			{
				name: 'Website',
				href: 'https://pubertland.tech/'
			},
			{
				name: 'GitHub',
				href: 'https://github.com/drgatoxd/pbl-code/'
			}
		],
		technologies: [
			{
				name: 'TypeScript',
				id: 'ts'
			},
			{
				name: 'Next.js',
				id: 'nextjs'
			},
			{
				name: 'React',
				id: 'react'
			},
			{
				name: 'MongoDB',
				id: 'mongo'
			}
		]
	}
];
