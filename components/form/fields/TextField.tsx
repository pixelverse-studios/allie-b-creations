import {
    TextField as MuiTextField,
    FormControl,
    FormHelperText
} from '@mui/material'

import { setColor } from '../utilities'
import { TextFieldProps } from '@/utils/types/components/form'

const CHARACTER_COUNT = 600
const TextField = ({ id, label, type, onChange, field }: TextFieldProps) => {
    const isTextArea = type === 'textarea'
    return (
        <FormControl color={setColor(field)} error={Boolean(field.error)}>
            <MuiTextField
                color={setColor(field)}
                multiline={isTextArea}
                inputProps={{
                    maxLength: isTextArea ? CHARACTER_COUNT : 999999999
                }}
                variant="outlined"
                type={type}
                id={id}
                name={id}
                label={label}
                title={label}
                onChange={onChange}
                value={field.value}
                required
            />
            <FormHelperText id={id}>{field.error}</FormHelperText>
            {isTextArea && (
                <FormHelperText id={id}>
                    Max Characters: {field.value.length}/{CHARACTER_COUNT}
                </FormHelperText>
            )}
        </FormControl>
    )
}

export default TextField
