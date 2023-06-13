import styled from '@emotion/styled'

const StyledAuthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    height: 100%;

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
        position: absolute;
        bottom: calc(var(--footer-height) * -1);
        height: var(--footer-height);
    }
`
export default StyledAuthWrapper
