import { useSelector } from 'react-redux'

const FooterWidget = () => {
    const links = useSelector((state: any) => state.contactLinks)
    console.log('links', links)
    return <div>Hey</div>
}

export default FooterWidget
