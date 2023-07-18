import styled from '@emotion/styled'

const StyledAuthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;

    nav {
        position: absolute;
        width: 100%;
        top: 0;
    }

    main {
        margin: 0 auto;
        margin-top: var(--nav-height);
        width: 100vw;
        max-width: var(--max-width);
        height: 100%;
    }

    footer {
        height: var(--footer-height);
    }
`
export default StyledAuthWrapper
