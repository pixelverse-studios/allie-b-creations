import styled from '@emotion/styled'

export const StyledLoader = styled.div`
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    animation: fadeIn 0.3s ease-in-out;
`
