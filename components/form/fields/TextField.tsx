import {
    TextField as MuiTextField,
    FormControl,
    FormHelperText
} from '@mui/material'

const TextField = () => {
    return (
        <FormControl>
            <MuiTextField
                id="outlined-basic"
                label="Kevin"
                variant="standard"
            />
        </FormControl>
    )
}

export default TextField
