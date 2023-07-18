import { useRouter } from 'next/router'
import BalloonLoader from '@/components/loader/Balloon-Loader.svg'
import { StyledNotFound } from './StyledNotFound'

const PageNotFound = () => {
    const router = useRouter()
    const goHome = () => router.push('/')

    return (
        <StyledNotFound>
            <img src={BalloonLoader.src} alt="Balloons" />
            <div className="message">
                <p>404</p>
                <span>This page doesn't seem to exist.</span>
                <br />
                <a className="goHome" onClick={goHome}>
                    Go home
                </a>
            </div>
            <img src={BalloonLoader.src} alt="Balloons" />
        </StyledNotFound>
    )
}

export default PageNotFound
