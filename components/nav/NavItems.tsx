import { MouseEventHandler } from 'react'
import { IconButton } from '@mui/material'
import { Login, Logout, Dashboard } from '@mui/icons-material'

export const BaseNavItems = () => {
    return (
        <>
            <li>
                <p>About</p>
            </li>
            <li>
                <p>Services</p>
            </li>
            <li>
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
                        <Login />
                    </IconButton>
                </li>
            )}
        </>
    )
}
