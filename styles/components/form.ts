import styled from '@emotion/styled'

export const FormRow = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;

    & > * {
        flex: 1;
    }

    @media screen and (max-width: 850px) {
        flex-direction: column;
    }
`
