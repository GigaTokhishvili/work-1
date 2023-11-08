import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBarCss from './component-styles/NavBarCss.module.css';

function NavBar() {
    const [showDiv, setShowDiv] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userImg');
        navigate('/');
    }

  return (
    <>
    {showDiv && 
        <div className={NavBarCss.userPopUp}>
            <div onClick={() => setShowDiv(false)}>x</div>
            <button onClick={handleClick}>sign out</button>
        </div>
    }

    <nav className={NavBarCss.nav}>
        <Link to='/main' className={NavBarCss.navBarLink}>Form</Link>
        <div className={NavBarCss.navRight}>
            <div className={NavBarCss.api}>
                <Link to='/api' className={NavBarCss.navBarLink}>Api</Link>
            </div>
            <div className={NavBarCss.user}>
                <p>{localStorage.getItem('userName')}</p>
                <div onClick={() => setShowDiv(!showDiv)} className={NavBarCss.imageDiv}>
                    <img src={localStorage.getItem('userImg')} alt="user image" />
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar