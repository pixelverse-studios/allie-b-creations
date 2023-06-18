import styled from '@emotion/styled'
import { DashboardCardStyles } from '../StyledDashboard'

export const StyledServicesWidget = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: var(--brand-color-1a);
        font-weight: bold;
    }
`

export const StyledServicesBlock = styled.section`
    ${DashboardCardStyles}
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4 {
        color: var(--brand-color-1a);
        font-weight: 500;
    }

    .offeringSections {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
        grid-gap: 1rem;
    }
`

export const StyledEventTypeCard = styled.div`
    padding: 1rem;

    .MuiAccordionDetails-root {
        padding: 1rem;
    }

    .cardHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        border-bottom: 2px solid lightgray;
        padding: 5px;
    }

    .cardBody {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0.5rem;

        .offeringsList {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
    }
`

export const StyledOfferingItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 1rem;
    color: var(--accent-color-1);
    position: relative;
    transition: var(--hover-transition);
    padding: 1rem;
    border-radius: var(--border-radius);

    background: linear-gradient(to right, var(--brand-color-1) 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;

    svg {
        transition: var(--hover-transition);
        font-size: 1.5rem;
    }

    &:hover {
        cursor: pointer;
        background-position: left bottom;
        font-weight: 700;

        svg {
            transform: scale(1.5);
        }
    }
`
