import styled from '@emotion/styled'
export const StyledContactLinkCard = styled.div`
    .link-card {
        border: 3px solid var(--brand-color-1);
        border-radius: var(--border-radius);
        height: 100%;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        row-gap: 0.7rem;

        .card-header {
            display: flex;
            justify-content: space-between;
            .button-group {
                display: flex;
                column-gap: 0.2rem;
            }
        }

        .input-group {
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
            .MuiOutlinedInput-root {
                height: 3.5rem;
            }
        }
    }
`
