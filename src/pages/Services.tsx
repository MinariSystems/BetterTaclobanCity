import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router';
import ServicesSection from '../components/home/ServicesSection';
import SEO from '../components/SEO';
export default function Services() {
  const { category } = useParams();
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') || '');
  return (
    <main id="main">
      <SEO title="City services" />
      <ServicesSection
        full
        query={query}
        onQueryChange={setQuery}
        initialCategory={category}
      />
    </main>
  );
}
