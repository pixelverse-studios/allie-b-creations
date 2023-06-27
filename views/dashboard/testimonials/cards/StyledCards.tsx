import styled from '@emotion/styled'

export const StyledTestimonialCard = styled.div`
    display: inline-block;
    height: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    position: relative;
    border-radius: var(--border-radius);
    border: 3px solid;
    &::-webkit-scrollbar {
        display: none;
    }
    &.show {
        border-color: var(--brand-color-1);

        .MuiRating-readOnly {
            color: var(--brand-color-3);
        }
    }

    &.hide {
        border-color: var(--brand-color-2);

        .MuiRating-readOnly {
            color: var(--brand-color-3);
        }
    }

    .card-header {
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 0;
        background-color: white;
        padding: 0.5rem 0.5rem 0 0.5rem;
        .button-group {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
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
                background: var(--brand-color-1);
                transform: rotateY(-180deg);
            }

            &:before {
                background: var(--brand-color-1);
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
                background: var(--brand-color-2);
            }

            &:active:after {
                transform: rotateY(20deg);
            }
        }
    }
    .review {
        padding: 0 0.5rem;
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
