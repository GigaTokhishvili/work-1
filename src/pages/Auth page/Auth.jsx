import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCss from './Auth.module.css';
import labelImage from '../../assets/auth-page-logo.svg';

function Auth() {
  const [authName, setAuthName] = useState('');
  const [authImage, setAuthImage] = useState('');
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const userImg = e.target.result;
        setAuthImage(userImg);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    if (!authImage || !authName) {
      alert('Please upload an image and enter your name');
      return;
    }

    localStorage.setItem('userImg', authImage);
    localStorage.setItem('userName', authName);
    navigate('/main');
  };

  return (
    <div className={`page ${AuthCss.auth}`}>
      <div className={AuthCss.form}>
        <h1>Get Started</h1>
        <p>add a photo</p>
        <label htmlFor="img-input" className={AuthCss.imgInputLabel}>
          <img src={labelImage} alt="label logo" />
          <input
            onChange={handleImageUpload}
            id="img-input"
            type="file"
            className={AuthCss.imgInput}
            accept="image/*"
          />
        </label>
        <p>fill in your name</p>
        <input
          onChange={(e) => setAuthName(e.target.value)}
          type="text"
          placeholder="your name"
          className={AuthCss.nameInput}
        />
        <button onClick={handleClick} className="link">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Auth;
