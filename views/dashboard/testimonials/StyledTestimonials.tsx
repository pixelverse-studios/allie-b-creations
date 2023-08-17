import styled from '@emotion/styled'

export const StyledTestimonialGrid = styled.section`
    display: grid;
    grid-auto-rows: 300px;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    width: 100%;
`

export const StyledSortAndFilter = styled.div`
    display: grid;
    grid-template-columns: 1fr 10rem;
    grid-gap: 1rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
