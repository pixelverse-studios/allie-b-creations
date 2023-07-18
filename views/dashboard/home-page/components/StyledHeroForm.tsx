import styled from '@emotion/styled'

export const StyledHeroForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    .image-upload {
        display: flex;
        flex-direction: row;
        width: 100%;
        column-gap: 1rem;

        @media (max-width: 840px) {
            flex-direction: column;
        }
        .current-image {
            .uploaded-image {
                max-width: 15rem;
            }
        }
        .file-upload {
            padding-top: 0.8rem;
            width: 100%;
        }
    }
`
