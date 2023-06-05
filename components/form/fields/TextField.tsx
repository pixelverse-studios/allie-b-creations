import {
    TextField as MuiTextField,
    FormControl,
    FormHelperText
} from '@mui/material'

type TextFieldProps = {
    type: 'text' | 'email' | 'textarea' | 'password'
    label: string
}

const TextField = ({ label, type }: TextFieldProps) => {
    return (
        <FormControl>
            <MuiTextField
                id={label}
                label={label}
                title={label}
                name={label}
                type={type}
                variant="standard"
            />
        </FormControl>
    )
}

export default TextField
