import './AboutBanner.css'

import aboutBannerPoster from '../../../assets/About-Banner-Poster.png'
import aboutBannerSmall from '../../../assets/About-Banner-small.png'

const AboutBanner = () => {
    return (
        <div className="about-header">
            <h2 className="about-heading">About Us</h2>

            <div className="about-content">
                {/* Left Image - full height match */}
                <div className="about-left">
                    <div className="img-placeholder full-height" >
                        <img src={aboutBannerPoster} alt="" />

                    </div>
                </div>

                {/* Right Text and Image */}
                <div className="about-right">
                    <h3 className="about-subheading">
                        Bridging The Gap In Mental <br /> Health Care
                    </h3>

                    <div className="breadcrumbs">
                        <span className="breadcrumb-home">Home</span>
                        <span className="breadcrumb-divider">/</span>
                        <span className="breadcrumb-current">About Us</span>
                    </div>

                    <div className="img-placeholder small" >
                        <img src={aboutBannerSmall} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutBanner