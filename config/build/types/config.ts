export interface BuildOptions {
	mode?: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
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
}

export type BuildMode = "production" | "development";
