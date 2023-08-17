import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const BaseDesktopNavStyles = css`
    height: var(--nav-height);
    background-color: var(--accent-color-2);
    box-shadow: var(--box-shadow-nav);
    .contentWrapper {
        max-width: var(--max-width);
        margin: auto;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem;

        .brand {
            img {
                cursor: pointer;
                height: 6rem;
                width: auto;
            }
        }
    }
`

export const StyledDesktopNav = styled.nav`
    ${BaseDesktopNavStyles}

    z-index:2;
`

export const ActiveItemStyles = css`
    background-color: var(--brand-color-1);
    color: var(--accent-color-1);
`
export const HoverItemStyles = css`
    background-color: var(--brand-color-2);
    color: var(--accent-color-1);
`

export const StyledDesktopNavItems = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    li {
        position: relative;
        font-size: 1.3rem;
        font-weight: 500;
        text-align: left;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        & > * {
            transition: var(--hover-transition);
        }

        .iconText {
            display: none;
        }

        span {
            color: var(--accent-color-1);
            padding: 1rem;
            display: flex;
            align-items: center;
            border-radius: 2rem;
        }

        svg {
            color: var(--accent-color-1);
            padding: 1rem;
            cursor: pointer;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
        }

        button {
            border: 2px solid var(--brand-color-1);
            background-color: transparent;
            border-radius: 2rem;
            padding: 1rem;
            cursor: pointer;
            font-weight: 500;
            font-size: 1.3rem;
            transition: var(--hover-transition);

            &:hover {
                border-color: var(--brand-color-1);
                color: var(--brand-color-1);
            }
        }

        &:hover {
            cursor: pointer;

            span,
            svg {
                ${HoverItemStyles}
            }
        }

        &.active {
            span,
            svg {
                ${ActiveItemStyles}
            }
        }
    }
`

export const BaseMobileNaveStyles = css`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: var(--nav-height);
    background-color: var(--accent-color-2);
    padding: 1rem;
    border-bottom: 5px solid var(--brand-color-1);

    .brand {
        flex-grow: 1;

        img {
            cursor: pointer;
            height: 4rem;
            width: auto;
        }
    }
`

export const StyledMobileNav = styled.nav`
    ${BaseMobileNaveStyles}
    z-index:2;
`

export const StyledMobileNavItems = styled.div`
    height: 100%;
    width: 100vw;
    background-color: var(--accent-color-2);
    color: var(--primary-color-3);

    .subMenuHeader {
        ${BaseMobileNaveStyles}
        transition: 0.1s;

        &.hide {
            opacity: 0;
            transition-delay: 0;
        }

        &.show {
            opacity: 1;
            transition-delay: 0.5s;
        }
    }

    ul {
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
            flex-direction: column;
            align-items: flex-start;

            span {
                transition: var(--hover-transition);
                color: var(--accent-color-1);
                display: flex;
                align-items: center;
                padding: 1rem;
                border-radius: 2rem;
            }
            svg {
                display: none;
                padding: 1rem;
                border-radius: 2rem;
            }
            button {
                border: 2px solid var(--brand-color-1);
                background-color: transparent;
                border-radius: 2rem;
                padding: 1rem;
                cursor: pointer;
                font-size: 2rem;
                font-weight: 500;
                transition: var(--hover-transition);

                &:hover {
                    border-color: var(--brand-color-1);
                    color: var(--brand-color-1);
                }
            }

            &:hover {
                cursor: pointer;

                span,
                svg {
                    ${HoverItemStyles}
                }
            }

            &.active {
                span,
                svg {
                    ${ActiveItemStyles}
                }
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
            background: var(--accent-color-1);
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
        background-color: var(--accent-color-2);
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
                background: var(--accent-color-1);

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
