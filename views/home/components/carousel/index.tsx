import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StyledCarousel } from './StyledCarousel'
import { ArrowForward, ArrowBack } from '@mui/icons-material'
import QuoteSvg from '@/views/about/assets/QuoteSvg'

export const Carousel = () => {
    const { reviews } = useSelector((state: any) => state.testimonials)
    const [activeTestimonial, setActiveTestimonial] = useState<number>(0)

    const displayedReviews = reviews.filter(
        (data: {
            id: string
            display: boolean
            name: string
            rating: number
            review: string
        }) => data.display === true
    )
    const getNextTestimonial = () => {
        setActiveTestimonial(prevActive => {
            if (prevActive === displayedReviews.length - 1) {
                return 0
            } else {
                return prevActive + 1
            }
        })
    }

    const getPreviousTestimonial = () => {
        setActiveTestimonial(prevActive => {
            if (prevActive === 0) {
                return displayedReviews.length - 1
            } else {
                return prevActive - 1
            }
        })
    }

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setActiveTestimonial(prevActive => {
    //             if (prevActive === displayedReviews.length - 1) {
    //                 return 0
    //             } else {
    //                 return prevActive + 1
    //             }
    //         })
    //     }, 6000)

    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [displayedReviews.length])

    return (
        <StyledCarousel>
            <div className="arrow" onClick={getPreviousTestimonial}>
                <ArrowBack />
            </div>
            <div className="testimonial-container">
                <div className="quote">
                    <QuoteSvg />
                </div>
                <div className="testimonial">
                    {displayedReviews.map((review: any, index: number) => {
                        return (
                            <p
                                key={index}
                                style={{
                                    display: `${
                                        index !== activeTestimonial
                                            ? 'none'
                                            : ''
                                    }`
                                }}>
                                {review.review}
                            </p>
                        )
                    })}
                </div>

                <div className="author">
                    {displayedReviews?.map((review: any, index: number) => {
                        return (
                            <p
                                key={index}
                                style={{
                                    display: `${
                                        index !== activeTestimonial
                                            ? 'none'
                                            : ''
                                    }`
                                }}>
                                -{review?.name}
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className="arrow" onClick={getNextTestimonial}>
                <ArrowForward />
            </div>
        </StyledCarousel>
    )
}
