import BallonLoader from './Balloon-Loader.svg'
import { StyledLoader } from './StyledLoader'

const BalloonLoader = ({ className }: { className?: string }) => {
    return (
        <StyledLoader className={className}>
            <img src={BallonLoader.src} alt="Balloons" />
        </StyledLoader>
    )
}

export default BalloonLoader
