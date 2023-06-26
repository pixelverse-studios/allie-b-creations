import styled from '@emotion/styled'

export const StyledFooterWedgie = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .footer-grid {
        display: grid;
        grid-auto-rows: 210px;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        width: 100%;
    }
`
export const StyledSubmissionForm = styled.form`
    border: var(--brand-border-1);
    border-radius: var(--border-radius);
    padding: 1rem;
    height: 100%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
    .form-group {
        display: flex;
        align-items: center;
        column-gap: 1rem;

        .field-group {
            display: flex;
            flex-direction: column;
            column-gap: 1rem;
            row-gap: 1rem;
        }
    }
`
