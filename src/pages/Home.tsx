import { useState } from 'react';
import { useSearchParams } from 'react-router';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/home/ServicesSection';
import Icon from '../components/ui/CityIcon';
import {
  Directory,
  Explore,
  OpenCity,
  Community,
  Safety,
} from '../components/home/CitySections';
import SEO from '../components/SEO';
export default function Home() {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') || '');
  const [category, setCategory] = useState('all');
  const [selection, setSelection] = useState(0);
  const search = () =>
    document
      .getElementById('services')
      ?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      });
  return (
    <>
      <SEO title="A better everyday" />
      <main id="main">
        <Hero
          query={query}
          onQueryChange={value => {
            setQuery(value);
            setCategory('all');
          }}
          onSearch={search}
        />
        <section className="quick-strip container" aria-label="Quick access">
          <a
            href="#services"
            onClick={() => {
              setQuery('');
              setCategory('residents');
              setSelection(value => value + 1);
            }}
          >
            <span className="quick-icon lavender">
              <Icon name="users" />
            </span>
            <span>
              <strong>For residents</strong>
              <small>Everyday city essentials</small>
            </span>
            <span className="quick-arrow">
              <Icon name="arrow-up" />
            </span>
          </a>
          <a
            href="#services"
            onClick={() => {
              setQuery('');
              setCategory('business');
              setSelection(value => value + 1);
            }}
          >
            <span className="quick-icon peach">
              <Icon name="store" />
            </span>
            <span>
              <strong>For businesses</strong>
              <small>Build, register, and grow</small>
            </span>
            <span className="quick-arrow">
              <Icon name="arrow-up" />
            </span>
          </a>
          <a href="#explore">
            <span className="quick-icon mint">
              <Icon name="compass" />
            </span>
            <span>
              <strong>For visitors</strong>
              <small>Experience our kind of city</small>
            </span>
            <span className="quick-arrow">
              <Icon name="arrow-up" />
            </span>
          </a>
        </section>
        <ServicesSection
          key={selection}
          query={query}
          onQueryChange={setQuery}
          initialCategory={category}
        />
        <Directory />
        <Explore />
        <OpenCity />
        <Community />
        <Safety />
      </main>
    </>
  );
}
