import { useEffect, useState } from 'react';
import logo from '../assets/img/favicon.png';
import logoss from '../assets/img/favlogo.png';
import { Link, useLocation } from 'react-router-dom';

function SirenScripts() {

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    window.open('https://rahules24.github.io/sirenscripts/', '_blank');
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      style={{
        width: '100%',
        padding: '10px 30px',
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
        position: 'fixed',
        top: 0,
        zIndex: 999,
        transition: 'background 0.3s',
      }}
    >
      {/* Left Side: Logo and Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <Link to="/">
          <img
            src={logo}
            alt="BandBox Drycleaners"
            style={{
              width: '3.5em',
              height: '3.5em',
              cursor: 'pointer',
              transition: 'opacity 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          />
        </Link>

        <Link
          to="/newbill"
          className={`toplink ${location.pathname === '/newbill' ? 'active-link' : ''}`}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          NewBill
        </Link>

        <Link
          to="/track"
          className={`toplink ${location.pathname === '/track' ? 'active-link' : ''}`}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Track
        </Link>

        <Link
          to="/contact"
          className={`toplink ${location.pathname === '/contact' ? 'active-link' : ''}`}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Contact Us
        </Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginLeft:'auto' }}>
        <img
          style={{ 
            width: '2.75em', 
            height: '2.75em',
            cursor: 'pointer',
            marginRight: '20px'
          }}
          onClick={handleClick}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          src={logoss} 
          alt="SirenScripts"
        />
        <Link
          to="/about"
          className={`toplink ${location.pathname === '/about' ? 'active-link' : ''}`}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          README.md
        </Link>
      </div>
    </div>
  );
}

export default SirenScripts;
