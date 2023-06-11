import styled from '@emotion/styled'
import { BaseMobileNaveStyles } from '../StyledNav'

export const StyledDashNav = styled.nav`
    ${BaseMobileNaveStyles}

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
