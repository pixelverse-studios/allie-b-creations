import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const DashboardCardStyles = css`
    border-radius: var(--border-radius);
    border: 2px solid var(--brand-color-1);
    padding: 1rem;
`

export const StyledDashboard = styled.section`
    .dashboardContent {
        margin-left: var(--dashboard-nav-width);
        padding: 1rem;
        height: inherit;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: var(--max-width);
        padding-bottom: 1rem;

        header {
            ${DashboardCardStyles}
            background-color: var(--brand-color-1);
            margin-top: 1rem;
            display: flex;
            justify-content: flex-end;

            .mobileSelect {
                display: none;
            }

            .headerControls {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .dashboardContent {
            margin-left: 0;

            header {
                justify-content: space-between;
                .mobileSelect {
                    display: flex;
                }
            }
        }
    }
`
