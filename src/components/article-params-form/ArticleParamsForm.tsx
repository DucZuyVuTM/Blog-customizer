import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	defaultArticleState,
	OptionType,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Spacing } from '../spacing';
import { Separator } from '../separator';

interface ArticleParamsFormProps {
	articleState: ArticleStateType;
	onChange: (changedArticleState: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	articleState,
	onChange,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggle = () => {
		setIsOpen(!isOpen);
		console.log(isOpen);
	};

	// Выпадающий список для шрифтов
	const [fontFamilyValue, setFamilyValue] = useState<OptionType>(
		articleState.fontFamilyOption
	);

	// Радиокнопки для размера шрифта
	const [fontSizeValue, setFontSizeValue] = useState<OptionType>(
		articleState.fontSizeOption
	);

	// Выпадоющий список для цвета шрифта
	const [fontColorValue, setFontColorValue] = useState<OptionType>(
		articleState.fontColor
	);

	// Выпадающий список для цвета фона
	const [backgroundColorValue, setBackgroundColorValue] = useState<OptionType>(
		articleState.backgroundColor
	);

	// Выпадающий список для ширины контента
	const [contentWidthValue, setContentWidthValue] = useState<OptionType>(
		articleState.contentWidth
	);

	return (
		<>
			<ArrowButton state={isOpen} onClick={toggle} />
			<aside
				className={clsx(
					styles.container,
					isOpen ? styles.container_open : null
				)}>
				<form className={styles.form}>
					<Text size={31} weight={800} uppercase={true} family='open-sans'>
						Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						selected={fontFamilyValue}
						options={fontFamilyOptions}
						onChange={setFamilyValue}
						title='ШРИФТ'
					/>
					<Spacing size={50} />
					<RadioGroup
						name='font-sizes'
						selected={fontSizeValue}
						options={fontSizeOptions}
						onChange={setFontSizeValue}
						title='РАЗМЕР ШРИФТА'
					/>
					<Spacing size={50} />
					<Select
						selected={fontColorValue}
						unavailable={backgroundColorValue}
						options={fontColors}
						onChange={setFontColorValue}
						title='ЦВЕТ ШРИФТА'
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						selected={backgroundColorValue}
						unavailable={fontColorValue}
						options={backgroundColors}
						onChange={setBackgroundColorValue}
						title='ЦВЕТ ФОНА'
					/>
					<Spacing size={50} />
					<Select
						selected={contentWidthValue}
						options={contentWidthArr}
						onChange={setContentWidthValue}
						title='ШИРИНА КОНТЕНТА'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
								e.preventDefault();
								onChange(defaultArticleState);
							}}
						/>
						<Button
							title='Применить'
							type='button'
							onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
								e.preventDefault();
								onChange({
									fontFamilyOption: fontFamilyValue,
									fontSizeOption: fontSizeValue,
									fontColor: fontColorValue,
									backgroundColor: backgroundColorValue,
									contentWidth: contentWidthValue,
								});
							}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
