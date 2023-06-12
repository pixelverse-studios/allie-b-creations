import styled from '@emotion/styled'

export const StyledFieldSet = styled.fieldset`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    row-gap: 1rem;
    border: none;
    .form-fields {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }

    .button-group {
        column-gap: 0.5rem;
        display: flex;
        justify-content: flex-end;
        button {
        }
    }
`
