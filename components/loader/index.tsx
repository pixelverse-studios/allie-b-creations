import BallonLoader from './Balloon-Loader.svg'
import { StyledLoader } from './StyledLoader'

const BalloonLoader = () => {
    return (
        <StyledLoader>
            <img src={BallonLoader.src} alt="Balloons" />
        </StyledLoader>
    )
}

export default BalloonLoader
