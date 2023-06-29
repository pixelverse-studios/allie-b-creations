import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const StyledFileUpload = styled.div`
    padding: 1rem;
    padding-top: 2rem;
    border: 1px solid #c5c5c5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .uploadBlock {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
            font-size: 1.8rem;
            text-align: center;
        }

        p {
            font-size: 1.1rem;
            text-align: center;
        }

        label span {
            display: flex;
            gap: 1rem;
            align-items: center;
            transition: 0.3s ease;
            .loading {
                animation: spin 1s infinite;
            }
            @keyframes spin {
                from {
                    transform: rotate(0);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        }
    }
    .previewBlock {
        max-height: 50%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`

export const StyledImgPreview = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 2px solid lightgray;
    padding: 10px;
    border-radius: 8px;
    position: relative;

    span {
        font-size: 1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 70%;
    }

    button {
        position: absolute;
        right: 0.5rem;
    }
`
