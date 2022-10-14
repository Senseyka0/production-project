export interface BuildOptions {
	mode?: BuildMode;
	paths: {
		html: string;
		entry: string;
		build: string;
	};
	isDev: boolean;
}

export type BuildMode = "production" | "development";
