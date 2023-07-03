import styled from '@emotion/styled'

export const StyledAboutWidget = styled.div`
    .header {
        display: flex;
        column-gap: 0.5rem;
    }

    h3 {
        font-weight: 400;
        cursor: pointer;
    }
    .active {
        font-weight: 800;
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
