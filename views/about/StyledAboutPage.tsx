import styled from '@emotion/styled'

export const StyledAboutPage = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
    padding-top: 1rem;

    .image-about-content-0,
    .image-about-content-1 {
        display: flex;
        justify-content: space-around;
        column-gap: 3rem;

        .image {
            max-width: 30rem;
            border: 1px solid var(--brand-color-1);
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
                .background-info {
                    font-weight: 100;
                    letter-spacing: 0.05em;
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
