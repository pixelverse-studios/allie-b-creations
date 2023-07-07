import { useSelector } from 'react-redux'
import { StyledHomePageWidget } from './StyledHomeWidget'

const HomePageWidget = () => {
    const HomePageData = useSelector((state: any) => state.homePage)

    console.log('HomePageData', HomePageData)
    return <StyledHomePageWidget>HomePageWidget</StyledHomePageWidget>
}

export default HomePageWidget
