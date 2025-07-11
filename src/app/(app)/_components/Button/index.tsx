import type { ElementType } from 'react';

import Link from 'next/link';
import React from 'react';

import classes from './index.module.scss';

export type Props = {
	appearance?: 'default' | 'primary' | 'secondary' | 'outline';
	className?: string;
	disabled?: boolean;
	el?: 'a' | 'button' | 'link';
	href?: string;
	label?: string;
	newTab?: boolean | null;
	onClick?: () => void;
	type?: 'button' | 'submit';
};

export const Button: React.FC<Props> = ({
	type = 'button',
	appearance,
	className: classNameFromProps,
	disabled,
	el: elFromProps = 'link',
	href,
	label,
	newTab,
	onClick,
}) => {
	let el = elFromProps;
	const newTabProps = newTab
		? { rel: 'noopener noreferrer', target: '_blank' }
		: {};
	const className = [
		classes.button,
		classNameFromProps,
		classes[`appearance--${appearance}`],
		classes.button,
	]
		.filter(Boolean)
		.join(' ');

	const content = (
		<div className={classes.content}>
			{/* <Chevron /> */}
			<span className={classes.label}>{label}</span>
		</div>
	);

	if (onClick || type === 'submit') {
		el = 'button';
	}

	if (el === 'link') {
		return (
			<Link
				className={className}
				href={href || ''}
				{...newTabProps}
				onClick={onClick}
			>
				{content}
			</Link>
		);
	}

	const Element: ElementType = el;

	return (
		<Element
			className={className}
			href={href}
			type={type}
			{...newTabProps}
			disabled={disabled}
			onClick={onClick}
		>
			{content}
		</Element>
	);
};
