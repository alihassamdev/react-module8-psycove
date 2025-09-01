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
                            <span className="button-arrow">›</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutSection