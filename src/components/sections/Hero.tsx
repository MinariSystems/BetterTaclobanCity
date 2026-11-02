import Icon from '../ui/CityIcon';
type Props = {
  query: string;
  onQueryChange: (query: string) => void;
  onSearch: () => void;
};
export default function Hero({ query, onQueryChange, onSearch }: Props) {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="blue-dot"></span> MAUPAY NGA ADLAW, TACLOBAN!
          </div>
          <h1 id="hero-title">
            Your city.
            <br />
            Your services.
            <br />
            <span>A better everyday.</span>
          </h1>
          <p>
            Less searching. More living. Find the services, information, and
            places that bring our city closer to you.
          </p>
          <form
            className="search-form"
            id="search-form"
            onSubmit={event => {
              event.preventDefault();
              onSearch();
            }}
            role="search"
          >
            <label className="sr-only" htmlFor="service-search">
              Search city services
            </label>
            <span className="search-icon">
              <Icon name="search" />
            </span>
            <input
              id="service-search"
              value={query}
              onChange={event => onQueryChange(event.target.value)}
              name="q"
              type="search"
              placeholder="What can we help you with?"
              autoComplete="off"
              aria-controls="service-grid"
              maxLength={100}
            />
            <button type="submit" aria-label="Find city services">
              <span>
                <Icon name="arrow" />
              </span>
            </button>
          </form>
          <div className="popular">
            <span>Try searching:</span>
            <button
              type="button"
              onClick={() => {
                onQueryChange('birth certificate');
                onSearch();
              }}
            >
              Birth certificate
            </button>
            <button
              type="button"
              onClick={() => {
                onQueryChange('business permit');
                onSearch();
              }}
            >
              Business permit
            </button>
          </div>
          <div className="hero-note">
            <span>
              <Icon name="shield" />
            </span>{' '}
            Useful local information. Direct links to official sources.
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src="/assets/tacloban/san-juanico.webp"
              alt="Aerial view of San Juanico Bridge connecting Leyte and Samar across turquoise water"
              width="1800"
              height="1200"
              fetchPriority="high"
            />
            <div className="image-gradient"></div>
            <div className="photo-topline">
              <span>
                <i></i> OUR HOME, OUR TACLOBAN
              </span>
              <span>
                <Icon name="compass" />
              </span>
            </div>
            <div className="photo-bottomline">
              <span className="photo-location">
                <span>
                  <Icon name="pin" />
                </span>{' '}
                San Juanico Bridge
              </span>
              <span className="photo-coordinates">LEYTE ↔ SAMAR</span>
            </div>
          </div>
          <a href="#explore" className="hero-postcard">
            <span className="postcard-icon">
              <span>
                <Icon name="sun" />
              </span>
            </span>
            <span>
              <small>THERE’S MORE TO OUR CITY</small>
              <strong>
                A place to call home.
                <br />A city to discover.
              </strong>
            </span>
            <span className="round-arrow">
              <Icon name="arrow-up" />
            </span>
          </a>
          <span className="visual-spark" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>
      <div className="container">
        <div className="hero-bottom">
          <span>
            <span className="tiny-flag" aria-hidden="true"></span> TACLOBAN
            CITY, LEYTE · PHILIPPINES
          </span>
          <a href="#services">
            Start with what you need{' '}
            <span>
              <Icon name="down" />
            </span>
          </a>
          <span className="community-label">
            A little more connected. A lot more possible.
          </span>
        </div>
      </div>
    </section>
  );
}
