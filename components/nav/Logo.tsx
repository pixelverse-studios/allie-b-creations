import { useRouter } from 'next/router'

import LogoImg from '@/assets/logo.svg'

const Logo = ({ callback }: { callback?: Function }) => {
    const router = useRouter()
    const onLogoClick = () => {
        if (callback) callback()
        router.push('/')
    }

    return (
        <div className="brand" onClick={onLogoClick}>
            <img src={LogoImg.src} alt="Logo" />
        </div>
    )
}

export default Logo
