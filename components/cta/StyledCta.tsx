import styled from '@emotion/styled'

export const StyledCta = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    button {
        background-color: var(--brand-color-1);

        &::after {
            opacity: 0;
            width: 0%;
            color: var(--brand-color-1);
            content: '';
        }
        &:hover {
            background-color: var(--brand-color-1);
            &::after {
                transition: 0.6s ease;
                opacity: 1;
                width: 100%;
                color: black;
                padding-left: 0.2rem;
                content: 'Message';
            }
        }
    }
`
