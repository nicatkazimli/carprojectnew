import React from 'react';
import './HomePage.css';
import Rotating from '../../Layout/Rotating/Rotating';

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <video autoPlay muted loop className="bg-video">
          <source src="public/istockphoto-1289379103-640_adpp_is.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="content">
          <h1>Hər növ avtomobillər burada</h1>
          <p>Sürət, performans, həyəcan və əsl keyfiyyət</p>
          <div className="buttons">
          </div>
          <Rotating/>
        </div>
      </div>
      
      <div className="why-us-section">
        
        <h2>Niyə məhz biz?</h2>
        <div className="why-us-cards">
          
          <div className="why-card">
             <video autoPlay muted loop className="bg-video">
          <source src="public/video/istockphoto-2162293209-640_adpp_is.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
            <span>🚗</span>
            <h3>Geniş avtomobil Seçimi</h3>
            <p>Minlərlə fərqli model bir toxunuşla əlindədir.</p>
          </div>
          <div className="why-card">
             <video autoPlay muted loop className="bg-video">
          <source src="public/video/istockphoto-2162293209-640_adpp_is.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
            <span>⚡</span>
            <h3>Sürətli Çatdırılma</h3>
            <p>Gömrüyə qədər təhlükəsiz şəkildə gətiririk.</p>
          </div>
          <div className="why-card">
             <video autoPlay muted loop className="bg-video">
          <source src="public/video/istockphoto-2162293209-640_adpp_is.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
            <span>💰</span>
            <h3>Ən Yaxşı Qiymət</h3>
            <p>Bazarın ən sərfəli təklifləri bir arada.</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
