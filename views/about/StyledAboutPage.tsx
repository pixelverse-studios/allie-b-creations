import styled from '@emotion/styled'

export const StyledAboutPage = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
    padding-top: 1rem;

    .title-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .title {
            width: 20rem;
        }
    }

    .image-about-content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        column-gap: 3rem;

        .image {
            max-width: 30rem;
            border: 1px solid var(--brand-color-1);
        }

        .about {
            display: flex;
            flex-direction: column;
            background-color: var(--brand-color-1);
            width: 100%;
            align-items: center;
            text-align: center;
            justify-content: space-around;
            padding: 2rem;

            .header {
                width: 3rem;
            }

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
            .role-content {
                display: flex;
                flex-direction: column;
                .role {
                }
                .name {
                }
            }
        }
    }
`
