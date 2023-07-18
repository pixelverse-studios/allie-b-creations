import styled from '@emotion/styled'

export const StyledTestimonialGrid = styled.section`
    display: grid;
    grid-auto-rows: 300px;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    width: 100%;
`

export const StyledSortAndFilter = styled.div`
    display: flex;
    justify-content: space-between;
`
