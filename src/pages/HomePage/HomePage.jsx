import { Link } from 'react-router-dom';
import './home-page.css';

function Home() {
    return (
        <div className="home-container">
            <div className="stars-bg">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="star" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                    }}></div>
                ))}
            </div>
            
            <div className="content-container">
                <div className="header-section">
                    <div className="logo-container">
                        <h1 className="main-title">PET PALACE</h1>
                        <p className="tagline">Find Your Perfect Companion</p>
                    </div>
                </div>
                
                <div className="card-grid">
                    <Link to="/select" className="card-link">
                        <div className="home-card">
                            <div className="card-top">
                                <div className="icon-wrapper">✨</div>
                                <h2>ADOPT NOW</h2>
                            </div>
                            <p className="card-description">Begin your journey to find the perfect pet companion</p>
                            <button className="primary-button">START ADVENTURE</button>
                        </div>
                    </Link>
                </div>
                
                <div className="footer-info">
                    <p className="info-text">✨ Bond with your pet • ✨ Give them a name • ✨ Forever friends</p>
                </div>
            </div>
        </div>
    )
}

export default Home;