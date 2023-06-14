import styled from '@emotion/styled'

export const StyledTestimonialCard = styled.div`
    padding: 1rem;
    display: inline-block;
    perspective: 600px;

    height: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    position: relative;
    &::-webkit-scrollbar {
        display: none;
    }

    .close {
        position: absolute;
        border-radius: 50%;
        padding: 0.2rem;
        top: 2px;
        right: 2px;
        cursor: pointer;
    }
    .header {
        border: none !important;
    }
    .tgl-btn {
        outline: 0;
        display: block;
        width: 4em;
        height: 2em;
        position: relative;
        cursor: pointer;
        user-select: none;
        &:after,
        &:before {
            position: relative;
            display: block;
            content: '';
            width: 50%;
            height: 100%;
        }

        &:after {
            left: 0;
        }

        &:before {
            display: none;
        }
    }

    &:checked + .tgl-btn:after {
        left: 50%;
    }

    .tgl-flip {
        + .tgl-btn {
            padding: 2px;
            transition: all 0.2s ease;
            font-family: sans-serif;
            perspective: 100px;
            &:after,
            &:before {
                display: inline-block;
                transition: all 0.4s ease;
                width: 100%;
                text-align: center;
                position: absolute;
                line-height: 2em;
                font-weight: bold;
                color: #fff;
                position: absolute;
                top: 0;
                left: 0;
                backface-visibility: hidden;
                border-radius: 4px;
            }

            &:after {
                content: attr(data-tg-on);
                background: var(--brand-color-2);
                transform: rotateY(-180deg);
            }

            &:before {
                background: var(--brand-color-2);
                content: attr(data-tg-off);
            }

            &:active:before {
                transform: rotateY(-20deg);
            }
        }

        &:checked + .tgl-btn {
            &:before {
                transform: rotateY(180deg);
            }

            &:after {
                transform: rotateY(0);
                left: 0;
                background: var(--brand-color-1a);
            }

            &:active:after {
                transform: rotateY(20deg);
            }
        }
    }
`

export const StyledTestimonialInput = styled.input`
    display: none;

    // add default box-sizing for this scope
    &,
    &:after,
    &:before,
    & *,
    & *:after,
    & *:before,
    & + .tgl-btn {
        box-sizing: border-box;
        &::selection {
            background: none;
        }
    }
`
