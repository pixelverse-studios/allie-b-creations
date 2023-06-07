import {
    TextField as MuiTextField,
    FormControl,
    FormHelperText
} from '@mui/material'

type TextFieldProps = {
    id: string
    type: 'text' | 'email' | 'textarea' | 'password'
    label: string
    onChange: any
    field: any
}

const TextField = ({ id, label, type, onChange, field }: TextFieldProps) => {
    return (
        <FormControl>
            <MuiTextField
                multiline={type === 'textarea'}
                variant="standard"
                type={type}
                id={id}
                name={id}
                label={label}
                title={label}
                onChange={onChange}
                value={field.value}
            />
        </FormControl>
    )
}

export default TextField
