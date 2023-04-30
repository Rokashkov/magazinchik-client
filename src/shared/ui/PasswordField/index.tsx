import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { IoAlertCircle, IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { IconButton } from '../IconButton'

interface PasswordFieldProps extends Omit<ComponentProps<'input'>, 'type'> {
	invalid?: boolean
	errorMessage?: string
	supportingText?: string 
}

export const PasswordField = ({
	supportingText, errorMessage, invalid, placeholder,
	onFocus, onBlur, onChange, onMouseEnter, onMouseLeave,
	...otherProps
}: PasswordFieldProps) => {
	const [isFocused, setIsFocused] = useState(false)
	const [value, setValue] = useState('')
	const [isInvalid, setIsInvalid] = useState(invalid)
	const [isHovered, setIsHovered] = useState(false)
	const [isTextVisible, setIsTextVisible] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		setIsInvalid(invalid)
	}, [invalid, errorMessage])
	
	return (
		<div className={ cn(
			styles.container,
			styles[isInvalid && 'invalid'],
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
				type={ isTextVisible ? 'text' : 'password' }
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
					isInvalid && setIsInvalid(false)
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
			{ !isInvalid && isTextVisible && (
				<IconButton
					className={ cn(styles.eye) }
					iconOutline={ IoEyeOffOutline }
					onClick={ () => setIsTextVisible(false)  }
				/>
			) }
			{ !isInvalid && !isTextVisible && (
				<IconButton
					className={ cn(styles.eye) }
					iconOutline={ IoEyeOutline }
					onClick={ () => setIsTextVisible(true)  }
				/>
			) }
			{ isInvalid && <IoAlertCircle className={ cn(styles.warn) }/> }
			{ supportingText && (!errorMessage || !isInvalid) && <div className={ cn(styles.supporting) }>{ supportingText }</div> }
			{ errorMessage && isInvalid && <div className={ cn(styles.supporting, styles.error) }>{ errorMessage }</div> }
		</div>
	)
}