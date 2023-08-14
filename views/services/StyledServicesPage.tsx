import styled from '@emotion/styled'

export const StyledServicesPage = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    min-height: var(--height-with-nav-excluded);

    > p {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
        margin: 0 auto;
        width: 50vw;
        padding-bottom: 1.5rem;
        border-bottom: 3px solid var(--brand-color-1);
    }

    .serviceCategories {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .offeringBlock {
            h2 {
                text-align: center;
                color: var(--brand-color-1);
                margin-bottom: 1rem;
            }
            .events {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
                grid-gap: 1rem;

                .event {
                    display: flex;
                    flex-direction: column;
                    width: 20rem;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                    justify-content: space-around;

                    img {
                        height: 14rem;
                        width: 14rem;
                        border-radius: var(--border-radius);
                        object-fit: cover;
                    }

                    span {
                        font-weight: 700;
                        font-size: 1.3rem;
                    }

                    p {
                        font-weight: 500;
                        font-size: 1.1rem;
                    }
                }

                @media screen and (max-width: 750px) {
                    grid-template-columns: 1fr;
                }
            }
        }
    }
`
