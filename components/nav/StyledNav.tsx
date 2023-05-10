import styled from '@emotion/styled'

export const StyledMobileNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: var(--mobile-nav-height);
    background-color: var(--accent-color-1);
    padding: 1rem;

    .brand {
        flex-grow: 1;

        img {
            cursor: pointer;
            height: 4rem;
            width: auto;
        }
    }
`

export const StyledMobileNavItems = styled.ul`
    height: 100%;
    width: 100vw;
    background-color: var(--brand-color-2);
    color: var(--accent-color-1);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;

    li {
        font-size: 2rem;
        font-weight: 500;
        text-align: left;
        padding: 0 1rem;
        display: flex;
        align-items: center;

        span {
            display: flex;
            align-items: center;
        }
        svg {
            display: none;
        }

        .highlight {
            opacity: 0;
            height: 100%;
            width: 10px;
            border-radius: 5px;
            margin-right: 1rem;
            transition: var(--hover-transition);
        }
        &:hover {
            cursor: pointer;

            .highlight {
                opacity: 1;
                background-color: var(--accent-color-3);
            }
        }

        &.active {
            .highlight {
                opacity: 1;
                background-color: var(--accent-color-1);
            }
        }
    }
`

export const StyledHamburger = styled.div`
    position: absolute;
    right: 0;
    display: inline-block;
    height: 50px;
    width: 50px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    .burger {
        width: 18px;
        height: 8px;
        position: relative;
        display: block;
        margin: -4px auto 0;
        top: 50%;
        .bar {
            width: 100%;
            height: 1px;
            display: block;
            position: relative;
            background: var(--brand-color-1);
            transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
            transition-delay: 0s;
            &.topBar {
                transform: translateY(0px) rotate(0deg);
            }
            &.btmBar {
                transform: translateY(6px) rotate(0deg);
            }
        }
    }

    &.open {
        height: 100%;
        background-color: var(--accent-color-1);
        transition: all 0.3s ease-in, background 0.5s ease-in;

        z-index: 100;
        position: absolute;
        right: 0;
        display: inline-block;
        height: 50px;
        width: 50px;
        transform: rotate(90deg);
        .burger {
            .bar {
                transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
                transition-delay: 0.2s;
                background: var(--brand-color-1);

                &.topBar {
                    transform: translateY(4px) rotate(45deg);
                }
                &.btmBar {
                    transform: translateY(3px) rotate(-45deg);
                }
            }
        }
    }
`
