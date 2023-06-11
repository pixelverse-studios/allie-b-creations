import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { Menu as MenuIcon, Logout, Home } from '@mui/icons-material'
import { enqueueSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'
import { signOut, getAuth } from 'firebase/auth'

import { removeUser } from '@/lib/redux/slices/user'
import DashNav from '@/components/nav/dashboard/DashNav'
import bannerUtils from '@/utils/banners'
import { DASHBOARD_ROUTES } from '@/components/nav/dashboard/routes'
import { StyledDashboard } from './StyledDashboard'

const { statuses, messages } = bannerUtils
const DashboardPage = ({ children }: { children: any }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const auth = getAuth()
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
                    <IconButton
                        onClick={onHomeClick}
                        className={!activePage ? 'active' : 'inactive'}>
                        <Home />
                    </IconButton>
                    <IconButton onClick={onLogout}>
                        <Logout />
                    </IconButton>
                </header>
                {children}
            </div>
        </StyledDashboard>
    )
}

export default DashboardPage
