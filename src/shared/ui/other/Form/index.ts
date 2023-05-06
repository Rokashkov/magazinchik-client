import { Container } from './Container'
import { FieldGroup } from './FieldGroup'
import { SubmitButton } from './SubmitButton'

type FormType = typeof Container & {
	FieldGroup: typeof FieldGroup,
	SubmitButton: typeof SubmitButton
}

const Form = Container as FormType
Form.FieldGroup = FieldGroup
Form.SubmitButton = SubmitButton

export type { ContainerProps as FormProps } from './Container'
export default Form