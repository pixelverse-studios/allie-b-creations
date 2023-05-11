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
                <div className="highlight" />
                <span>{ABOUT.label}</span>
            </li>
            <li
                className={activePage === SERVICES.slug ? 'active' : 'inactive'}
                onClick={() => onClick(SERVICES.route)}>
                <div className="highlight" />
                <span>{SERVICES.label}</span>
            </li>
            <li
                className={activePage === CONTACT.slug ? 'active' : 'inactive'}
                onClick={() => onClick(CONTACT.route)}>
                <div className="highlight" />
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
                        <div className="highlight" />
                        <Dashboard />
                        <span className="iconText">Dashboard</span>
                    </li>
                    <li onClick={onLogout}>
                        <div className="highlight" />
                        <Logout />
                        <span className="iconText">Log Out</span>
                    </li>
                </>
            ) : (
                <li onClick={onLogin}>
                    <div className="highlight" />
                    <Login />
                    <span className="iconText">Log In</span>
                </li>
            )}
        </>
    )
}
