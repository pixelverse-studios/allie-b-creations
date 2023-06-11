import { FieldInputProps } from '../../utils/types/components/form'

export const setColor = (
    field: FieldInputProps
): 'primary' | 'error' | 'success' => {
    if (field.value === '' && field.error === '') {
        return 'primary'
    }

    if (field.error) {
        return 'error'
    }

    if (field.value && !field.error) {
        return 'primary'
    }

    return 'primary'
}
