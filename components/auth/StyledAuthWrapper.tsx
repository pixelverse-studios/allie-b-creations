import styled from '@emotion/styled'

const StyledAuthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    nav {
        height: var(--nav-height);
        position: absolute;
        width: 100%;
    }

    main {
        margin: 0 auto;
        margin-top: var(--nav-height);
        width: 100vw;
        max-width: var(--max-width);
        padding: 1rem;
        height: 100%;
    }

    footer {
    }
`
export default StyledAuthWrapper
