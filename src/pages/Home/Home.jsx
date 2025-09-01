import AboutSection from './AboutSection/AboutSection'
import HeroSection from './HeroSection/HeroSection'
import HomeSlider from './HomeSlider/HomeSlider'

import './Home.css'


const Home = () => {
    return (
        <div className='container'>
            <HeroSection />
            <AboutSection />
            <HomeSlider />
        </div>
    )
}

export default Home