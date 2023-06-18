import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const DashboardCardStyles = css`
    border-radius: var(--border-radius);
    border: 2px solid var(--brand-color-1a);
    padding: 1rem;
`

export const StyledDashboard = styled.section`
    height: 100%;

    .dashboardContent {
        margin-left: var(--dashboard-nav-width);
        padding: 1rem;
        height: inherit;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: var(--max-width);

        header {
            ${DashboardCardStyles}
            background-color: var(--brand-color-1);
            margin-top: 1rem;
            display: flex;
            justify-content: flex-end;
        }
    }
`
