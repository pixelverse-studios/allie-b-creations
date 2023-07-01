import styled from '@emotion/styled'

export const StyledAboutWidget = styled.div`
    .header {
        display: flex;
        column-gap: 0.5rem;
    }

    h3 {
        font-weight: lighter;
        cursor: pointer;
    }
    .active {
        font-weight: bolder;
    }

    .form-view {
        border: var(--brand-border-1);
        border-radius: var(--border-radius);
        padding: 1rem;
    }
`
