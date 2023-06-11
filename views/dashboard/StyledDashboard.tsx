import styled from '@emotion/styled'

export const StyledDashboard = styled.section`
    ul {
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 1rem;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 10rem;
            color: var(--accent-color-1);
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: var(--hover-transition);
            border: 4px solid transparent;

            &:hover {
                border-color: #f4d6d2;
                background-color: var(--brand-color-2);
            }
        }
    }
`
