import styled from '@emotion/styled'

export const StyledAboutWidget = styled.div`
    .header {
        display: flex;
        column-gap: 0.5rem;
        padding-bottom: 1rem;

        .button-group {
            color: var(--brand-color-1);
            .MuiButtonGroup-grouped {
                border-color: var(--brand-color-1) !important;
            }
        }
    }

    .form-view {
        border: var(--brand-border-1);
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: column;
        padding: 1rem;
        row-gap: 1rem;
    }
    .upload-image {
        width: 15rem;
    }
`
