import { Fab } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message'
import { StyledCallToAction } from './StyledCallToAction'
import { useRouter } from 'next/router'

const Cta = () => {
    const router = useRouter()
    return (
        <StyledCallToAction>
            <Fab
                variant="extended"
                color="inherit"
                onClick={() => router.push('/contact')}>
                <MessageIcon className="icon" />
                <span>Message</span>
            </Fab>
        </StyledCallToAction>
    )
}

export default Cta
