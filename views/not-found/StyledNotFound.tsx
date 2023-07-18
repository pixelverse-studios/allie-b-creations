import styled from '@emotion/styled'
import { LinkHover } from '../dashboard/services/StyledServicesWidget'

export const StyledNotFound = styled.section`
    height: var(--height-with-nav-excluded);
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;

    p {
        font-size: 6rem;
        font-weight: 800;
        color: var(--brand-color-1);
    }

    span,
    .goHome {
        font-size: 2rem;
        font-style: italic;
        font-weight: 500;
        color: var(--brand-color-1);
    }

    .goHome {
        cursor: pointer;
        ${LinkHover}
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
