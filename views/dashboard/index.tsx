import { useRouter } from 'next/router'

import DashNav from '@/components/nav/dashboard/DashNav'
import useBreakpoint from '@/utils/hooks/useWindowWidth'
import { DASHBOARD_ROUTES } from '@/components/nav/dashboard/routes'
import { StyledDashboard } from './StyledDashboard'

const DashboardPage = ({
    children,
    onSubPage
}: {
    children: any
    onSubPage: boolean
}) => {
    if (onSubPage) {
        return (
            <StyledDashboard>
                <DashNav />
                {children}
            </StyledDashboard>
        )
    }

    const router = useRouter()
    const onItemClick = (path: string) => router.push(path)
    return (
        <StyledDashboard>
            <DashNav />
            <ul>
                {DASHBOARD_ROUTES.map(route => (
                    <li
                        onClick={() => onItemClick(route.path)}
                        key={route.label}
                        className="dashboardPageItem">
                        {route.label}
                    </li>
                ))}
            </ul>
        </StyledDashboard>
    )
}

export default DashboardPage
