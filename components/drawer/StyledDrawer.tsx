import styled from '@emotion/styled'

export const StyledDrawerHeader = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        font-weight: bold;
        text-transform: uppercase;
    }
    .close-icon {
        margin-right: 0.3rem;
        &:hover {
            cursor: pointer;
        }
    }
`
export const StyledDrawerContent = styled.div`
    padding: 1rem;
`
