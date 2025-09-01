import './About.css'

import AboutBanner from './AboutBanner/AboutBanner'
import QuoteSection from './QuoteSection/QuoteSection'

const About = () => {
    return (
        <div className='container'>
            <AboutBanner />
            <QuoteSection />
        </div>
    )
}

export default About