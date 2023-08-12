import styled from '@emotion/styled'

export const StyledLoginPage = styled.div`
    margin-top: 2rem;
    height: var(--height-with-nav-excluded);
    width: 100vw;

    .loginBlock {
        width: 475px;
        margin: 0 auto;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        border-radius: var(--border-radius);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: var(--brand-color-1);
            margin-bottom: 1rem;
        }

        button {
            border-radius: var(--border-radius);
            border: 2px solid transparent;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            font-size: 1.2rem;
            width: 8.5rem;
            font-weight: 600;
            color: var(--brand-color-2);
            transition: var(--hover-transition);

            img {
                height: 1.5rem;
                width: auto;
            }

            &:hover {
                border: 2px solid var(--brand-color-1);
                box-shadow: 0px 8px 15px var(--brand-color-1);
                color: var(--brand-color-1);
            }
        }
    }
`
