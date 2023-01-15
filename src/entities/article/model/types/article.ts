export interface IArticle {
	id: number;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}

export type ArticleType = "IT" | "News" | "Economics" | "Health";

// --Blocks--
export interface ArticleBlockBase {
	id: number;
	type: BlockType;
}

export enum BlockType {
	CODE = "CODE",
	TEXT = "TEXT",
	IMAGE = "IMAGE",
}

export interface ArticleCodeBlock extends ArticleBlockBase {
	code: string;
	type: BlockType.CODE;
}

export interface ArticleTextBlock extends ArticleBlockBase {
	title?: string;
	paragraphs: string[];
	type: BlockType.TEXT;
}

export interface ArticleImageBlock extends ArticleBlockBase {
	src: string;
	type: BlockType.IMAGE;
	title: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;
// --Blocks--
