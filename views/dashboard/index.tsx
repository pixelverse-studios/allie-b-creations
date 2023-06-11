import { useDispatch } from 'react-redux'

import DashNav from '@/components/nav/dashboard/DashNav'
import useBreakpoint from '@/utils/hooks/useWindowWidth'

const DashboardPage = ({ children }: { children: any }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <DashNav />
            {children}
        </div>
    )
}

export default DashboardPage
