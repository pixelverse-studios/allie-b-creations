import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { DashboardCardStyles } from '../StyledDashboard'
import {
    rowWithIcon_HoverInLeft,
    rowWithIcon_HoverInRight
} from '@/styles/components/rowWithIconHover'

export const LinkHover = css`
    display: inline-block;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: var(--brand-color-1);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

export const StyledServicesWidget = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: var(--brand-color-1);
        font-weight: bold;
        display: flex;
        align-items: center;

        a {
            ${LinkHover}
        }

        span {
            margin: 0 0.5rem;
        }
    }
`

export const StyledServicesBlock = styled.section`
    ${DashboardCardStyles}
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4 {
        color: var(--brand-color-1);
        font-weight: 500;
    }

    & > form > h4 {
        margin-bottom: 1rem;
    }

    .offeringSections {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-gap: 1rem;
    }
`

export const StyledEventTypeCard = styled.div`
    padding: 1rem;

    .MuiAccordionDetails-root {
        padding: 1rem;
    }

    .cardHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        border-bottom: 2px solid lightgray;
        padding: 5px;
        height: 4rem;

        .controls {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            .edit > svg {
                color: var(--brand-color-3a);
            }
            .delete > svg {
                color: var(--brand-color-2a);
            }
            .submit > svg {
                color: var(--brand-color-1);
            }
            .cancel > svg {
                color: var(--brand-color-2a);
            }

            button:disabled > svg {
                color: lightgray;
            }

            .loading {
                height: 1.25rem !important;
                width: 1.25rem !important;
            }
        }
    }

    .cardBody {
        .eventsRow {
            transition: var(--hover-transition);
            margin: 0.5rem 0;
            padding: 0.5rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            border-radius: var(--border-radius);

            h6 {
                margin-bottom: 0;
            }

            ${rowWithIcon_HoverInLeft}

            .collapseIcon {
                transition: var(--hover-transition);
                transform: rotate(0deg);
                &.flip {
                    transition: var(--hover-transition);
                    transform: rotate(180deg);
                }
            }
        }
    }
    .offeringsList {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`

export const StyledOfferingItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 1rem;
    color: var(--accent-color-1);
    position: relative;
    transition: var(--hover-transition);
    padding: 1rem;

    ${rowWithIcon_HoverInRight}
`

export const StyledServicesEventform = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .serviceEventFields {
        display: grid;
        grid-template-columns: 0.75fr 1fr;
        grid-gap: 1rem;

        .fields {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    @media screen and (max-width: 1200px) {
        .serviceEventFields {
            grid-template-columns: 1fr;
        }
    }
`
