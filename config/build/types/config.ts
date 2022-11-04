export interface BuildOptions {
	mode?: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
	apiUrl: string;
}

export interface BuildPaths {
	html: string;
	entry: string;
	build: string;
	src: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
	apiUrl: string;
}

export type BuildMode = "production" | "development";
