import styled from '@emotion/styled'

export const StyledTestimonialGrid = styled.section`
    display: grid;
    grid-auto-rows: 300px;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
    div {
        border-radius: 10px;
    }
    div:nth-of-type(3n + 1) {
        border: 3px solid var(--brand-color-1a);
    }
    div:nth-of-type(3n + 2) {
        border: 3px solid var(--brand-color-2);
    }
    div:nth-of-type(3n + 3) {
        border: 3px solid var(--brand-color-3);
    }
`
