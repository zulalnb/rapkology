export interface BlogPost {
	_id: string;
	user_id: string;
	type: string;
	attributes: {
		trends: boolean;
		category: string[];
		tags: string[];
		authors: string[];
		title: string;
		slug: string;
		content: string;
		desc: string;
		img: string;
		seo: {
			metaTitle: string;
			canonicalURL: string;
			metaDescription: string;
		};
	};
	lang: string;
	createdAt: string;
	updatedAt: string;
}

export interface PaginationInfo {
	page: number;
	limit: number;
	total: number;
	totalPages: number;
	hasPrev: boolean;
	hasNext: boolean;
}

export interface ApiResponse {
	data: BlogPost[];
	pagination: PaginationInfo;
}
