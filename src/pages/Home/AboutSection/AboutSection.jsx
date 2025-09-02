import './AboutSection.css'

import aboutPoster from '../../../assets/about-poster.png'

const AboutSection = () => {
    return (
        <div className="about-full-section">
            <div className="about-top-content">
                <h2 className="about-title">About Us</h2>
            </div>

            <div className="about-bottom-content">
                {/* Left Image */}
                <div className="about-image-container">
                    <img
                        src={aboutPoster}
                        className="about-image"
                    />
                </div>

                {/* Right */}
                <div className="about-text-content">
                    <p className="about-paragraph">
                        We are a team of licensed psychologists, therapists, and mental health professionals dedicated to helping individuals navigate life’s challenges with compassion and clarity.
                    </p>

                    <p className='about-paragraph'>Whether you're seeking support for anxiety, depression, relationship struggles, burnout, or simply want to grow, we’re here to walk beside you — not just as professionals.</p>

                    <div className="about-button">
                        <span className="button-text">Learn More</span>
                        <div className="button-circle">
                            <span className="cta-arrow">
                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.08906 7.92999L2.01093 0.914054C1.70468 0.609992 1.21 0.612492 0.906246 0.919054C0.602496 1.2253 0.604683 1.71999 0.911246 2.02374L7.43187 8.48687L0.930621 14.9784C0.625308 15.2834 0.624996 15.7781 0.929996 16.0834C1.0825 16.2362 1.2825 16.3125 1.48281 16.3125C1.68312 16.3125 1.88218 16.2362 2.035 16.0841L9.09187 9.03749C9.23906 8.89062 9.32125 8.69124 9.32093 8.48343C9.32062 8.2753 9.23718 8.07624 9.08968 7.92999H9.08906Z" fill="#819361" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutSection