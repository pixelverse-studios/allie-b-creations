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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fadeIn 0.3s ease-in-out;
`
