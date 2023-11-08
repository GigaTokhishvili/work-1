import { Link } from 'react-router-dom';
import landingImage from '../../assets/landing-page-logo.svg';
import LandingCss from './Landing.module.css';

function Landing() {
  return (
    <div className={`page ${LandingCss.landing}`}>
        <img src={landingImage} alt="landing page image" />    
        <h1>Get Started Today</h1>
        <Link to='/auth' className={`link ${LandingCss.button}`}>Get Started</Link>
    </div>
  )
}

export default Landing