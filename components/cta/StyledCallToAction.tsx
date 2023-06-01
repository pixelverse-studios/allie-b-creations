import styled from '@emotion/styled'

export const StyledCallToAction = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    button {
        background-color: var(--brand-color-1);
        border-radius: 24px;
        width: 50px;
        transition: all 0.3s ease-in-out;
        span {
            max-width: 0%;
            transition: all 0.3s ease-in-out;
            overflow: hidden;
            border-radius: 24px;
        }
        &:hover {
            background-color: var(--brand-color-1);
            width: 130px;
            transition: all 0.6s ease-in-out;
            span {
                max-width: 100%;
                padding-left: 0.2rem;
            }
        }
    }
`
