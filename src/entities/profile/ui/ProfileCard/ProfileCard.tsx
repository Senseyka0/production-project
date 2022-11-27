import { useTranslation } from "react-i18next";

import { Currency, CurrencySelect } from "entities/currency";
import { Country, CountrySelect } from "entities/country";
import { City, CitySelect } from "entities/city";
import { classNames, Mods } from "shared/lib/classNames";
import { Avatar } from "shared/ui/Avatar";
import { Error } from "shared/ui/Error";
import { Input } from "shared/ui/Input";
import { Loader } from "shared/ui/Loader";

import { IProfile } from "../../model/types/profile";

import cls from "./ProfileCard.module.scss";

export const ProfileCard = (props: Props) => {
	const {
		className,
		data,
		error,
		isLoading,
		isReadonly,
		onChangeFirstName,
		onChangeLastName,
		onChangeAge,
		onChangeCountry,
		onChangeCity,
		onChangeUsername,
		onChangeCurrency,
	} = props;

	const { t } = useTranslation("profile");

	if (isLoading) {
		return (
			<div className={classNames(cls.wrapper, {}, [className, cls.loading])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.wrapper, {}, [className, cls.error])}>
				<Error>{error}</Error>
			</div>
		);
	}

	const mods: Mods = {
		[cls.editing]: !isReadonly,
	};

	return (
		<div className={classNames(cls.wrapper, mods, [className])}>
			{data?.avatar && (
				<div>
					<Avatar src={data.avatar} size={200} />
				</div>
			)}

			<div className={cls["data-wrapper"]}>
				<div className={cls["input-block"]}>
					<Input
						value={data?.firstName}
						label={t("Your First name")}
						placeholder={t("Your First name")}
						onChange={onChangeFirstName}
						readOnly={isReadonly}
						className={cls.input}
					/>

					<Input
						value={data?.lastName}
						label={t("Your Last name")}
						placeholder={t("Your Last name")}
						onChange={onChangeLastName}
						readOnly={isReadonly}
						className={cls.input}
					/>
				</div>

				<Input
					value={data?.age}
					label={t("Your Age")}
					placeholder={t("Your Age")}
					onChange={onChangeAge}
					readOnly={isReadonly}
					type="number"
					className={cls.input}
				/>

				<Input
					value={data?.username}
					label={t("Your Username")}
					placeholder={t("Your Username")}
					onChange={onChangeUsername}
					readOnly={isReadonly}
					className={cls.input}
				/>

				<div className={cls["input-block"]}>
					<CountrySelect
						onChange={onChangeCountry}
						value={data?.country}
						isReadonly={isReadonly}
						className={cls.input}
						label={t("Your Country")}
						placeholder={t("Your Country")}
					/>

					<CitySelect
						value={data?.city}
						label={t("Your City")}
						placeholder={t("Your City")}
						onChange={onChangeCity}
						isReadonly={isReadonly}
						className={cls.input}
					/>
				</div>

				<CurrencySelect
					onChange={onChangeCurrency}
					value={data?.currency}
					isReadonly={isReadonly}
					className={cls.input}
					label={t("Your Currency")}
					placeholder={t("Your Currency")}
				/>
			</div>
		</div>
	);
};

interface Props {
	className?: string;
	data?: IProfile;
	isLoading?: boolean;
	error?: string;
	isReadonly?: boolean;
	onChangeFirstName: (value?: string) => void;
	onChangeLastName: (value?: string) => void;
	onChangeAge: (value?: string) => void;
	onChangeCountry: (value?: Country) => void;
	onChangeCity: (value?: City) => void;
	onChangeUsername: (value?: string) => void;
	onChangeCurrency: (value?: Currency) => void;
}
