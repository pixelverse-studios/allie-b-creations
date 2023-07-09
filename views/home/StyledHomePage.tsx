import styled from '@emotion/styled'

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--brand-color-1);
    .primary-hero {
        position: relative;
        display: grid;
        place-items: center;

        .hero-image {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 0;
        }
        /* .overlay {
            min-height: 100vh;
            min-width: 100vw;
            background-color: #ffffff46;
            position: absolute;
            top: 0;
            bottom: 0;
        } */

        .title {
            font-family: 'Gistesy';
            position: absolute;
            color: white;
            text-shadow: 0 0 10px var(--brand-color-1);
            font-size: 4rem;
            text-align: center;
        }
    }

    .carousel {
        height: 60vh;
    }
    .secondary-hero {
        position: relative;
        .hero-image {
            width: 100%;
            height: 100vh;
        }
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
