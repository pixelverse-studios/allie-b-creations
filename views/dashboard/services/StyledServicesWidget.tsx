import styled from '@emotion/styled'
import { DashboardCardStyles } from '../StyledDashboard'

export const StyledServicesWidget = styled.form`
    h2 {
        color: var(--brand-color-1a);
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .servicesCard {
        ${DashboardCardStyles}
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`
