import styled from '@emotion/styled'

export const StyledCta = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    button {
        background-color: var(--brand-color-1);
        transition: 1s;
        &::after {
            color: var(--brand-color-1);
            content: '';
        }
        &:hover {
            background-color: var(--brand-color-1);
            &::after {
                color: black;
                padding-left: 0.2rem;
                content: 'Message';
            }
        }
    }
`
