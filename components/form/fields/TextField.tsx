import {
    TextField as MuiTextField,
    FormControl,
    FormHelperText
} from '@mui/material'

import { setColor } from '../utilities'
import { TextFieldProps } from '@/utils/types/components/form'

const TextField = ({ id, label, type, onChange, field }: TextFieldProps) => {
    return (
        <FormControl color={setColor(field)} error={Boolean(field.error)}>
            <MuiTextField
                color={setColor(field)}
                multiline={type === 'textarea'}
                variant="standard"
                inputProps={{ maxLength: 600 }}
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
            {type === 'textarea' && (
                <FormHelperText id={id}>
                    Max Characters: {field.value.length}/600
                </FormHelperText>
            )}
        </FormControl>
    )
}

export default TextField
