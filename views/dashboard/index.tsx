import { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { Logout, Home, MoreVert } from '@mui/icons-material'
import { enqueueSnackbar } from 'notistack'
import { signOut, getAuth } from 'firebase/auth'

import { removeUser } from '@/lib/redux/slices/user'
import DashNav from '@/components/nav/dashboard/DashNav'
import { statuses, messages } from '@/utils/banners'
import { StyledDashboard } from './StyledDashboard'
import { DASHBOARD_ROUTES } from '@/components/nav/dashboard/routes'
import { uniqueId } from 'lodash'

const DashboardPage = ({ children }: { children: any }) => {
    const dispatch = useDispatch()
    const aboutPage = useSelector((state: any) => state.aboutPage)
    const router = useRouter()
    const auth = getAuth()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const onMobileNavClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget)
    const onMobileNavClose = () => setAnchorEl(null)
    const onMobileNavItemClick = (path: string) => {
        onMobileNavClose()
        router.push(`/dashboard/${path}`)
    }

    const onHomeClick = () => router.push('/dashboard/')
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
        <StyledDashboard>
            <DashNav />
            <div className="dashboardContent">
                <header>
                    <h1>Good day Allie B!</h1>
                    <div className="headerControls">
                        <IconButton
                            onClick={onHomeClick}
                            className={!activePage ? 'active' : 'inactive'}>
                            <Home />
                        </IconButton>
                        <IconButton onClick={onLogout}>
                            <Logout />
                        </IconButton>
                        <div className="mobileSelect">
                            <IconButton onClick={onMobileNavClick}>
                                <MoreVert />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={onMobileNavClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button'
                                }}>
                                {DASHBOARD_ROUTES.map(route => (
                                    <MenuItem
                                        onClick={() =>
                                            onMobileNavItemClick(route.path)
                                        }
                                        key={uniqueId('mi')}>
                                        {route.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        <Avatar src={aboutPage[0].img.src} alt="profile_img" />
                    </div>
                </header>
                {children}
            </div>
        </StyledDashboard>
    )
}

export default DashboardPage
