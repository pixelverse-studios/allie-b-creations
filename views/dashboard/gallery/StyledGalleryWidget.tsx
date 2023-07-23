import styled from '@emotion/styled'

export const StyledGalleryWidget = styled.div`
    .header {
        display: flex;
        justify-content: flex-start;
        column-gap: 0.5rem;
        padding-bottom: 1rem;
        align-items: center;

        h1 {
            font-weight: bold;
            color: var(--brand-color-1);

            svg {
                color: var(--brand-color-1);
            }
        }
    }

    .imgsDisplay {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        grid-gap: 1rem;

        .galleryItem {
            position: relative;

            height: 100%;
            margin: auto;
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 1rem;
            border: 2px solid var(--brand-color-1);
            padding: 1rem;
            border-radius: var(--border-radius);

            .buttons {
                position: absolute;
                right: 6px;
                top: 10px;
                display: flex;
                gap: 5px;
            }

            img {
                margin: auto 0;
                object-fit: contain;
                border-radius: var(--border-radius);
            }

            .controls {
                display: flex;
                gap: 5px;
                justify-content: space-between;

                .MuiAutocomplete-root {
                    flex: 1;
                }

                /* .buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                } */
            }
        }
    }
`
