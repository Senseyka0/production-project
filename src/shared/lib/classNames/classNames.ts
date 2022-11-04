export type Mods = Record<string, boolean | string | undefined | null>;

export const classNames = (
	className: string,
	mods: Mods = {},
	additional: Array<string | undefined> = []
): string => {
	return [
		className,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([key, _]) => key),
	].join(" ");
};
