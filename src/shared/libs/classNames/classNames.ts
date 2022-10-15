type Mods = Record<string, boolean | string>;

export const classNames = (className: string, mods?: Mods, additional?: string[]): string => {
	return [
		className,
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([key, _]) => key),
		,
		...additional,
	].join(" ");
};

console.log(classNames("hello", { world: true }, ["worldss"]));
