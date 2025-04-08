import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { ClickProvider } from 'src/contexts/click/ClickProvider';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	defaultArticleState,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Spacing } from '../spacing';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggle = () => {
		setIsOpen(!isOpen);
		console.log(isOpen);
	};

	// Выпадающий список для шрифтов
	const [familyValue, setFamilyValue] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);

	// Радиокнопки для размера шрифта
	const [fontSizeValue, setFontSizeValue] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);

	// Выпадоющий список для цвета шрифта
	const [fontColorValue, setFontColorValue] = useState<OptionType>(
		defaultArticleState.fontColor
	);

	return (
		<>
			<ClickProvider state={isOpen} onClick={toggle}>
				<ArrowButton />
			</ClickProvider>
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
						selected={familyValue}
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
						options={fontColors}
						onChange={setFontColorValue}
						title='ЦВЕТ ШРИФТА'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
