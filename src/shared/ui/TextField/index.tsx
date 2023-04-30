import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { IoAlertCircle } from 'react-icons/io5'

interface TextFieldProps extends ComponentProps<'input'> {
	invalid?: boolean
	errorMessage?: string
	supportingText?: string 
}

export const TextField = ({
	supportingText, errorMessage, invalid, type, placeholder,
	onFocus, onBlur, onChange, onMouseEnter, onMouseLeave,
	...otherProps
}: TextFieldProps) => {
	const [isFocused, setIsFocused] = useState(false)
	const [value, setValue] = useState('')
	const [isInvaild, setIsInvaild] = useState(invalid)
	const [isHovered, setIsHovered] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		setIsInvaild(invalid)
	}, [invalid, errorMessage])
	
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
				type={ type ?? 'text' }
				onFocus={ (e) => {
					setIsFocused(true)
					isHovered && setIsHovered(false)
					onFocus && onFocus(e)
				} }
				onBlur={ (e) => {
					setIsFocused(false)
					onBlur && onBlur(e)
				} }
				className={ cn(styles.input) }
				{ ...otherProps }
				onChange={ (e) => {
					setValue(e.currentTarget.value)
					onChange && onChange(e)
					isInvaild && setIsInvaild(false)
				} }
				value={ value }
			/>
			<div
				className={ cn(
					styles.placeholder,
					styles[(isFocused || !!value) && 'populated']
				) }
				onMouseEnter={ () => ref.current !== document.activeElement && setIsHovered(true) }
				onMouseLeave={ () => setIsHovered(false) }
			>
				{ placeholder ?? 'Label Text' }
			</div>
			{ isInvaild && <IoAlertCircle className={ cn(styles.warn) }/> }
			{ supportingText && (!errorMessage || !isInvaild) && <div className={ cn(styles.supporting) }>{ supportingText }</div> }
			{ errorMessage && isInvaild && <div className={ cn(styles.supporting, styles.error) }>{ errorMessage }</div> }
		</div>
	)
}