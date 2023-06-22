import styled from '@emotion/styled'

export const StyledFooterWedgie = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .footer-grid {
        display: grid;
        grid-auto-rows: 150px;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        width: 100%;
    }
`
