import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
    @keyframes colorWheel {
        0% {
            color: var(--brand-color-1);
        }
        25% {
            color: var(--brand-color-2);
        }
        50% {
            color: var(--brand-color-3);
        }
        75% {
            color: var(--brand-color-2);
        }
        100% {
            color: var(--brand-color-1);
        }
    }
    background-color: var(--accent-color-2);
    position: relative;
    bottom: 0;
    left: 0;
    margin: 1rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    .logo {
        width: 12rem;
        height: 6rem;
    }

    .social-icons {
        display: flex;
        justify-content: space-around;
        column-gap: 1rem;

        .icon {
            display: grid;
            place-items: center;
            border-radius: 50%;
            padding: 0.4rem;
            font-size: 2.5rem;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            &:hover {
                color: white;
                background-position: 100% 100%;
            }
        }

        a:nth-of-type(3n + 1) {
            color: #fce4e2;
            background: linear-gradient(#fff 50%, #fce4e2 50%);

            border: 2px solid #fce4e2;
            background-size: 100% 200%;
        }

        a:nth-of-type(3n + 2) {
            color: #faeee3;
            background: linear-gradient(#fff 50%, #faeee3 50%);
            border: 2px solid #faeee3;
            background-size: 100% 200%;
        }
        a:nth-of-type(3n + 3) {
            color: #e0ebe3;
            background: linear-gradient(#fff 50%, #e0ebe3 50%);
            border: 2px solid #e0ebe3;
            background-size: 100% 200%;
        }
    }
    small {
        position: absolute;
        bottom: 2px;
        left: 2px;
    }
`
