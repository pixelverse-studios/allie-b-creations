import { useMemo } from 'react'
import { useRouter } from 'next/router'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material'
import uniqueId from 'lodash/uniqueId'
import { ExpandMore } from '@mui/icons-material'
import { signOut, getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { enqueueSnackbar } from 'notistack'

import { removeUser } from '@/lib/redux/slices/user'
import { DASHBOARD_ROUTES } from './routes'
import Logo from '../Logo'
import bannerUtils from '@/utils/banners'
import { StyledDashNav } from './StyledDashNav'

const { statuses, messages } = bannerUtils
const MobileDashNav = () => {
    const router = useRouter()
    const auth = getAuth()
    const dispatch = useDispatch()

    const onMenuItemClick = (path: string) => {
        router.push(`/dashboard/${path}`)
    }

    const activePage = useMemo(
        () => router.pathname.split('/')[2],
        [router.pathname]
    )

    return (
        <StyledDashNav>
            <Logo />
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    Pages
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {DASHBOARD_ROUTES.map(route => (
                            <ListItem key={uniqueId('li')}>
                                <ListItemButton
                                    key={uniqueId('lib')}
                                    selected={activePage === route.path}>
                                    <ListItemText
                                        key={uniqueId('lit')}
                                        onClick={() =>
                                            onMenuItemClick(route.path)
                                        }
                                        primary={route.label}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        </StyledDashNav>
    )
}

export default MobileDashNav
