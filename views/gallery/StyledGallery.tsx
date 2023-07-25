import styled from '@emotion/styled'

export const StyledGalleryPage = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 1rem;

    .filter {
        display: flex;
        gap: 0.5rem;
        margin: auto;
        flex-wrap: wrap;

        button {
            display: grid;
            place-items: center;
            border-radius: 2.5rem;
            padding: 1rem;
            min-width: 3em;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.4s ease-in-out;

            color: var(--brand-color-1);
            background: linear-gradient(#fff 50%, var(--brand-color-1) 50%);

            border: 2px solid var(--brand-color-1);
            background-size: 100% 205%;

            &:hover {
                color: white;
                background-position: 100% 100%;
            }

            &.active {
                background-color: var(--brand-color-1);
                background-position: 100% 100%;
                color: var(--accent-color-2);
            }
        }
    }
`
