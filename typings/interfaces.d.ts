export interface GithubRepository {
	owner: { type: 'User' | 'Organization'; login: string };
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	html_url: string;
	description: string;
	fork: boolean;
	url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	homepage: string | null;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: 'TypeScript' | 'JavaScript' | 'CSS'; // que flojera agregar todos los lenguajes xd
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	forks_count: number;
	mirror_url: string | null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: string | null;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: string[];
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
	parent?: {
		id: number;
		node_id: string;
		name: string;
		full_name: string;
		private: boolean;
	};
}

export interface UserStatus {
	status: 'online' | 'offline' | 'dnd' | 'idle';
	playing?: string;
	vscode?: string;
	spotify?: string;
}

export interface Project {
	name: string;
	description: string;
	longDescription?: string;
	role: 'Owner' | 'Contributor';
	image: string;
	imageRound?: boolean;
	links: Array<{
		name: string;
		href: string;
	}>;
	technologies: Array<{
		name: string;
		id: string;
	}>;
}
