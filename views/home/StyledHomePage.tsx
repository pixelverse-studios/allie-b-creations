import { CSSProperties } from 'react'
import styled from '@emotion/styled'

interface StyledHomePageProps {
    backgroundUrl: string
}

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .carousel {
        height: 40vh;
    }
`

export const PrimaryHero = styled.div<StyledHomePageProps>`
    background-image: url(${props => props.backgroundUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh - var(--nav-height));
    display: grid;
    place-items: center;
    border-radius: var(--border-radius);
    .title {
        font-family: 'Gistesy';
        color: white;
        text-shadow: 0 0 10px var(--brand-color-1);
        font-size: 4rem;
        text-align: center;
    }
`
export const SecondaryHero = styled.div<StyledHomePageProps>`
    background-image: url(${props => props.backgroundUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
export default StyledHomePage

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
