import { CSSProperties } from 'react'
import styled from '@emotion/styled'

interface StyledHomePageProps {
    backgroundUrl: string
}

export const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    color: black;
    padding-top: 0.5rem;
    .carousel {
        height: 40vh;
    }
`

export const PrimaryHero = styled.div<StyledHomePageProps>`
    background-image: url(${props => props.backgroundUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 90vh;
    display: grid;
    place-items: center;
    border-radius: var(--border-radius);
    .title {
        font-family: 'Gistesy';
        color: white;
        text-shadow: 0px 0px 20px var(--brand-color-1);
        font-size: 5rem;
        text-align: center;
    }
`
export const SecondaryHero = styled.div<StyledHomePageProps>`
    background-image: url(${props => props.backgroundUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 60vh;
    display: flex;
    justify-content: flex-end;
    padding: 4rem;
    border-radius: var(--border-radius);
    .gallery-block {
        height: 100%;

        border: 3px solid yellow;
    }
`

export const StyledGalleryContainer = styled.div`
    height: 100%;
    background-color: var(--brand-color-1);
    width: 25%;
    border-radius: var(--border-radius);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    color: white;
    .header {
        font-family: 'Gistesy';
        font-size: 3rem;
        text-align: center;
    }
    .image {
        width: 4rem;
    }
    .quote {
        font-weight: lighter;
        text-align: center;
        font-size: 1.2rem;
    }
`

export const StyledGalleryButton = styled.button`
    display: grid;
    place-items: center;
    border-radius: 50%;
    padding: 0.4rem;
    font-size: 2.5rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    color: var(--brand-color-1);
    background: linear-gradient(white 50%, var(--brand-color-1) 50%);

    border: 2px solid #fce4e2;
    background-size: 100% 210%;
    &:hover {
        color: white;
        background-position: 100% 100%;
    }
`

// @keyframes pulse {
//     0% {

//         text-shadow: 0 0 3px var(--brand-color-1);
//     }
//     50% {
//         text-shadow: 0 0 8px var(--brand-color-1);
//     }
//     100% {
//         text-shadow: 0 0 3px var(--brand-color-1);
//     }
// }
