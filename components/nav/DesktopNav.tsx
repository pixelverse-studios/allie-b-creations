import { useSelector } from 'react-redux'

const DesktopNav = () => {
    const { email } = useSelector((state: any) => state.user)
    return (
        <nav>
            <div>logo goes here</div>
            <div>{!!email ? 'LOGGED IN' : 'LOGGED OUT'}</div>
        </nav>
    )
}

export default DesktopNav
