import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
    @keyframes colorWheel {
        0% {
            color: var(--brand-color-1a);
        }
        25% {
            color: var(--brand-color-2);
        }
        50% {
            color: var(--brand-color-3);
        }
        75% {
            color: var(--brand-color-2);
        }
        100% {
            color: var(--brand-color-1a);
        }
    }
    background-color: var(--accent-color-2);
    position: relative;
    bottom: 0;
    left: 0;
    margin: 1rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    .logo {
        width: 12rem;
        height: 6rem;
    }

    .social-icons {
        display: flex;
        justify-content: space-around;
        column-gap: 1.5rem;
        .group {
            position: relative;
            height: 2.33rem;
            width: 2.33rem;
            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
            .icon-circle {
                background: linear-gradient(
                    143deg,
                    rgba(250, 232, 230, 1) 0%,
                    rgba(252, 231, 177, 1) 50%,
                    rgba(175, 230, 199, 1) 100%
                );
                padding: 0.3rem;
                border-radius: 50%;
                height: 2.33rem;
                width: 2.33rem;
                position: absolute;

                transition: all 0.6s ease-out;
            }
            .icon {
                position: absolute;
                color: white;
                z-index: 1;
                transition: all 0.4s ease-in-out;
            }

            &:hover {
                .icon-circle {
                    transform: scale(0);
                }

                .icon {
                    transform: scale(1.5);
                    animation: colorWheel 2s infinite linear;
                }
            }
        }
    }
    small {
        position: absolute;
        font-size: 0.6rem;
        left: 2px;
        bottom: 2px;
    }
`
