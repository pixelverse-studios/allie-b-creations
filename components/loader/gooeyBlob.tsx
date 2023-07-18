import styled from '@emotion/styled'

const StyledGoogeyBlob = styled.div`
    filter: blur(10px) contrast(20);
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    filter: blur(10px) contrast(20);

    .blob-1,
    .blob-2 {
        width: 70px;
        height: 70px;
        position: absolute;
        /* background: #fff; */
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .blob-1 {
        left: 20%;
        animation: osc-l 2.5s ease infinite;
        background: white;
    }
    .blob-2 {
        left: 80%;
        animation: osc-r 2.5s ease infinite;
        background: pink;
        /* color: pink; */
    }
    @keyframes osc-l {
        0% {
            left: 20%;
        }
        50% {
            left: 50%;
        }
        100% {
            left: 20%;
        }
    }
    @keyframes osc-r {
        0% {
            left: 80%;
        }
        50% {
            left: 50%;
        }
        100% {
            left: 80%;
        }
    }
`

const GooeyBlobLoader = () => {
    return (
        <StyledGoogeyBlob>
            <div className="blob-1" />
            <div className="blob-2" />
        </StyledGoogeyBlob>
    )
}

export default GooeyBlobLoader
