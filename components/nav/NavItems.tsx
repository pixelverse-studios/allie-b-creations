import { MouseEventHandler } from 'react'
import { Logout, Dashboard } from '@mui/icons-material'

const ABOUT = {
    route: '/about',
    slug: 'about',
    label: 'About'
}
const SERVICES = {
    route: '/services',
    slug: 'services',
    label: 'Services'
}
const GALLERY = {
    route: '/gallery',
    slug: 'gallery',
    label: 'Gallery'
}
interface BaseNaveItemProps {
    onClick: Function
    activePage: string
    onContactClick: Function
}

export const BaseNavItems = ({
    onClick,
    activePage,
    onContactClick
}: BaseNaveItemProps) => {
    return (
        <>
            <li
                className={activePage === ABOUT.slug ? 'active' : 'inactive'}
                onClick={() => onClick(ABOUT.route)}>
                <span>{ABOUT.label}</span>
            </li>
            <li
                className={activePage === SERVICES.slug ? 'active' : 'inactive'}
                onClick={() => onClick(SERVICES.route)}>
                <span>{SERVICES.label}</span>
            </li>
            <li
                className={activePage === GALLERY.slug ? 'active' : 'inactive'}
                onClick={() => onClick(GALLERY.route)}>
                <span>{GALLERY.label}</span>
            </li>
            <li onClick={() => onContactClick()}>
                <button>Contact Me</button>
            </li>
        </>
    )
}

interface AuthNavItemProps {
    loggedIn: boolean
    activePage: string
    onLogin: MouseEventHandler<HTMLLIElement>
    onLogout: MouseEventHandler<HTMLLIElement>
    onDashboardClick: Function
}

export const AuthNavItems = ({
    loggedIn,
    activePage,
    onLogout,
    onDashboardClick
}: AuthNavItemProps) => {
    if (!loggedIn) return null
    return (
        <>
            <li
                className={activePage === 'dashboard' ? 'active' : 'inactive'}
                onClick={() => onDashboardClick('/dashboard')}>
                <Dashboard />
                <span className="iconText">Dashboard</span>
            </li>
            <li onClick={onLogout}>
                <Logout />
                <span className="iconText">Log Out</span>
            </li>
        </>
    )
}
