import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { IoAlertCircle } from 'react-icons/io5'

export interface NumberFieldProps extends Omit<ComponentProps<'input'>, 'type'>{
	invalid?: boolean
	errorMessage?: string
	supportingText?: string
}

export const NumberField = ({
	supportingText, errorMessage, invalid, placeholder,
	defaultValue, className, value,
	onFocus, onBlur, onChange, onMouseEnter, onMouseLeave,
	...otherProps
}: NumberFieldProps) => {
	const [isFocused, setIsFocused] = useState(false)
	const [text, setText] = useState(defaultValue ?? '')
	const [isInvaild, setIsInvaild] = useState(invalid)
	const [isHovered, setIsHovered] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		setIsInvaild(invalid)
	}, [invalid, errorMessage])

	useEffect(() => {
		setText(value)
	}, [value])
	
	return (
		<div className={ cn(
			styles.container,
			styles[isInvaild && 'invalid'],
			styles[isHovered && 'hovered']
		) }
		>
			<input
				ref={ ref }
				onMouseEnter={ (e) => {
					ref.current !== document.activeElement && setIsHovered(true)
					onMouseEnter && onMouseEnter(e)
				} }
				onMouseLeave={ (e) => {
					isHovered && setIsHovered(false)
					onMouseLeave && onMouseLeave(e)
				} }
				onFocus={ (e) => {
					setIsFocused(true)
					isHovered && setIsHovered(false)
					onFocus && onFocus(e)
				} }
				onBlur={ (e) => {
					setIsFocused(false)
					onBlur && onBlur(e)
				} }
				className={ cn(styles.input, className) }
				{ ...otherProps }
				onChange={ (e) => {
					const cleanValue = e.target.value.replace(/\D/, '')
					
					if (Number.isInteger(Number(cleanValue))) {
						if (cleanValue && cleanValue[0] !== '0') {
							e.target.value = cleanValue
							setText(cleanValue)
							onChange && onChange(e)
							isInvaild && setIsInvaild(false)
						} else if (!cleanValue || cleanValue[0] === '0') {
							e.target.value = '1'
							setText('1')
							onChange && onChange(e)
							isInvaild && setIsInvaild(false)
						}
					} else {
						e.preventDefault()
					}
				} }
				value={ text }
			/>
			{ placeholder && (
				<div
					className={ cn(
						styles.placeholder,
						styles[(isFocused || !!value) && 'populated']
					) }
					onMouseEnter={ () => ref.current !== document.activeElement && setIsHovered(true) }
					onMouseLeave={ () => setIsHovered(false) }
				>
					{ placeholder }
				</div>
			) }
			{ isInvaild && <IoAlertCircle className={ cn(styles.warn) }/> }
			{ supportingText && (!errorMessage || !isInvaild) && <div className={ cn(styles.supporting) }>{ supportingText }</div> }
			{ errorMessage && isInvaild && <div className={ cn(styles.supporting, styles.error) }>{ errorMessage }</div> }
		</div>
	)
}