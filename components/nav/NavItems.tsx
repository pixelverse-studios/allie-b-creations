import Link from 'next/link'
import { IconButton } from '@mui/material'
import { Login, Logout, Dashboard } from '@mui/icons-material'

export const BaseNavItems = ({ onClick }: { onClick: Function }) => {
    return (
        <>
            <li onClick={() => onClick('/about')}>
                <p>About</p>
            </li>
            <li onClick={() => onClick('/services')}>
                <p>Services</p>
            </li>
            <li onClick={() => onClick('/contact')}>
                <p>Contact Me</p>
            </li>
        </>
    )
}

export const AuthNavItems = ({
    loggedIn,
    onLogin,
    onLogout
}: {
    loggedIn: boolean
    onLogin: any
    onLogout: any
}) => {
    return (
        <>
            <li>
                <IconButton>
                    <Dashboard />
                </IconButton>
            </li>
            {loggedIn ? (
                <li>
                    <IconButton onClick={onLogout}>
                        <Login />
                    </IconButton>
                </li>
            ) : (
                <li>
                    <IconButton onClick={onLogin}>
                        <Logout />
                    </IconButton>
                </li>
            )}
        </>
    )
}
