import './About.css'

import AboutBanner from './AboutBanner/AboutBanner'
import QuoteSection from './QuoteSection/QuoteSection'
import WhoSection from './WhoSection/WhoSection'

const About = () => {
    return (
        <div className='container'>
            <AboutBanner />
            <WhoSection />
            <QuoteSection />
        </div>
    )
}

export default About