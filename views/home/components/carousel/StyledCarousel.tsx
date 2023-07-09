import styled from '@emotion/styled'

export const StyledCarousel = styled.div`
    @keyframes fade-in {
        from {
            opacity: 0;
            visibility: hidden;
        }
        to {
            opacity: 1;
            visibility: visible;
        }
    }

    width: 100%;
    height: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-items: center;

    .arrow {
        .MuiSvgIcon-root {
            font-size: 3rem;
            color: var(--brand-color-1);
            /* filter: drop-shadow(0 0 2px var(--brand-color-1)); */
            transition: all 0.4s linear;
            &:hover {
                transform: scale(1.2);
            }
        }

        &:hover {
            cursor: pointer;
        }
    }

    .testimonial-container {
        display: grid;
        grid-template-rows: 1fr 3fr 1fr;
        place-items: center;
        height: 100%;
        width: 100%;
        .quote {
            svg {
                height: 1.5rem;
            }
        }
        .testimonial {
            text-align: center;
            font-size: 1.3rem;
            font-weight: lighter;

            p {
                max-height: 100%;
                opacity: 0;
                visibility: hidden;
                animation: fade-in 1s ease-in-out;
                animation-fill-mode: forwards;
            }
        }
        .author {
            width: 100%;
            text-align: end;
            font-size: 1.2rem;
            p {
                opacity: 0;
                visibility: hidden;
                animation: fade-in 1s ease-in-out;
                animation-fill-mode: forwards;
            }
        }
    }
`
