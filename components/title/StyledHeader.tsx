import styled from '@emotion/styled'

export const StyledTitleContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    .background-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    .title {
        position: relative;
        font-family: var(--Gistesy);
        text-align: center;
        font-size: 5rem;
    }
`
