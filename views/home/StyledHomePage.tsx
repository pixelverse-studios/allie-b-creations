import styled from '@emotion/styled'

interface StyledHomePageProps {
    backgroundUrl: string
}

export const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    color: black;
    padding: 1rem;
`

export const PrimaryHero = styled.div<StyledHomePageProps>`
    background-image: url(${props => props.backgroundUrl});
    background-size: 75% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 80vh;
    display: grid;
    place-items: center;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-1);
    .title {
        font-family: 'Gistesy';
        color: white;
        text-shadow: 0px 0px 20px var(--brand-color-1);
        font-size: 5rem;
        text-align: center;
    }
`
export const SecondaryHero = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.25fr;
    gap: 1rem;
    width: 100%;

    .hero {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow-1);
    }

    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column-reverse;
    }
`

export const StyledGalleryContainer = styled.div`
    height: 100%;
    background-color: var(--brand-color-1);
    border-radius: var(--border-radius);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    color: white;
    box-shadow: var(--box-shadow-1);

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

    @media screen and (max-width: 750px) {
        width: 12rem;
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
