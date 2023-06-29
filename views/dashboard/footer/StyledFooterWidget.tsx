import styled from '@emotion/styled'

export const StyledFooterWedgie = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .footer-grid {
        display: grid;
        grid-auto-rows: 250px;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        width: 100%;
    }
`
export const StyledSubmissionForm = styled.div`
    border: var(--brand-border-1);
    border-radius: var(--border-radius);
    padding: 1rem 1rem 3rem 1rem;

    width: 22rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
    position: relative;
    .form-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        column-gap: 1rem;
        row-gap: 1rem;

        .field-group {
        }
        button {
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
`
