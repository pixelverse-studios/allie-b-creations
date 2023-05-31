import { Fab } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { StyledCta } from './StyledCta'
import { useRouter } from 'next/router'
const Cta = () => {
    const router = useRouter()
    return (
        <StyledCta>
            <Fab
                variant="extended"
                color="inherit"
                onClick={() => router.push('/contact')}>
                <SendIcon />
            </Fab>
        </StyledCta>
    )
}

export default Cta
