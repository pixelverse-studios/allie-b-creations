import styled from '@emotion/styled'

export const StyledConfirmDeleteButton = styled.button`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 25px;
    border: 3px solid var(--brand-color-3);
    background-color: #fff;
    cursor: pointer;
    transition: var(--hover-transition);

    overflow: hidden;
    transition: 0.3s;

    svg {
        color: var(--brand-color-1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.3s;
    }
    &:focus {
        width: 150px;
        height: 40px;
        transition: 0.3s;
        background-color: var(--brand-color-1);

        svg {
            opacity: 0;
            transition: 0.3s;
        }

        span {
            color: white;
            opacity: 1;
            transition: 0.3s;
        }
    }
    span {
        width: 150px;
        position: absolute;
        opacity: 0;
        transform: translate(-50%, -50%);
        color: var(--brand-color-1);
        font-weight: 600;
        transition: 0.3s;
    }

    &:hover {
        /* border: 3px solid; */
        background-color: var(--brand-color-3);
    }
`

export const StyledCircleIconButton = styled.button`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 25px;
    border: 3px solid var(--brand-color-3);
    background-color: #fff;
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s;

    svg {
        color: var(--brand-color-1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.3s;
    }

    &:disabled {
        border: 3px solid grey;
        cursor: not-allowed;

        svg {
            color: grey;
        }
    }
`
