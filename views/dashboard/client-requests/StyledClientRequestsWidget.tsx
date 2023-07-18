import styled from '@emotion/styled'

export const StyledClientRequestsWidget = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: var(--brand-color-1);
        font-weight: bold;
        display: flex;
        align-items: center;

        span {
            margin: 0 0.5rem;
        }
    }

    .requestsBlock {
        display: grid;
        grid-template-columns: 20rem 1fr;
        grid-gap: 1rem;

        .requestsList {
            max-height: 50vh;
            border: 2px solid var(--brand-color-1);
            border-radius: var(--border-radius);
            overflow: auto;

            .requestItem {
                transition: var(--hover-transition);

                span,
                p {
                    transition: var(--hover-transition);
                }

                &:hover {
                    border-radius: var(--border-radius);
                    background-color: white;

                    span,
                    p {
                        color: var(--brand-color-1);
                    }
                }

                &.active {
                    border-radius: var(--border-radius);
                    background-color: var(--brand-color-1);
                    span,
                    p {
                        color: white;
                    }
                }
            }
        }

        @media screen and (max-width: 1300px) {
            grid-template-columns: 1fr;
        }
    }
`

export const StyledSelectedRequest = styled.div`
    border: 2px solid var(--brand-color-1);
    border-radius: var(--border-radius);
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .requestFields {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        grid-gap: 1rem;
        align-items: flex-end;

        &:nth-of-type(3) {
            grid-template-columns: repeat(
                auto-fill,
                minmax(calc(50% - 2rem), 1fr)
            );
        }
    }

    .inspoImgCard {
        width: 50%;

        .cardMedia {
            height: 20rem !important;
        }

        .imgDownload svg {
            color: var(--brand-color-1);
            font-size: 2rem;
        }

        @media screen and (max-width: 1300px) {
            width: 100%;
        }
    }
`
