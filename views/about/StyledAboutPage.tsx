import styled from '@emotion/styled'

export const StyledAboutPage = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding-top: 1rem;

    .image-about-content-0,
    .image-about-content-1 {
        display: flex;
        justify-content: space-around;
        column-gap: 3rem;
        padding: 1rem;

        @media (max-width: 900px) {
            flex-direction: column !important;
            align-items: center;
            row-gap: 1rem;
        }

        .image {
            max-width: 30rem;
            box-shadow: var(--box-shadow-1);
            border-radius: var(--border-radius);
            @media (max-width: 1000px) {
                max-width: 100%;
            }
        }

        .about {
            display: flex;
            flex-direction: column;
            background-color: var(--brand-color-2);
            width: 100%;
            align-items: center;
            text-align: center;
            justify-content: space-around;
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow-1);

            .quote {
                width: 3rem;
            }
            .header,
            .subHeader {
                font-weight: 300;
                letter-spacing: 3px;
                font-size: 2rem;
            }

            .background-info-container {
                padding-top: 1rem;
                margin: 0rem 8rem;
                line-height: 1.5em;
                text-align: center;
                font-size: 16px;

                @media (max-width: 1200px) {
                    margin: 0rem 2rem;
                }
                .background-info {
                    font-weight: 100;
                    letter-spacing: 0.05em;
                    padding-bottom: 1rem;
                }
            }
            .role-name-content {
                display: flex;
                flex-direction: column;
                .role {
                }
                .name {
                }
            }
        }
    }
    .image-about-content-0 {
        flex-direction: row;
    }
    .image-about-content-1 {
        flex-direction: row-reverse;
    }
`
