import { MouseEventHandler } from 'react'
import { Login, Logout, Dashboard } from '@mui/icons-material'

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
const CONTACT = {
    route: '/contact',
    slug: 'contact',
    label: 'Contact Me'
}
interface BaseNaveItemProps {
    onClick: Function
    activePage: string
}

export const BaseNavItems = ({ onClick, activePage }: BaseNaveItemProps) => {
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
                className={activePage === CONTACT.slug ? 'active' : 'inactive'}
                onClick={() => onClick(CONTACT.route)}>
                <span>{CONTACT.label}</span>
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
    onLogin,
    onLogout,
    onDashboardClick
}: AuthNavItemProps) => {
    return (
        <>
            {loggedIn ? (
                <>
                    <li
                        className={
                            activePage === 'dashboard' ? 'active' : 'inactive'
                        }
                        onClick={() => onDashboardClick('/dashboard')}>
                        <Dashboard />
                        <span className="iconText">Dashboard</span>
                    </li>
                    <li onClick={onLogout}>
                        <Logout />
                        <span className="iconText">Log Out</span>
                    </li>
                </>
            ) : (
                <li onClick={onLogin}>
                    <Login />
                    <span className="iconText">Log In</span>
                </li>
            )}
        </>
    )
}
