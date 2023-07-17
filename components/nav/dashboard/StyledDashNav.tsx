import styled from '@emotion/styled'
import { BaseMobileNaveStyles } from '../StyledNav'

export const StyledDashNav = styled.nav`
    background-color: var(--accent-color-2);
    padding: 1rem;
    position: fixed;
    width: var(--dashboard-nav-width);
    height: 100%;

    .dashNavAccordion {
        border-radius: var(--border-radius);
    }

    .dashNavButton {
        transition: var(--hover-transition);
        &:hover {
            border-radius: var(--border-radius);
            color: var(--brand-color-1);
            background-color: white;
        }
        &.Mui-selected {
            border-radius: var(--border-radius);
            background-color: var(--brand-color-1);
            color: white;
        }
    }

    .brand {
        text-align: center;
        padding-bottom: 1rem;
        border-bottom: 4px solid var(--brand-color-2);
        margin-bottom: 1rem;

        img {
            cursor: pointer;
            height: 6rem;
            width: auto;
        }
    }

    button {
        &:hover {
            color: #236bc9;
        }

        &.active {
            cursor: initial;
            color: #236bc9;
        }
    }
`
