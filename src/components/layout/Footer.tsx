import Icon from '../ui/CityIcon';
import { usePreview } from '../usePreview';
export default function Footer() {
  const { openInfo } = usePreview();
  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <a className="brand" href="/#home">
          <img src="/favicon.svg" alt="" width="36" height="36" />
          <span>
            <span className="brand-name">
              <b>Better</b>TaclobanCity
            </span>
            <span className="brand-caption">A BETTER EVERYDAY.</span>
          </span>
        </a>
        <p>For our city. For our people. For what comes next.</p>
        <a className="back-top" href="/#home">
          Back to top{' '}
          <span>
            <Icon name="up" />
          </span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 BetterTaclobanCity · Independent community concept.</span>
        <div>
          <button onClick={() => openInfo('about')} type="button">
            About this preview
          </button>
          <button
            id="credits-button"
            onClick={() => openInfo('credits')}
            type="button"
          >
            Sources & photo credits
          </button>
          <a
            href="https://bettergov.ph/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inspired by BetterGov <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <p className="preview-disclosure">
        Local preview. This is not an official City Government or BetterGov
        website. Services open their official providers; applications and
        payments are handled there.
      </p>
    </footer>
  );
}
