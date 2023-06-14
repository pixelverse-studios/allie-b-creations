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
    .card {
        border: none !important;
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform-origin: center right;
        transition: transform 1s;
        .card__face {
            position: absolute;
            width: 100%;
            height: 100%;
            line-height: 260px;
            text-align: center;
            font-weight: bold;
            font-size: 40px;
        }
        .front {
            border: inherit;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
        .back {
            border: inherit;
            transform: rotateY(180deg);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }

        &.is-flipped {
            transform: translateX(-100%) rotateY(-180deg);
        }
    }
    .close {
        position: absolute;
        border-radius: 50%;
        padding: 0.2rem;
        top: 2px;
        right: 2px;
        cur
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
                background: #02c66f;
                transform: rotateY(-180deg);
            }

            &:before {
                background: #ff3a19;
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
                background: #7fc6a6;
            }

            &:active:after {
                transform: rotateY(20deg);
            }
        }
    }
`

export const StyledScene = styled.div`
    display: inline-block;
    width: 200px;
    height: 260px;
    /*   border: 1px solid #CCC; */
    margin: 40px 0;
    perspective: 600px;

    .card {
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transform-style: preserve-3d;
        transform-origin: center right;
        transition: transform 1s;
    }

    .card.is-flipped {
        transform: translateX(-100%) rotateY(-180deg);
    }

    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 260px;
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 40px;
        backface-visibility: hidden;
    }

    .card__face--front {
        background: crimson;
    }

    .card__face--back {
        background: slateblue;
        transform: rotateY(180deg);
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
