export interface BuildOptions {
	mode?: BuildMode;
	paths: {
		html: string;
		entry: string;
		build: string;
		src: string;
	};
	isDev: boolean;
	port: number;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}

export type BuildMode = "production" | "development";
