import styled from '@emotion/styled'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    .image-upload {
        display: flex;
        flex-direction: row;
        width: 100%;
        .current-image {
            .uploaded-image {
                max-width: 15rem;
            }
        }
        .file-upload {
            width: 100%;
        }
    }
`
