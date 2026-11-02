import Icon from '../ui/CityIcon';
import { usePreview } from '../usePreview';
export function Directory() {
  return (
    <section
      className="directory-section"
      id="directory"
      aria-labelledby="directory-heading"
    >
      <div className="container directory-grid">
        <div className="directory-intro">
          <div className="eyebrow">THE RIGHT PEOPLE, A LITTLE CLOSER</div>
          <h2 id="directory-heading">
            City Hall shouldn’t
            <br />
            feel a world away.
          </h2>
          <p>
            Know where to start. Find the city office that handles what you
            need.
          </p>
          <a
            className="primary-button"
            href="https://tacloban.gov.ph/departments/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the city directory{' '}
            <span>
              <Icon name="arrow-up" />
            </span>
          </a>
          <div className="directory-caption">
            <span>
              <Icon name="building" />
            </span>{' '}
            Official office information from tacloban.gov.ph
          </div>
        </div>
        <div className="office-list">
          <a
            href="https://tacloban.gov.ph/departments/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="office-number">01</span>
            <span>
              <strong>City Civil Registrar</strong>
              <small>Birth, marriage, and civil records</small>
            </span>
            <span>
              <Icon name="arrow-up" />
            </span>
          </a>
          <a
            href="https://eboss.tacloban.gov.ph/Business"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="office-number">02</span>
            <span>
              <strong>Business Permits & Licensing</strong>
              <small>Starting and renewing your business</small>
            </span>
            <span>
              <Icon name="arrow-up" />
            </span>
          </a>
          <a
            href="https://tacloban.gov.ph/departments/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="office-number">03</span>
            <span>
              <strong>City Social Welfare & Development</strong>
              <small>Social services and community assistance</small>
            </span>
            <span>
              <Icon name="arrow-up" />
            </span>
          </a>
          <a
            href="https://tacloban.gov.ph/departments/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="office-number">04</span>
            <span>
              <strong>City Tourism Operations</strong>
              <small>
                Local culture, destinations, and visitor information
              </small>
            </span>
            <span>
              <Icon name="arrow-up" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Explore() {
  return (
    <section
      className="section container explore-section"
      id="explore"
      aria-labelledby="explore-heading"
    >
      <div className="section-heading">
        <div>
          <div className="eyebrow">ROOTED HERE. OPEN TO EVERYONE.</div>
          <h2 id="explore-heading">There’s a little Tacloban for everyone.</h2>
          <p>
            Our stories, our flavors, our places. Get to know the city beyond
            the everyday.
          </p>
        </div>
      </div>
      <div className="explore-grid">
        <a
          className="explore-feature"
          href="https://taclobantourism.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="explore-photo"></div>
          <div className="explore-feature-content">
            <span className="light-pill">
              <span>
                <Icon name="compass" />
              </span>{' '}
              DISCOVER TACLOBAN
            </span>
            <h3>
              Come for the sights.
              <br />
              Stay for the stories.
            </h3>
            <span className="explore-feature-cta">
              Explore Tacloban Tourism{' '}
              <span className="round-arrow">
                <Icon name="arrow-up" />
              </span>
            </span>
          </div>
        </a>
        <div className="explore-links">
          <a
            href="https://tacloban.gov.ph/where-to-dine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="explore-icon peach">
              <Icon name="utensils" />
            </span>
            <span>
              <small>A TASTE OF HOME</small>
              <strong>Find your next favorite.</strong>
              <p>Discover where to dine in the city.</p>
            </span>
            <span>
              <Icon name="arrow-up" />
            </span>
          </a>
          <a
            href="https://tacloban.gov.ph/festivities-and-observances/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="explore-icon lavender">
              <Icon name="sun" />
            </span>
            <span>
              <small>OUR CULTURE, ALIVE</small>
              <strong>Feel the spirit of Tacloban.</strong>
              <p>Explore local festivities and traditions.</p>
            </span>
            <span>
              <Icon name="arrow-up" />
            </span>
          </a>
          <a
            href="https://tacloban.gov.ph/where-to-stay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="explore-icon mint">
              <Icon name="bed" />
            </span>
            <span>
              <small>MAKE YOURSELF AT HOME</small>
              <strong>A place for your kind of stay.</strong>
              <p>Find accommodation around the city.</p>
            </span>
            <span>
              <Icon name="arrow-up" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function OpenCity() {
  return (
    <section
      className="open-section container"
      id="transparency"
      aria-labelledby="open-heading"
    >
      <div className="open-intro">
        <span className="open-symbol">
          <Icon name="book" />
        </span>
        <div className="eyebrow">INFORMATION BELONGS TO EVERYONE</div>
        <h2 id="open-heading">
          A more open city.
          <br />A better informed you.
        </h2>
        <p>
          Public information should be easy to find. Start with the city’s
          published documents.
        </p>
      </div>
      <div className="open-links">
        <a
          href="https://tacloban.gov.ph/full-disclosure-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <strong>Full disclosure documents</strong>
            <small>Published financial and accountability records</small>
          </span>
          <span>
            <Icon name="arrow-up" />
          </span>
        </a>
        <a
          href="https://tacloban.gov.ph/ordinance/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <strong>City ordinances</strong>
            <small>Local legislation and public policies</small>
          </span>
          <span>
            <Icon name="arrow-up" />
          </span>
        </a>
        <a
          href="https://tacloban.gov.ph/invitation-to-bid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <strong>Bids and procurement</strong>
            <small>Find published invitations to bid</small>
          </span>
          <span>
            <Icon name="arrow-up" />
          </span>
        </a>
      </div>
    </section>
  );
}

export function Community() {
  const { openInfo } = usePreview();
  return (
    <section className="community-section container">
      <span className="community-spark" aria-hidden="true">
        ✳
      </span>
      <div>
        <div className="eyebrow">SMALL STEPS. A BETTER CITY.</div>
        <h2>
          Made with hope.
          <br />
          Made for Tacloban.
        </h2>
        <p>
          A community idea for making local government easier to navigate.
          <br />
          Inspired by the spirit of BetterGov. Rooted in our own city.
        </p>
      </div>
      <button
        className="primary-button"
        onClick={() => openInfo('about')}
        type="button"
      >
        Get to know the project{' '}
        <span>
          <Icon name="arrow-up" />
        </span>
      </button>
    </section>
  );
}

export function Safety() {
  const { openInfo } = usePreview();
  return (
    <section className="safety-strip" aria-label="Safety information">
      <div className="container safety-inner">
        <span className="safety-label">
          <span>
            <Icon name="shield" />
          </span>{' '}
          Keep these close.
        </span>
        <button onClick={() => openInfo('emergency')} type="button">
          Emergency information{' '}
          <span>
            <Icon name="arrow-up" />
          </span>
        </button>
        <a
          href="https://pagasa.dost.gov.ph/tropical-cyclone/severe-weather-bulletin"
          target="_blank"
          rel="noopener noreferrer"
        >
          PAGASA weather bulletins{' '}
          <span>
            <Icon name="arrow-up" />
          </span>
        </a>
        <span className="safety-note">
          Information that helps us look after each other.
        </span>
      </div>
    </section>
  );
}
