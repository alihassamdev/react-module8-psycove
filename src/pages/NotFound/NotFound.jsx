import { Link } from "react-router";

import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-card">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Just like in life, sometimes you take a path expecting something...
                    and end up somewhere unexpected.
                </p>
                <Link to="/">
                    <div className="cta-button">
                        <span className="cta-text">Back To Home</span>
                        <div className="cta-circle">
                            <span className="cta-arrow">
                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.08906 7.92999L2.01093 0.914054C1.70468 0.609992 1.21 0.612492 0.906246 0.919054C0.602496 1.2253 0.604683 1.71999 0.911246 2.02374L7.43187 8.48687L0.930621 14.9784C0.625308 15.2834 0.624996 15.7781 0.929996 16.0834C1.0825 16.2362 1.2825 16.3125 1.48281 16.3125C1.68312 16.3125 1.88218 16.2362 2.035 16.0841L9.09187 9.03749C9.23906 8.89062 9.32125 8.69124 9.32093 8.48343C9.32062 8.2753 9.23718 8.07624 9.08968 7.92999H9.08906Z" fill="#819361" />
                                </svg>

                            </span>
                        </div>

                    </div></Link>
            </div>
        </div >
    );
};

export default NotFound;
