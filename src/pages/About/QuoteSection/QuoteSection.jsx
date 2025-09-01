import './QuoteSection.css'

import profileImg from '../../../assets/profile-imge.png'

const QuoteSection = () => {
    return (
        <section className="daily-quotes-section">
            <div className="daily-quotes-container">
                <h2 className="heading">Daily Quotes</h2>
                {/* Top content */}
                <div className="quote-top">
                    {/* Left avatar + name */}
                    <div className="quote-left">
                        <div className="avatar-placeholder">
                            <img src={profileImg} alt="" srcset="" />
                        </div>
                        <div>
                            <h3 className="quote-name">Dr. Nathalia Brooks</h3>
                            <p className="quote-subtitle">Mental Health Consultant</p>
                        </div>
                    </div>
                    <div className="quote-right">
                        {/* Right quote text */}
                        <blockquote className="quote-text">
                            <span className="quote-light">“It's Not What Happens To You, But </span>
                            <strong>How You React</strong>
                            <span className="quote-light"> To It That Matters.”</span>
                        </blockquote>

                        {/* Share icons */}
                        <div className="share-wrapper">
                            <span className="share-label">Share On :</span>

                            <button aria-label="Share on Facebook" className="share-icon facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </button>

                            <button aria-label="Share on Instagram" className="share-icon instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a5b48d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37a4 4 0 1 1-4.63-4.63"></path>
                                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                                </svg>
                            </button>

                            <button aria-label="Share on X" className="share-icon x-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.98-2.48 9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.88 2c-2.52 0-4.56 2.03-4.56 4.54 0 .36.04.7.12 1.03-3.78-.19-7.14-2-9.38-4.75a4.48 4.48 0 0 0-.62 2.3c0 1.59.8 2.99 2.02 3.81a4.55 4.55 0 0 1-2.06-.56v.06c0 2.22 1.57 4.07 3.64 4.5a4.56 4.56 0 0 1-2.05.07 4.54 4.54 0 0 0 4.23 3.14 9.06 9.06 0 0 1-5.6 1.94A9.13 9.13 0 0 1 1 18.19a12.88 12.88 0 0 0 7 2.05c8.4 0 13-7 13-13 0-.2 0-.42-.02-.62A9.22 9.22 0 0 0 23 3z" />
                                </svg>
                            </button>
                        </div>

                    </div>

                </div>

                {/* Stats row */}
                <div className="quote-stats">
                    <div className="stat-item">
                        <span className="stat-number green">25+</span>
                        <span className="stat-label">Years Of Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number black">98%</span>
                        <span className="stat-label">Client Satisfaction</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number black">30+</span>
                        <span className="stat-label">Expert Psychologists</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number black">1.5K</span>
                        <span className="stat-label">Sessions Delivered</span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default QuoteSection