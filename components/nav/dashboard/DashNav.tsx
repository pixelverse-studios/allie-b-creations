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

import useBreakpoint from '@/utils/hooks/useWindowWidth'
import { DASHBOARD_ROUTES } from './routes'
import Logo from '../Logo'
import { StyledDashNav } from './StyledDashNav'

const DashNav = () => {
    const router = useRouter()
    const { isMobile } = useBreakpoint()

    const onMenuItemClick = (path: string) => {
        router.push(`/dashboard/${path}`)
    }

    const activePage = useMemo(
        () => router.pathname.split('/')[2],
        [router.pathname]
    )

    if (isMobile) return null

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

export default DashNav
