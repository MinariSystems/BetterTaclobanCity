import { useEffect, useState } from 'react';
import Icon from '../ui/CityIcon';
import { usePreview } from '../usePreview';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openInfo } = usePreview();
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  return (
    <>
      {' '}
      <div className="civic-bar">
        <div className="container civic-inner">
          <span>
            <span className="little-sun" aria-hidden="true">
              ✳
            </span>{' '}
            Built for Tacloban. Built around you.
          </span>
          <button type="button" onClick={() => openInfo('about')}>
            Independent community preview <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="/#home"
            aria-label="BetterTaclobanCity home"
          >
            <img src="/favicon.svg" alt="" width="41" height="41" />
            <span>
              <span className="brand-name">
                <b>Better</b>TaclobanCity
              </span>
              <span className="brand-caption">A BETTER EVERYDAY.</span>
            </span>
          </a>
          <nav
            className={menuOpen ? 'open' : ''}
            onClick={() => setMenuOpen(false)}
            id="main-nav"
            aria-label="Main navigation"
          >
            <a className="active" href="/#services">
              City services
            </a>
            <a href="/#directory">Directory</a>
            <a href="/#explore">Discover Tacloban</a>
            <a href="/#transparency">Open city</a>
          </nav>
          <button
            className="emergency-button"
            onClick={() => openInfo('emergency')}
            type="button"
          >
            <span>
              <Icon name="phone" />
            </span>
            <span>Emergency</span>
          </button>
          <button
            className="menu-button"
            id="menu-button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-controls="main-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span>
              <Icon name={menuOpen ? 'close' : 'menu'} />
            </span>
          </button>
        </div>
      </header>
    </>
  );
}
