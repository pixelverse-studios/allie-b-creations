import { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { Menu as MenuIcon, Logout, Home } from '@mui/icons-material'
import { signOut, getAuth } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
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

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const onIconClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget)
    const onMenuClose = () => setAnchorEl(null)
    const onMenuItemClick = (path: string) => {
        setAnchorEl(null)
        router.push(`/dashboard/${path}`)
    }
    const onLogout = async () => {
        try {
            await signOut(auth)
            dispatch(removeUser())
            router.push('/')
            enqueueSnackbar(messages.LOGGED_OUT, {
                variant: statuses.SUCCESS
            })
        } catch (error) {
            enqueueSnackbar(messages.LOG_OUT_ERROR, {
                variant: statuses.ERROR
            })
        }
    }

    const activePage = useMemo(
        () => router.pathname.split('/')[2],
        [router.pathname]
    )

    return (
        <StyledDashNav>
            <Logo />
            <IconButton className={!activePage ? 'active' : 'inactive'}>
                <Home />
            </IconButton>
            <IconButton onClick={onLogout}>
                <Logout />
            </IconButton>
            <IconButton onClick={onIconClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={onMenuClose}>
                {DASHBOARD_ROUTES.map(route => (
                    <MenuItem
                        selected={activePage === route.path}
                        className={
                            activePage === route.path ? 'active' : 'inactive'
                        }
                        key={route.label}
                        onClick={() => onMenuItemClick(route.path)}>
                        {route.label}
                    </MenuItem>
                ))}
            </Menu>
        </StyledDashNav>
    )
}

export default MobileDashNav
