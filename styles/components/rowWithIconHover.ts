import { css } from '@emotion/react'

const baseRowWithIconHover = css`
    border-radius: var(--border-radius);
    background-size: 200% 100%;

    svg {
        transition: var(--hover-transition);
        font-size: 1.5rem;
    }
`

export const rowWithIcon_HoverInRight = css`
    background: linear-gradient(to right, var(--brand-color-1) 50%, white 50%);
    background-position: right bottom;
    ${baseRowWithIconHover}

    &:hover {
        cursor: pointer;
        background-position: left bottom;
        font-weight: 700;

        svg {
            transform: scale(1.5);
        }
    }
`
export const rowWithIcon_HoverInLeft = css`
    background: linear-gradient(to right, white 50%, var(--brand-color-1) 50%);
    background-position: left bottom;
    ${baseRowWithIconHover}

    &:hover {
        cursor: pointer;
        background-position: right bottom;
        font-weight: 700;

        svg {
            transform: scale(1.5);
        }
    }
`
