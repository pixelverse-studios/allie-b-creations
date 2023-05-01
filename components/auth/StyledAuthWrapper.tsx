import styled from '@emotion/styled'

const StyledAuthWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        'header'
        'main'
        'footer';
    height: 100%;

    nav {
        grid-area: header;
    }

    main {
        grid-area: main;
    }

    footer {
        grid-area: footer;
    }
`
export default StyledAuthWrapper
